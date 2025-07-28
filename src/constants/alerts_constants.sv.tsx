// Swedish translations for alert constants
// ERROR MESSAGES
export const MISSED_ERROR_ALERT = "Hoppsan! Det verkar som att du missade något";
export const INCOMPLETE_LOOP_ERROR_ALERT =
  "Flödet har en ofullständig loop. Kontrollera dina anslutningar och försök igen.";
export const INVALID_FILE_ALERT =
  "Vänligen välj en giltig fil. Endast dessa filtyper är tillåtna:";
export const CONSOLE_ERROR_MSG = "Fel uppstod vid uppladdning av fil";
export const CONSOLE_SUCCESS_MSG = "Fil uppladdad framgångsrikt";
export const INFO_MISSING_ALERT =
  "Hoppsan! Det verkar som att du missade viss obligatorisk information:";
export const FUNC_ERROR_ALERT = "Det finns ett fel i din funktion";
export const IMPORT_ERROR_ALERT = "Det finns ett fel i dina importer";
export const BUG_ALERT = "Något gick fel, vänligen försök igen";
export const CODE_ERROR_ALERT =
  "Det är något fel med denna kod, vänligen granska den";
export const CHAT_ERROR_ALERT =
  "Vänligen bygg flödet igen innan du använder chatten.";
export const MSG_ERROR_ALERT = "Det uppstod ett fel vid sändning av meddelandet";
export const PROMPT_ERROR_ALERT =
  "Det är något fel med denna prompt, vänligen granska den";
export const API_ERROR_ALERT =
  "Det uppstod ett fel vid sparande av API-nyckeln, vänligen försök igen.";
export const USER_DEL_ERROR_ALERT = "Fel vid borttagning av användare";
export const USER_EDIT_ERROR_ALERT = "Fel vid redigering av användare";
export const USER_ADD_ERROR_ALERT = "Fel vid tillägg av ny användare";
export const SIGNIN_ERROR_ALERT = "Fel vid inloggning";
export const DEL_KEY_ERROR_ALERT = "Fel vid borttagning av nyckel";
export const FLOW_SAVE_ERROR_ALERT = "Fel vid sparande av flöde";
export const FLOW_LOAD_ERROR_ALERT = "Fel vid laddning av flöde";
export const FLOW_DELETE_ERROR_ALERT = "Fel vid borttagning av flöde";
export const FLOW_DUPLICATE_ERROR_ALERT = "Fel vid duplicering av flöde";
export const FLOW_EXPORT_ERROR_ALERT = "Fel vid export av flöde";
export const FLOW_IMPORT_ERROR_ALERT = "Fel vid import av flöde";
export const COMPONENT_SAVE_ERROR_ALERT = "Fel vid sparande av komponent";
export const COMPONENT_LOAD_ERROR_ALERT = "Fel vid laddning av komponent";
export const COMPONENT_DELETE_ERROR_ALERT = "Fel vid borttagning av komponent";
export const COMPONENT_DUPLICATE_ERROR_ALERT = "Fel vid duplicering av komponent";
export const COMPONENT_EXPORT_ERROR_ALERT = "Fel vid export av komponent";
export const COMPONENT_IMPORT_ERROR_ALERT = "Fel vid import av komponent";
export const FOLDER_SAVE_ERROR_ALERT = "Fel vid sparande av mapp";
export const FOLDER_LOAD_ERROR_ALERT = "Fel vid laddning av mapp";
export const FOLDER_DELETE_ERROR_ALERT = "Fel vid borttagning av mapp";
export const FOLDER_DUPLICATE_ERROR_ALERT = "Fel vid duplicering av mapp";
export const FOLDER_EXPORT_ERROR_ALERT = "Fel vid export av mapp";
export const FOLDER_IMPORT_ERROR_ALERT = "Fel vid import av mapp";
export const VARIABLE_SAVE_ERROR_ALERT = "Fel vid sparande av variabel";
export const VARIABLE_LOAD_ERROR_ALERT = "Fel vid laddning av variabel";
export const VARIABLE_DELETE_ERROR_ALERT = "Fel vid borttagning av variabel";
export const VARIABLE_DUPLICATE_ERROR_ALERT = "Fel vid duplicering av variabel";
export const VARIABLE_EXPORT_ERROR_ALERT = "Fel vid export av variabel";
export const VARIABLE_IMPORT_ERROR_ALERT = "Fel vid import av variabel";
export const TEMP_NOTICE_ALERT = "Tillfälligt meddelande";
export const TEMP_NOTICE_ALERT_PLURAL = "Tillfälliga meddelanden";

// SUCCESS MESSAGES
export const CODE_SUCCESS_ALERT = "Koden är redo att köras";
export const PROMPT_SUCCESS_ALERT = "Prompt är redo";
export const API_SUCCESS_ALERT = "Framgång! Din API-nyckel har sparats.";
export const USER_DEL_SUCCESS_ALERT = "Framgång! Användare borttagen!";
export const USER_EDIT_SUCCESS_ALERT = "Framgång! Användare redigerad!";
export const USER_ADD_SUCCESS_ALERT = "Framgång! Ny användare tillagd!";
export const DEL_KEY_SUCCESS_ALERT = "Framgång! Nyckel borttagen!";
export const DEL_KEY_SUCCESS_ALERT_PLURAL = "Framgång! Nycklar borttagna!";
export const FLOW_BUILD_SUCCESS_ALERT = "Flöde byggt framgångsrikt";
export const SAVE_SUCCESS_ALERT = "Ändringar sparade framgångsrikt!";

// Dynamic alert functions
export const INVALID_FILE_SIZE_ALERT = (maxSizeMB: number) =>
  `Filen är för stor. Maximal storlek är ${maxSizeMB}MB.`;

export const UPLOAD_ALERT_PLURAL = (count: number) =>
  `${count} filer uppladdade framgångsrikt`;

export const UPLOAD_ALERT = "Fil uppladdad framgångsrikt";

export const DELETE_ALERT_PLURAL = (count: number) =>
  `${count} objekt borttagna framgångsrikt`;

export const DELETE_ALERT = "Objekt borttaget framgångsrikt";