export default {
    USAGE: '$0 <polecenie> [opcje]',

    USAGE_DESC_GEN: 'Generuj szablony tłumaczeń, uzupełniając identyfikatory tłumaczeń',
    USAGE_DESC_INFO: 'Wyświetl informacje o lokalnych modach',
    USAGE_DESC_LANG: 'Wyświetl listę obsługiwanych języków',
    USAGE_DESC_LOCALE: 'Przetłumacz pliki modów na język docelowy',
    USAGE_DESC_SEARCH: 'Wyszukaj mody w Nexus Mods',
    USAGE_DESC_TRANSLATE: 'Tłumaczenie z jednego języka na drugi',
    USAGE_DESC_EVENTS: 'Połączone polecenia „generuj” i „tłumacz” dla katalogu „Zdarzenia”.',

    USAGE_OPT_KEYWORDS: 'Słowa kluczowe dotyczące nazw modów',
    USAGE_OPT_GOOGLE: 'Skorzystaj z silnika Tłumacza Google',
    USAGE_OPT_RESET: 'Zresetuj NexusMod i wybrany indeks modów',
    USAGE_OPT_CODE_OR_NAME: 'Kod lub nazwa języka',
    USAGE_OPT_TO: 'Docelowy język tłumaczenia',
    USAGE_OPT_FROM: 'Język tekstu źródłowego',
    USAGE_OPT_QUERY: 'Nazwa moda',
    USAGE_OPT_PREFIX: 'Prefiks dla przetłumaczonych nazw',
    USAGE_OPT_OPEN_ROUTER_SUMMARY: 'Wpisz „Klucz API”, aby skorzystać z podsumowania tłumaczenia AI',
    USAGE_OPT_OPEN: 'Wyświetl w domyślnej przeglądarce',

    USAGE_EG_HELP: 'Wyświetl informacje pomocy CLI',
    USAGE_EG_COMMAND_LANG: 'Wyświetl informacje pomocy dotyczące polecenia „język”.',
    USAGE_EG_COMMAND: 'Wyświetl informacje pomocy dla konkretnego „polecenie”.',
    USAGE_EG_GEN: 'Wygeneruj szablon tłumaczenia dla wybranych lokalnych modów i wyeksportuj do katalogu `EN`',
    USAGE_EG_GEN_SEARCH: 'Wybierz lokalne mody, których nazwy zawierają `StoreMode`, wygeneruj szablony tłumaczeń i eksportuj do katalogu `JP`',
    USAGE_EG_GEN_LANGUAGE: 'Wygeneruj szablony tłumaczeń dla wybranych lokalnych modów i eksportuj do katalogu `CNs`',
    USAGE_EG_GOOGLE: 'Użyj silnika Tłumacz Google zamiast Tłumacza Bing',
    USAGE_EG_OPEN_ROUTER: 'Użyj modelu AI OpenRouter API do tłumaczenia i podsumowań',
    USAGE_EG_INFO: 'Zapytanie od wszystkich lokalnych modów',
    USAGE_EG_INFO_KEYWORDS: 'Zapytaj lokalnych modów o nazwach zawierających „masło”.',
    USAGE_EG_INFO_RESET: 'Ponownie zindeksuj adresy NexusMod dla wybranych lokalnych modów',
    USAGE_EG_LANG: 'Zobacz listę wszystkich obsługiwanych języków',
    USAGE_EG_LANG_CODE: 'Wyświetl nazwę i zlokalizowaną nazwę kodu języka „CNs”.',
    USAGE_EG_LOCALIZE: 'Przetłumacz wybrane lokalne mody na chiński uproszczony',
    USAGE_EG_LOCALIZE_SEARCH: 'Wyszukaj lokalne mody związane z `Sandbox` i przetłumacz je na chiński uproszczony',
    USAGE_EG_LOCALIZE_PREFIX: 'Dodaj przedrostek „[OSA]” do każdego przetłumaczonego tekstu',
    USAGE_EG_SEARCH: 'Wyświetl szczegółowe informacje o modzie `Butterlib` z Nexus Mods w terminalu',
    USAGE_EG_BROWSE: 'Otwórz stronę modów `Butter Lib` w domyślnej przeglądarce',
    USAGE_EG_TRANS: 'Przetłumacz `Języki\\*.xml` lub `Języki\\EN` na `Języki\\CNs`',
    USAGE_EG_TRANS_APPOINT: 'Przetłumacz katalog `Języki\\CNs` na `Języki\\JP`',
    USAGE_EG_TRANS_PREFIX: 'Dodaj przedrostek „[CNS]” do każdego przetłumaczonego tekstu',
    USAGE_EG_EVENTS: 'Wygeneruj identyfikatory tłumaczeń dla katalogu „Wydarzenia” i wyeksportuj szablony tłumaczeń',
    USAGE_EG_EVENTS_TO: 'Wygeneruj klucze tłumaczeń dla katalogu „Wydarzenia”, wyeksportuj szablon tłumaczenia i przetłumacz go na język docelowy',

    USAGE_EPILOG_EXPORT: 'Język wyeksportowanego szablonu jest taki sam, jak język pliku źródłowego',
    USAGE_EPILOG_WITHOUT_SUBSCRIBE: 'Nie obejmuje modów subskrybowanych z warsztatu',
    USAGE_EPILOG_TRANSLATE_SIGN: 'Modyfikuje plik źródłowy, zapisując identyfikatory tłumaczeń i zastępując duplikaty',
    USAGE_EPILOG_SOURCE_SAFE: 'Nie modyfikuje pliku źródłowego',

    SPIN_MODULE_NAME_TRANSLATE: 'Tłumaczenie nazwy moda (oryginalny tekst zostanie wyświetlony, jeśli tłumaczenie się nie powiedzie)',
    SPIN_NEXUSMOD_SEARCH: 'Wyszukiwanie modów NexusMod',
    SPIN_NATIVE_MOD_SEARCH: 'Przeszukiwanie lokalnej listy modów',
    SPIN_BROWSE_PAGE: 'Otwieram domyślną przeglądarkę do przeglądania',
    SPIN_READ_PAGE: 'Parsowanie treści HTML',
    SPIN_MODULE_PAGE_AI: 'Organizowanie strony modów',
    SPIN_MODULE_PAGE_TRANSLATE: 'Tłumaczenie strony moda (oryginalny tekst zostanie wyświetlony, jeśli tłumaczenie się nie powiedzie)',
    SPIN_RENDER_PAGE: 'Dokumentacja modów renderujących',
    SPIN_NEXUSMOD_INDEX: 'Indeksowanie NexusModa i modów lokalnych',
    SPIN_MODULE_DESC_TRANSLATE: 'Tłumaczenie opisu moda (oryginalny tekst zostanie wyświetlony, jeśli tłumaczenie się nie powiedzie)',
    SPIN_LOCALE_NORMALIZE_XML: 'Organizowanie tłumaczonych plików XML',
    SPIN_LOCALE_TRANSLATE_XML: 'Tłumaczenie znalezionych plików XML',
    SPIN_GENERATE_NORMALIZE_XML: 'Wypełnianie identyfikatorów tłumaczeń i generowanie szablonów XML',

    INQ_SELECT_MSG: 'Wybierz mod na NexusMod (naciśnij CTRL + C, aby anulować)',
    INQ_SEARCH_MOD: 'Wprowadź słowa kluczowe do wyszukania (naciśnij CTRL + C, aby anulować)',
    INQ_SEARCH_MATCHING: 'Wprowadź słowa kluczowe, aby wyszukać pasujące mody NexusMod',

    LABEL_MD_FILE: 'Plik',
    LABEL_MD_ROW: 'Wiersz',
    LABEL_MD_PATH: 'Ścieżka',
    LABEL_MD_LANG_SUPPORT: 'Lista obsługiwanych języków',
    LABEL_MD_TRANSLATION_FILE: 'Statystyki tłumaczeń',
    LABEL_MD_GENERATE_FILE: 'Statystyki generacji',

    LABEL_MOD_TITLE: 'Nazwa moda',
    LABEL_MOD_ENDORSEMENT: 'Potwierdzenia',
    LABEL_MOD_UNIQUE_DOWNLOAD: 'Unikalne pliki do pobrania',
    LABEL_MOD_TOTAL_DOWNLOAD: 'Całkowita liczba pobrań',
    LABEL_MOD_TOTAL_VIEWS: 'Całkowita liczba wyświetleń',
    LABEL_MOD_VERSION: 'Wersja',
    LABEL_MOD_CURRENT_VERSION: 'Aktualna wersja',
    LABEL_MOD_LATEST_VERSION: 'Najnowsza wersja',
    LABEL_MOD_THUMBNAIL: 'Zwięzły',
    LABEL_MOD_TAG: 'Tagi',
    LABEL_MOD_DEPENDENCIES: 'Zależności',
    LABEL_MOD_DESC: 'Opis moda',
    LABEL_MOD__VERSION_OUTDATED: 'Mod jest przestarzały',

    LABEL_FILE_UPDATED: 'Data aktualizacji',
    LABEL_FILE_UPLOADED: 'Data przesłania',
    LABEL_FILE_CREATED_BY: 'Stworzony przez',
    LABEL_FILE_UPLOADED_BY: 'Przesłane przez',
    LABEL_FILE_VIRUS_SCAN: 'Skanowanie wirusów',
    LABEL_FILE_OUTDATED: 'Plik jest nieaktualny',
    LABEL_FILE_LATEST_DATE: 'Najnowsza data pliku',
    LABEL_FILE_CURRENT_DATE: 'Bieżąca data pliku',
    LABEL_FILE_DOWNLOAD_DATE: 'Data pobrania',

    WARN_NOT_SAFE_FOR_WORK: 'Modów NSFW nie można analizować ze względu na ograniczenia dostępu NexusMod',
    WARN_GOOGLE_TRANSLATE: 'Wskazówka: Tłumacz Google może nie być obsługiwany w niektórych regionach, użyj VPN lub wypróbuj silnik Bing',
    WARN_NOT_SAME_MODULE: 'Wykryto niezgodność między lokalnym modem a autorem NexusMod, użyj opcji --reset, aby ponownie zaindeksować lokalny mod',

    EOP_CANCEL: 'Użytkownik anulował operację',

    EACCES_FILE: 'Odmowa uprawnień lub plik/katalog nie istnieje',
    EACCES_STEAM: 'Nie udało się pobrać listy aplikacji, obecnie obsługuje tylko system Windows. ',
    EACCES_BROWSER: 'Nie udało się otworzyć domyślnej przeglądarki. Spróbuj uruchomić terminal jako administrator',

    ECONNREFUSED_REMOTE_MOD: 'Nie udało się wysłać żądania zapytania o mod do Nexus Mods',
    ECONNREFUSED_REMOTE_PAGE: 'Nie udało się wysłać zapytania do strony modów NexusMod',
    ECONNREFUSED_MODEL_RESP: 'Nie udało się uzyskać odpowiedzi z API OpenRouter',

    ENOENT_FILE: 'Nie znaleziono pliku lub katalogu',
    ENOENT_APP: 'Nie znaleziono aplikacji. Sprawdź, czy Mount & Blade II: Bannerlord istnieje w bibliotece Steam',
    ENOENT_MOD_DIR: 'Nie znaleziono aplikacji. Sprawdź, czy Mount & Blade II: Bannerlord istnieje w bibliotece Steam',
    ENOENT_MOD_CONFIG: 'Modowi brakuje pliku SubModule.xml',
    ENOENT_REMOTE_MOD: 'Nie znaleziono pasującego moda NexusMod',
    ENOENT_NATIVE_MOD: 'Nie znaleziono pasującego lokalnego moda',
    ENOENT_NATIVE_MOD_EMPTY: 'Lokalny katalog modów jest pusty',

    ENOTFOUND_NEXUSMOD_URL: 'Nie znaleziono pasującego łącza NexusMod',

    EINVAL_MOD_QUERY: 'Wprowadź słowa kluczowe modu',
    EINVAL_MOD_CONFIG: 'Nieprawidłowy plik SubModule.xml',
    EINVAL_MODEL_KEY: 'Wprowadź prawidłowy klucz API OpenRouter, dostępny na stronie https://openrouter.ai/',
    EINVAL_MODEL_RESP: 'Nie udało się przeanalizować odpowiedzi API OpenRouter. Jeśli problem będzie się powtarzał, zgłoś problem na stronie https://github.com/kabeep/bannerlord-helper/issues',
    EINVAL_LANG_FILE_EMPTY: 'Nieprawidłowy kod języka lub brak plików do przetłumaczenia',
    EINVAL_LANG_OPTS_EMPTY: 'Nieprawidłowy kod języka lub brak opcji do tłumaczenia',
    EINVAL_LANG_CODE_OR_NAME: 'Nieobsługiwana nazwa lub kod języka. Użyj polecenia „Język”, aby wyświetlić obsługiwane języki',
};