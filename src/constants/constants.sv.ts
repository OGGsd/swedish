// Swedish translations for CLIENT-FACING text only
// Technical constants are imported from the main constants file

import {
  // Import all technical constants that should NOT be translated
  INVALID_CHARACTERS,
  regexHighlight,
  programmingLanguages,
  MAX_LENGTH_TO_SCROLL_TOOLTIP,
  MESSAGES_TABLE_ORDER,
  COLUMN_DIV_STYLE,
  NAV_DISPLAY_STYLE,
  BUTTON_DIV_STYLE,
  ADJECTIVES, // Keep English adjectives for system naming
  AXIE_STUDIO_SUPPORTED_TYPES,
  FLEX_VIEW_TYPES,
  priorityFields,
  INPUT_TYPES,
  OUTPUT_TYPES,
  PRIORITY_SIDEBAR_ORDER,
  BUILD_POLLING_INTERVAL,
  IS_AUTO_LOGIN,
  AUTO_LOGIN_RETRY_DELAY,
  AUTO_LOGIN_MAX_RETRY_DELAY,
  ALL_LANGUAGES, // Keep original language list
  ALLOWED_IMAGE_INPUT_EXTENSIONS,
  componentsToIgnoreUpdate,
  TABS_ORDER,
  ICON_STROKE_WIDTH,
  POLLING_MESSAGES,
  // Additional technical constants
  AXIE_STUDIO_ACCESS_TOKEN,
  AXIE_STUDIO_API_TOKEN,
  AXIE_STUDIO_AUTO_LOGIN_OPTION,
  AXIE_STUDIO_REFRESH_TOKEN,
  AXIE_STUDIO_ACCESS_TOKEN_EXPIRE_SECONDS,
  AXIE_STUDIO_ACCESS_TOKEN_EXPIRE_SECONDS_ENV,
  TEXT_FIELD_TYPES,
  NODE_WIDTH,
  NODE_HEIGHT,
  SHORTCUT_KEYS,
  SERVER_HEALTH_INTERVAL,
  REFETCH_SERVER_HEALTH_INTERVAL,
  DRAG_EVENTS_CUSTOM_TYPESS,
  NOTE_NODE_MIN_WIDTH,
  NOTE_NODE_MIN_HEIGHT,
  NOTE_NODE_MAX_HEIGHT,
  NOTE_NODE_MAX_WIDTH,
  COLOR_OPTIONS,
  DEBOUNCE_FIELD_LIST,
  OPENAI_VOICES,
  DEFAULT_POLLING_INTERVAL,
  DEFAULT_TIMEOUT,
  DEFAULT_FILE_PICKER_TIMEOUT,
  DISCORD_URL,
  TWITTER_URL,
  DOCS_URL,
  DATASTAX_DOCS_URL,
  UUID_PARSING_ERROR,
  // Additional UI constants
  MAX_WORDS_HIGHLIGHT,
  limitScrollFieldsModal,
  CONTROL_INPUT_STATE,
  CONTROL_PATCH_USER_STATE,
  CONTROL_LOGIN_STATE,
  CONTROL_NEW_USER,
  tabsCode,
  skipNodeUpdate,
  MAX_MCP_SERVER_NAME_LENGTH,
  LOCATIONS_TO_RETURN,
  MAX_BATCH_SIZE,
  MODAL_CLASSES,
} from './constants';

// Swedish client-facing text
export const DESCRIPTIONS: string[] = [
  "Kedja ord, bemästra språk!",
  "Språkarkitekt i arbete!",
  "Stärker språkingenjörskonst.",
  "Skapa språkförbindelser här.",
  "Skapa, koppla, samtala.",
  "Smarta kedjor, smartare konversationer.",
  "Bygger broar för briljans.",
  "Språkmodeller, frigjorda.",
  "Ditt nav för textgenerering.",
  "Snabbt genialiskt!",
  "Bygger språkliga labyrinter.",
  "Axie Studio: Skapa, kedja, kommunicera.",
  "Koppla ihop prickarna, skapa språk.",
  "Interaktiv språkvävning.",
  "Generera, innovera, kommunicera.",
  "Konversationskatalysator.",
  "Språkkedjemästare.",
  "Designa dialoger med Axie Studio.",
  "Vårda NLP-noder här.",
  "Konversationskartografi upplåst.",
  "Designa, utveckla, dialogisera.",
];

// Error messages in Swedish
export const FETCH_ERROR_MESSAGE = "Kunde inte upprätta en anslutning.";
export const FETCH_ERROR_DESCRIPION = 
  "Kontrollera att allt fungerar korrekt och försök igen.";

export const TIMEOUT_ERROR_MESSAGE = 
  "Vänta ett ögonblick medan servern bearbetar din begäran.";
export const TIMEOUT_ERROR_DESCRIPION = "Servern är upptagen.";

export const SIGN_UP_SUCCESS = "Konto skapat! Väntar på administratörsaktivering.";

// API page text in Swedish
export const API_PAGE_PARAGRAPH = 
  "Dina hemliga Axie Studio API-nycklar listas nedan. Dela inte din API-nyckel med andra eller exponera den i webbläsaren eller annan klientkod.";

export const API_PAGE_USER_KEYS = 
  "Denna användare har inga nycklar tilldelade för tillfället.";

export const LAST_USED_SPAN_1 = "Senast denna nyckel användes.";
export const LAST_USED_SPAN_2 = 
  "Noggrann inom en timme från senaste användning.";

// Chat and UI text in Swedish
export const CHAT_FIRST_INITIAL_TEXT = 
  "Starta en konversation och klicka på agentens minnen";

export const TOOLTIP_OUTDATED_NODE = 
  "Din komponent är föråldrad. Klicka för att uppdatera (data kan gå förlorad)";

export const CHAT_SECOND_INITIAL_TEXT = "för att inspektera tidigare meddelanden.";

export const TOOLTIP_OPEN_HIDDEN_OUTPUTS = "Expandera dolda utdata";
export const TOOLTIP_HIDDEN_OUTPUTS = "Kollapsa dolda utdata";

export const ZERO_NOTIFICATIONS = "Inga nya notifieringar";
export const SUCCESS_BUILD = "Byggd framgångsrikt ✨";

export const ALERT_SAVE_WITH_API = 
  "Varning: Att avmarkera denna ruta tar endast bort API-nycklar från fält specifikt avsedda för API-nycklar.";

export const SAVE_WITH_API_CHECKBOX = "Spara med mina API-nycklar";
export const EDIT_TEXT_MODAL_TITLE = "Redigera text";
export const EDIT_TEXT_PLACEHOLDER = "Skriv meddelande här.";
export const INPUT_HANDLER_HOVER = "Tillgängliga inmatningskomponenter:";
export const OUTPUT_HANDLER_HOVER = "Tillgängliga utmatningskomponenter:";
export const TEXT_INPUT_MODAL_TITLE = "Inmatningar";
export const OUTPUTS_MODAL_TITLE = "Utmatningar";
export const AXIE_STUDIO_CHAT_TITLE = "Axie Studio Chatt";
export const CHAT_INPUT_PLACEHOLDER = 
  "Inga chattinmatningsvariabler hittades. Klicka för att köra ditt flöde.";
export const CHAT_INPUT_PLACEHOLDER_SEND = "Skicka ett meddelande...";
export const EDIT_CODE_TITLE = "Redigera kod";
export const MY_COLLECTION_DESC = 
  "Hantera dina projekt. Ladda ner och ladda upp hela samlingar.";
export const STORE_DESC = "Utforska community-delade flöden och komponenter.";
export const STORE_TITLE = "Axie Studio Butik";
export const NO_API_KEY = "Du har ingen API-nyckel.";
export const INSERT_API_KEY = "Infoga din Axie Studio API-nyckel.";
export const INVALID_API_KEY = "Din API-nyckel är inte giltig.";
export const CREATE_API_KEY = "Har du ingen API-nyckel? Registrera dig på";
export const STATUS_BUILD = "Bygg för att validera status.";
export const STATUS_MISSING_FIELDS_ERROR = "Vänligen fyll i alla obligatoriska fält.";
export const STATUS_INACTIVE = "Exekvering blockerad";
export const STATUS_BUILDING = "Bygger...";
export const SAVED_HOVER = "Senast sparad: ";
export const RUN_TIMESTAMP_PREFIX = "Senaste körning: ";
export const STARTER_FOLDER_NAME = "Startprojekt";

// More Swedish client-facing text
export const FS_ERROR_TEXT =
  "Vänligen säkerställ att din fil har en av följande tillägg:";
export const SN_ERROR_TEXT = ALLOWED_IMAGE_INPUT_EXTENSIONS.join(", ");

export const ERROR_UPDATING_COMPONENT =
  "Ett oväntat fel uppstod vid uppdatering av komponenten. Vänligen försök igen.";
export const TITLE_ERROR_UPDATING_COMPONENT =
  "Fel vid uppdatering av komponenten";

export const EMPTY_INPUT_SEND_MESSAGE = "Inget inmatningsmeddelande angivet.";
export const EMPTY_OUTPUT_SEND_MESSAGE = "Meddelandet är tomt.";

export const RECEIVING_INPUT_VALUE = "Tar emot inmatning";
export const SELECT_AN_OPTION = "Välj ett alternativ";

export const DEFAULT_PLACEHOLDER = "Skriv något...";
export const DEFAULT_TOOLSET_PLACEHOLDER = "Används som verktyg";

export const SAVE_API_KEY_ALERT = "API-nyckel sparad framgångsrikt";
export const PLAYGROUND_BUTTON_NAME = "Lekplats";

// Additional Swedish UI text
export const EXPORT_DIALOG_SUBTITLE = "Exportera flöde som JSON-fil.";
export const SETTINGS_DIALOG_SUBTITLE = "Anpassa dina flödesdetaljer och inställningar.";
export const LOGS_DIALOG_SUBTITLE = "Utforska detaljerade loggar över händelser och transaktioner mellan komponenter.";
export const TEXT_DIALOG_TITLE = "Redigera textinnehåll";
export const IMPORT_DIALOG_SUBTITLE = "Importera flöden från en JSON-fil eller välj från befintliga exempel.";
export const TOOLTIP_EMPTY = "Inga kompatibla komponenter hittades.";

export const USER_PROJECTS_HEADER = "Min samling";
export const DEFAULT_FOLDER = "Startprojekt";
export const ADMIN_HEADER_TITLE = "Administratörssida";

export const TOOLTIP_OPEN_HIDDEN_OUTPUTS = "Expandera dolda utdata";
export const TOOLTIP_HIDDEN_OUTPUTS = "Kollapsa dolda utdata";
export const ZERO_NOTIFICATIONS = "Inga nya notifieringar";
export const SUCCESS_BUILD = "Byggd framgångsrikt ✨";

export const ALERT_SAVE_WITH_API = "Varning: Att avmarkera denna ruta tar endast bort API-nycklar från fält specifikt avsedda för API-nycklar.";

export const DEFAULT_TABLE_ALERT_MSG = "Hoppsan! Det verkar som att det inte finns någon data att visa just nu. Vänligen kom tillbaka senare.";
export const DEFAULT_TABLE_ALERT_TITLE = "Ingen data tillgänglig";
export const NO_COLUMN_DEFINITION_ALERT_TITLE = "Inga kolumndefinitioner";
export const NO_COLUMN_DEFINITION_ALERT_DESCRIPTION = "Det finns inga kolumndefinitioner tillgängliga för denna tabell.";

// Swedish language support for voice assistant
export const ALL_LANGUAGES = [
  { value: "en-US", name: "English (US)" },
  { value: "en-GB", name: "English (UK)" },
  { value: "sv-SE", name: "Swedish" }, // Added Swedish support
  { value: "it-IT", name: "Italian" },
  { value: "fr-FR", name: "French" },
  { value: "es-ES", name: "Spanish" },
  { value: "de-DE", name: "German" },
  { value: "ja-JP", name: "Japanese" },
  { value: "pt-BR", name: "Portuguese (Brazil)" },
  { value: "zh-CN", name: "Chinese (Simplified)" },
  { value: "ru-RU", name: "Russian" },
  { value: "ar-SA", name: "Arabic" },
  { value: "hi-IN", name: "Hindi" },
];

// Technical constants that should remain in English
export const POLLING_MESSAGES_SV = {
  ENDPOINT_NOT_AVAILABLE: "Slutpunkt inte tillgänglig",
  STREAMING_NOT_SUPPORTED: "Streaming stöds inte",
} as const;

// Re-export all technical constants unchanged
export {
  INVALID_CHARACTERS,
  regexHighlight,
  programmingLanguages,
  MAX_LENGTH_TO_SCROLL_TOOLTIP,
  MESSAGES_TABLE_ORDER,
  COLUMN_DIV_STYLE,
  NAV_DISPLAY_STYLE,
  BUTTON_DIV_STYLE,
  ADJECTIVES,
  AXIE_STUDIO_SUPPORTED_TYPES,
  FLEX_VIEW_TYPES,
  priorityFields,
  INPUT_TYPES,
  OUTPUT_TYPES,
  PRIORITY_SIDEBAR_ORDER,
  BUILD_POLLING_INTERVAL,
  IS_AUTO_LOGIN,
  AUTO_LOGIN_RETRY_DELAY,
  AUTO_LOGIN_MAX_RETRY_DELAY,
  ALLOWED_IMAGE_INPUT_EXTENSIONS,
  componentsToIgnoreUpdate,
  TABS_ORDER,
  ICON_STROKE_WIDTH,
  POLLING_MESSAGES,
  ALL_LANGUAGES,
  // Technical constants that don't need translation
  AXIE_STUDIO_ACCESS_TOKEN,
  AXIE_STUDIO_API_TOKEN,
  AXIE_STUDIO_AUTO_LOGIN_OPTION,
  AXIE_STUDIO_REFRESH_TOKEN,
  AXIE_STUDIO_ACCESS_TOKEN_EXPIRE_SECONDS,
  AXIE_STUDIO_ACCESS_TOKEN_EXPIRE_SECONDS_ENV,
  TEXT_FIELD_TYPES,
  NODE_WIDTH,
  NODE_HEIGHT,
  SHORTCUT_KEYS,
  SERVER_HEALTH_INTERVAL,
  REFETCH_SERVER_HEALTH_INTERVAL,
  DRAG_EVENTS_CUSTOM_TYPESS,
  NOTE_NODE_MIN_WIDTH,
  NOTE_NODE_MIN_HEIGHT,
  NOTE_NODE_MAX_HEIGHT,
  NOTE_NODE_MAX_WIDTH,
  COLOR_OPTIONS,
  DEBOUNCE_FIELD_LIST,
  OPENAI_VOICES,
  DEFAULT_POLLING_INTERVAL,
  DEFAULT_TIMEOUT,
  DEFAULT_FILE_PICKER_TIMEOUT,
  DISCORD_URL,
  TWITTER_URL,
  DOCS_URL,
  DATASTAX_DOCS_URL,
  UUID_PARSING_ERROR,
  // Additional technical constants
  MAX_WORDS_HIGHLIGHT,
  limitScrollFieldsModal,
  CONTROL_INPUT_STATE,
  CONTROL_PATCH_USER_STATE,
  CONTROL_LOGIN_STATE,
  CONTROL_NEW_USER,
  tabsCode,
  skipNodeUpdate,
  MAX_MCP_SERVER_NAME_LENGTH,
  LOCATIONS_TO_RETURN,
  MAX_BATCH_SIZE,
  MODAL_CLASSES,
};
