import { createContext, useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import {
  AXIE_STUDIO_ACCESS_TOKEN,
  AXIE_STUDIO_API_TOKEN,
  AXIE_STUDIO_AUTO_LOGIN_OPTION,
  AXIE_STUDIO_REFRESH_TOKEN,
} from "@/constants/constants";
import { useGetUserData, useLoginUser } from "@/controllers/API/queries/auth";
import { useGetGlobalVariablesMutation } from "@/controllers/API/queries/variables/use-get-mutation-global-variables";
import useAuthStore from "@/stores/authStore";
import { setLocalStorage, getLocalStorage } from "@/utils/local-storage-util";
import { useStoreStore } from "../stores/storeStore";
import type { Users } from "../types/api";
import type { AuthContextType } from "../types/contexts/auth";

const initialValue: AuthContextType = {
  accessToken: null,
  login: () => {},
  userData: null,
  setUserData: () => {},
  authenticationErrorCount: 0,
  setApiKey: () => {},
  apiKey: null,
  storeApiKey: () => {},
  getUser: () => {},
};

export const AuthContext = createContext<AuthContextType>(initialValue);

const getSuperuserCredentials = () => {
  console.log('=== Environment Variables Debug ===');
  console.log('VITE_LANGFLOW_SUPERUSER:', import.meta.env.VITE_LANGFLOW_SUPERUSER);
  console.log('VITE_AXIE_STUDIO_SUPERUSER:', import.meta.env.VITE_AXIE_STUDIO_SUPERUSER);
  console.log('VITE_LANGFLOW_SUPERUSER_PASSWORD defined:', !!import.meta.env.VITE_LANGFLOW_SUPERUSER_PASSWORD);
  console.log('VITE_AXIE_STUDIO_SUPERUSER_PASSWORD defined:', !!import.meta.env.VITE_AXIE_STUDIO_SUPERUSER_PASSWORD);
  
  const credentials = {
    username: import.meta.env.VITE_LANGFLOW_SUPERUSER || 
              import.meta.env.VITE_AXIE_STUDIO_SUPERUSER,
    password: import.meta.env.VITE_LANGFLOW_SUPERUSER_PASSWORD || 
              import.meta.env.VITE_AXIE_STUDIO_SUPERUSER_PASSWORD
  };
  
  console.log('Final credentials:', { username: credentials.username, password: !!credentials.password });
  return credentials;
};

export function AuthProvider({ children }): React.ReactElement {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState<string | null>(
    cookies.get(AXIE_STUDIO_ACCESS_TOKEN) ?? null,
  );
  const [userData, setUserData] = useState<Users | null>(null);
  const [apiKey, setApiKey] = useState<string | null>(
    cookies.get(AXIE_STUDIO_API_TOKEN),
  );

  const checkHasStore = useStoreStore((state) => state.checkHasStore);
  const fetchApiData = useStoreStore((state) => state.fetchApiData);
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated);

  const { mutate: mutateLoggedUser } = useGetUserData();
  const { mutate: mutateGetGlobalVariables } = useGetGlobalVariablesMutation();
  const { mutate: mutateLoginUser } = useLoginUser();

  const isLoginPage = location.pathname.includes("login");

  const isTokenValid = (timestamp: string | null): boolean => {
    if (!timestamp) return false;
    const tokenTime = new Date(timestamp).getTime();
    const now = new Date().getTime();
    const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    return (now - tokenTime) < twentyFourHours;
  };

  useEffect(() => {
    const storedAccessToken = cookies.get(AXIE_STUDIO_ACCESS_TOKEN);
    const tokenTimestamp = getLocalStorage('axie_studio_token_timestamp');
    
    if (storedAccessToken && isTokenValid(tokenTimestamp)) {
      setAccessToken(storedAccessToken);
      setIsAuthenticated(true);
      getUser();
    } else if (!isLoginPage) {
      console.log('=== Automatic Authentication Attempt ===');
      console.log('Current page is not login page, attempting automatic authentication');
      const credentials = getSuperuserCredentials();
      
      if (!credentials.username || !credentials.password) {
        console.error('Missing superuser credentials from environment variables');
        navigate("/login");
        return;
      }
      
      console.log('Attempting login with superuser credentials');
      mutateLoginUser(credentials, {
        onSuccess: (data) => {
          const timestamp = new Date().toISOString();
          setLocalStorage('axie_studio_token_timestamp', timestamp);
          login(data.access_token, "auto", data.refresh_token);
        },
        onError: (error) => {
          console.error("Automatic superuser authentication failed:", error);
          cookies.remove(AXIE_STUDIO_ACCESS_TOKEN);
          cookies.remove(AXIE_STUDIO_REFRESH_TOKEN);
          localStorage.removeItem('axie_studio_token_timestamp');
          navigate("/login");
        },
      });
    }
  }, []);

  useEffect(() => {
    const apiKey = cookies.get(AXIE_STUDIO_API_TOKEN);
    if (apiKey) {
      setApiKey(apiKey);
    }
  }, []);

  function getUser() {
    mutateLoggedUser(
      {},
      {
        onSuccess: async (user) => {
          setUserData(user);
          const isSuperUser = user!.is_superuser;
          useAuthStore.getState().setIsAdmin(isSuperUser);
          checkHasStore();
          fetchApiData();
        },
        onError: () => {
          setUserData(null);
        },
      },
    );
  }

  function login(
    newAccessToken: string,
    autoLogin: string,
    refreshToken?: string,
  ) {
    cookies.set(AXIE_STUDIO_ACCESS_TOKEN, newAccessToken, { path: "/" });
    cookies.set(AXIE_STUDIO_AUTO_LOGIN_OPTION, autoLogin, { path: "/" });
    setLocalStorage(AXIE_STUDIO_ACCESS_TOKEN, newAccessToken);
    
    const timestamp = new Date().toISOString();
    setLocalStorage('axie_studio_token_timestamp', timestamp);

    if (refreshToken) {
      cookies.set(AXIE_STUDIO_REFRESH_TOKEN, refreshToken, { path: "/" });
    }
    setAccessToken(newAccessToken);
    setIsAuthenticated(true);
    getUser();
    getGlobalVariables();
  }

  function storeApiKey(apikey: string) {
    setApiKey(apikey);
  }

  function getGlobalVariables() {
    mutateGetGlobalVariables({});
  }

  return (
    // !! to convert string to boolean
    <AuthContext.Provider
      value={{
        accessToken,
        login,
        setUserData,
        userData,
        authenticationErrorCount: 0,
        setApiKey,
        apiKey,
        storeApiKey,
        getUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
