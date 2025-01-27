export default {
    CMD_USAGE: '$0 <comando> [opzioni]',
    CMD_USAGE_OPT_ENGINE: 'motore di traduzione',
    CMD_USAGE_OPT_KEYWORDS: 'Parola chiave del nome del modulo',
    CMD_USAGE_OPT_LANGUAGE: 'Traduci i codici della lingua per i nomi degli elenchi di mod locali',
    CMD_USAGE_EG_HELP: 'Visualizza le informazioni della guida della riga di comando',
    CMD_USAGE_EG_LANGUAGE_HELP: 'Visualizza le informazioni della guida per il comando della lingua',
    CMD_USAGE_EG_COMMAND_HELP: 'Visualizza le informazioni della guida per il comando specificato',
    CMD_USAGE_EG_GOOGLE_ENGINE: 'Utilizza il motore di Google Traduttore',
    CMD_USAGE_EG_DEEPLX_ENGINE: 'Traduci utilizzando Deeplx',
    CMD_USAGE_EG_ALIAS: 'Utilizza gli alias per semplificare le righe di comando',
    CMD_USAGE_EPILOG_A: 'Google Engine potrebbe non essere supportato in alcuni paesi o regioni, utilizza una VPN o prova Microsoft Translate',
    CMD_USAGE_EPILOG_B: 'Microsoft Translator prevede limiti di caratteri per una singola richiesta in alcuni paesi e aree geografiche. ',
    CMD_USAGE_EPILOG_C: 'Microsoft Translate è più veloce, ma Google e Deeplx traducono meglio nella maggior parte dei casi',
    CMD_USAGE_EPILOG_D: 'La traduzione batch di Deeplx non è compatibile con lingue di origine diverse dall\'inglese. ',
    CMD_USAGE_EPILOG_E: 'La porta predefinita di Deeplx è la 1188 locale. Puoi modificare la porta impostando la variabile di ambiente del terminale, come eseguendo export DEEPLX_PORT=8080 in Bash.',
    CMD_USAGE_EPILOG_F: 'Utilizza il token deeplx impostando la variabile di ambiente DEEPLX_TOKEN',

    CMD_SEARCH_USAGE: 'Cerca mod su Nexus Mods',
    CMD_SEARCH_USAGE_EG: 'Mostra i dettagli del modulo Butter Lib su Nexusmod nel terminale',
    CMD_SEARCH_USAGE_EG_LANGUAGE: 'Utilizza il cinese semplificato per cercare moduli e tradurre i nomi dei risultati della ricerca',
    CMD_SEARCH_USAGE_EG_GOOGLE: 'Trova e traduci moduli in spagnolo tramite Google Translate',
    CMD_SEARCH_SEARCH_MODULES_ON_NEXUSMOD: 'Cerca mod su Nexus Mods',
    CMD_SEARCH_SELECT_MODULE_FROM_NEXUSMOD: 'Inserisci le parole chiave per cercare i moduli Nexusmod',
    CMD_SEARCH_QUERY_MODULE_INFORMATION: 'Interrogare le informazioni sul modulo',
    CMD_SEARCH_NO_MATCHING_MODULE_FOUND: 'Nessun modulo trovato corrispondente a {{keywords}}',

    CMD_INFO_USAGE: 'Recupera i dettagli del modulo locale e aggiorna le informazioni',
    CMD_INFO_USAGE_OPT_RESET: 'Reindicizza i mod selezionati collegati ai Mod Nexus',
    CMD_INFO_USAGE_EG_LANGUAGE: 'Traduci i nomi dei risultati di ricerca utilizzando il cinese semplificato',
    CMD_INFO_USAGE_EPILOG_WORKSHOP: 'Esclude le mod sottoscritte dallo STEAM Workshop',
    CMD_INFO_SEARCH_MODULE_ON_NATIVE: 'Cerca le mod nella directory di installazione del gioco',
    CMD_INFO_SELECT_MODULE_FROM_NATIVE: 'Scegli un mod locale',
    CMD_INFO_NO_MODULE_ID_OBTAINED: 'ID modulo non ottenuto',

    CMD_IDENTIFIER_USAGE: 'Compila e correggi i flag di traduzione per le mod locali',
    CMD_IDENTIFIER_USAGE_EG_LANGUAGE: 'Traduci i nomi dei risultati di ricerca utilizzando il cinese semplificato',
    CMD_IDENTIFIER_SEARCH_FOR_TRANSLATABLE_FILES: 'Recuperare file traducibili',
    CMD_IDENTIFIER_NO_TRANSLATABLE_FILE: 'Nessun file traducibile trovato',
    CMD_IDENTIFIER_WRITE_TRANSLATION_IDENTIFIER: 'Scrivi l\'identificatore della traduzione nel file',

    CMD_GENERATE_USAGE: 'Genera file modello di traduzione per i moduli locali',
    CMD_GENERATE_USAGE_OPT_TO: 'Codice della lingua di destinazione (la lingua del testo del file di origine)',
    CMD_GENERATE_USAGE_OPT_FORCE: 'Cancella i file esistenti e rigenera i modelli',
    CMD_GENERATE_USAGE_EG_GENERATE: 'Genera un modello di traduzione in inglese ed esportalo nella directory principale di Languages',
    CMD_GENERATE_USAGE_EG_TO_CODE: 'Genera un modello di traduzione turco ed esporta nella directory Languages/TR',
    CMD_GENERATE_USAGE_EG_TO_NAME: 'Genera un modello di traduzione in cinese semplificato ed esportalo nella directory Languages/CNs',
    CMD_GENERATE_GEN_TRANSLATION_TEMPLATE: 'Genera modello di traduzione',

    CMD_TRANSLATE_USAGE: 'Traduci i file modello di traduzione per i moduli locali',
    CMD_TRANSLATE_USAGE_OPT_TO: 'codice della lingua di destinazione',
    CMD_TRANSLATE_USAGE_OPT_FROM: 'Codice della lingua del testo di origine',
    CMD_TRANSLATE_USAGE_OPT_PREFIX: 'Aggiungi un prefisso a ciascun testo tradotto',
    CMD_TRANSLATE_USAGE_OPT_FORCE: 'Cancella i file esistenti e traduci nuovamente',
    CMD_TRANSLATE_USAGE_EG_TO_CODE: 'Traduci il modello di traduzione inglese nella directory root Languages ​​in cinese semplificato ed esportalo nella directory Languages/CNs',
    CMD_TRANSLATE_USAGE_EG_FROM: 'Traduci il modello cinese semplificato nella directory Languages/CNs in giapponese e generalo nella directory root Languages/JP',
    CMD_TRANSLATE_USAGE_EG_PREFIX: 'Traduci il modello inglese in cinese semplificato e generalo nella directory Languages/CNs e aggiungi il prefisso [CNS] a ciascun testo tradotto',
    CMD_TRANSLATE_USAGE_EG_FORCE: 'Cancella la directory Languages/CNs e traduci il modello inglese in cinese semplificato ed esportalo nella directory Languages/CNs',
    CMD_TRANSLATE_NO_LANGUAGES_DIR: 'Directory {{percorso}} non trovata',
    CMD_TRANSLATE_NO_LANGUAGES_CATALOG_FILE: 'File Language_data.xml non trovato',
    CMD_TRANSLATE_TRANSLATE_TEMPLATE_FILE: 'Traduci file modello',

    CMD_EXTERNAL_USAGE: 'Traduci i moduli locali in moduli di traduzione plug-in',
    CMD_EXTERNAL_USAGE_OPT_TO: 'codice della lingua di destinazione',
    CMD_EXTERNAL_USAGE_OPT_FROM: 'Codice della lingua del testo di origine',
    CMD_EXTERNAL_USAGE_OPT_PREFIX: 'Aggiungi un prefisso a ciascun testo tradotto',
    CMD_EXTERNAL_USAGE_OPT_FORCE: 'Cancella i file esistenti e traduci nuovamente',
    CMD_EXTERNAL_USAGE_EG_TO_CODE: 'Traduci il file sorgente in un modello cinese semplificato ed esportalo nella directory ../Module Name CNs/ModuleData',
    CMD_EXTERNAL_USAGE_EG_PREFIX: 'Traduci il file sorgente in cinese semplificato, esportalo nella directory ../Module Name CNs/ModuleData e aggiungi il prefisso [CNS] a ciascun testo tradotto',
    CMD_EXTERNAL_USAGE_EG_FORCE: 'Cancella la directory ../Module Name CNs/ModuleData, traduci i file di origine in cinese semplificato e generali nella directory Languages/CNs',
    CMD_EXTERNAL_FAILED_TO_WRITE_SUBMODULE: 'Impossibile scrivere nel file {{path}}/SubModule.xml',

    CMD_LANGUAGE_USAGE: 'Mostra l\'elenco delle lingue supportate',
    CMD_LANGUAGE_USAGE_OPT_CODE_OR_NAME: 'Codice lingua o nome lingua',
    CMD_LANGUAGE_USAGE_EG: 'Mostra i dettagli del modulo Butter Lib su Nexusmod nel terminale',
    CMD_LANGUAGE_USAGE_EG_TARGET: 'Visualizza i nomi delle lingue e i nomi localizzati dei CN dei codici lingua',

    FILE: 'documento',
    DIRECTORY: 'Sommario',
    ENDORSEMENT: 'consigliare',
    DOWNLOAD: 'scaricamento',
    THUMBNAIL: 'miniatura',
    URL: 'Collegamento',
    VIEWS: 'Sfoglia',
    VERSION: 'Versione',
    GALLERY: 'galleria',
    TAG: 'Etichetta',
    DEPENDENCIES: 'Dipendenze',
    AUTHOR: 'autore',
    UPLOADER: 'Caricatore',
    NONE: 'Nessuno',
    SUCCESS: 'successo',
    SKIP: 'saltare',
    FAILED: 'fallire',
    TOTAL: 'Totale',

    TIP_SIGINT: 'Digitare Ctrl + C per interrompere l\'operazione',
    TIP_FORCE_DELETED: 'Il parametro --force cancellerà tutti i file {{extension}} nella directory di primo livello {{path}}. ',

    DID_YOU_MEAN: 'Intendi {{media}}?',
    MODULE_PATH: 'percorso del modulo',
    BUILTIN_MODULE: 'Moduli integrati',
    EXTERNAL_MODULE: 'modulo esterno',
    OFFICIAL_MODULE: 'Mod ufficiale',
    COMMUNITY_MODULE: 'modulo comunitario',
    SINGLEPLAYER_MODULE: 'Modulo autonomo',
    MULTIPLAYER_MODULE: 'modulo in linea',
    MODULE_DESCRIPTION: 'Introduzione al modulo',
    DOWNLOAD_TIME: 'Tempo di download',
    MODIFY_TIME: 'orario dell\'ultimo cambio',
    MODULE_NAME: 'Nome del modulo',
    UNIQUE_DOWNLOADS: 'Scaricamento autonomo',
    UPDATED_TIME: 'Ora dell\'aggiornamento',
    UPLOADED_TIME: 'Tempo di caricamento',
    VIRUS_SCAN: 'Scansione antivirus',
    FILE_INFORMATION: 'Informazioni sull\'archivio',
    CURRENT_VERSION: 'Versione attuale',
    LATEST_VERSION: 'ultima versione',
    CURRENT_MODULE_DATE: 'Data del modulo attuale',
    LATEST_MODULE_DATE: 'Data dell\'ultimo modulo',
    TEXT_ITEMS: 'elemento di testo',
    TRANSLATABLE_ITEMS: 'Elementi traducibili',
    EXISTING_ITEMS: 'Elementi esistenti',
    NEW_ITEMS: 'Nuovi articoli',
    NO_TEMPLATE_FILE: 'File modello non trovato',
    EXEC_FAILED: 'L\'esecuzione del programma non è riuscita',
    IDENTIFIER_STAT: 'Statistiche sugli identificatori',
    GENERATE_TEMPLATE_STAT: 'Statistiche sulla generazione dei modelli',
    TRANSLATE_TEMPLATE_STAT: 'Statistiche sui modelli di traduzione',
    SUPPORTED_LANGUAGES: 'Elenco delle lingue supportate',
    LANGUAGE_CODE: 'codice della lingua',
    LANGUAGE_NAME: 'Nome della lingua',
    NATIVE_NAME: 'nome locale',
    FILE_SUFFIX: 'suffisso del file',

    EACCES_FILE: 'File in {{path}} non trovato o accesso negato',
    ECONNABORTED_DEEPLX: 'Impossibile inviare la richiesta a Deeplx, controlla il servizio su http://127.0.0.1:{{port}}',
    ECONNREFUSED_DEEPLX: 'Richiesta Deeplx rifiutata, messaggio: {{message}}',
    ECONNREFUSED_DEEPLX_LIMITED: 'Invio di troppe richieste in un breve periodo di tempo',
    ENOENT_DIRECTORY_EMPTY: 'La directory del modulo {{path}} è vuota o non contiene file validi',
    ENOENT_MODULE_DIRECTORY: 'La directory mod {{path}} non esiste',
    EINVAL_MISSING_KEYWORDS: 'Manca la parola chiave del nome della mod',
    EINVAL_JSON_FILE: 'Impossibile analizzare il formato JSON del file {{path}}',
    EINVAL_XML_FILE: 'Impossibile analizzare il formato XML del file {{path}}',
    EINVAL_MISSING_ENGINE: 'Parametri del motore di traduzione mancanti',
    EINVAL_UNSUPPORTED_ENGINE: 'Motore di traduzione {{engine}} non supportato',
    EINVAL_MISSING_TO: 'Lingua di destinazione o di origine mancante',
    EINVAL_UNSUPPORTED_TO: 'Lingua di destinazione o di origine non supportata {{target}}',
    EINVAL_TOO_MANY_TRANSLATE_INPUT: 'Troppo testo di input per la traduzione batch',
    EINVAL_LANGUAGE_CODE: 'Codice lingua non supportato',
};