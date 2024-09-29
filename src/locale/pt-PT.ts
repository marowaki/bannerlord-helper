export default {
    USAGE: '$0 <comando> [opções]',

    USAGE_DESC_GEN: 'Gere modelos de tradução completando identificadores de tradução',
    USAGE_DESC_INFO: 'Ver informações do mod local',
    USAGE_DESC_LANG: 'Exibir uma lista de idiomas suportados',
    USAGE_DESC_LOCALE: 'Traduza arquivos mod para o idioma de destino',
    USAGE_DESC_SEARCH: 'Pesquise mods no Nexus Mods',
    USAGE_DESC_TRANSLATE: 'Traduzir de um idioma para outro',
    USAGE_DESC_EVENTS: 'Comandos `generate` e `translate` combinados para o diretório `Events`',

    USAGE_OPT_KEYWORDS: 'Palavras-chave do nome do mod',
    USAGE_OPT_GOOGLE: 'Use o mecanismo do Google Tradutor',
    USAGE_OPT_RESET: 'Redefinir NexusMod e índice de mod selecionado',
    USAGE_OPT_CODE_OR_NAME: 'Código ou nome do idioma',
    USAGE_OPT_TO: 'Idioma de tradução de destino',
    USAGE_OPT_FROM: 'Idioma do texto fonte',
    USAGE_OPT_QUERY: 'Nome do mod',
    USAGE_OPT_PREFIX: 'Prefixo para nomes traduzidos',
    USAGE_OPT_OPEN_ROUTER_SUMMARY: 'Digite `API Key` para usar o resumo da tradução de IA',
    USAGE_OPT_OPEN: 'Ver no navegador padrão',

    USAGE_EG_HELP: 'Ver informações de ajuda da CLI',
    USAGE_EG_COMMAND_LANG: 'Veja informações de ajuda para o comando `linguagem`',
    USAGE_EG_COMMAND: 'Veja informações de ajuda para um `comando` específico',
    USAGE_EG_GEN: 'Gere um modelo de tradução para mods locais selecionados e exporte para o diretório `EN`',
    USAGE_EG_GEN_SEARCH: 'Selecione mods locais cujos nomes contenham `StoreMode`, gere modelos de tradução e exporte para o diretório `JP`',
    USAGE_EG_GEN_LANGUAGE: 'Gere modelos de tradução para mods locais selecionados e exporte para o diretório `CNs`',
    USAGE_EG_GOOGLE: 'Use o mecanismo do Google Tradutor em vez do Bing Translate',
    USAGE_EG_OPEN_ROUTER: 'Use o modelo de IA da API OpenRouter para tradução e resumo',
    USAGE_EG_INFO: 'Consulta de todos os mods locais',
    USAGE_EG_INFO_KEYWORDS: 'Consulte mods locais com nomes contendo `Butter`',
    USAGE_EG_INFO_RESET: 'Reindexar endereços NexusMod para mods locais selecionados',
    USAGE_EG_LANG: 'Veja a lista de todos os idiomas suportados',
    USAGE_EG_LANG_CODE: 'Veja o nome e o nome localizado do código de idioma `CNs`',
    USAGE_EG_LOCALIZE: 'Traduza mods locais selecionados para chinês simplificado',
    USAGE_EG_LOCALIZE_SEARCH: 'Pesquise mods locais relacionados ao `Sandbox` e traduza-os para o chinês simplificado',
    USAGE_EG_LOCALIZE_PREFIX: 'Adicione o prefixo `[OSA]` a cada texto traduzido',
    USAGE_EG_SEARCH: 'Exibir informações detalhadas sobre o mod `Butterlib` dos Nexus Mods no terminal',
    USAGE_EG_BROWSE: 'Abra a página do mod `Butter Lib` no navegador padrão',
    USAGE_EG_TRANS: 'Traduza `Languages\\*.xml` ou `Languages\\EN` para `Languages\\CNs`',
    USAGE_EG_TRANS_APPOINT: 'Traduza o diretório `Languages\\CNs` para `Languages\\JP`',
    USAGE_EG_TRANS_PREFIX: 'Adicione o prefixo `[CNS]` a cada texto traduzido',
    USAGE_EG_EVENTS: 'Gere identificadores de tradução para o diretório `Events` e exporte modelos de tradução',
    USAGE_EG_EVENTS_TO: 'Gere chaves de tradução para o diretório `Events`, exporte o modelo de tradução e traduza-o para o idioma de destino',

    USAGE_EPILOG_EXPORT: 'O idioma do modelo exportado é o mesmo do arquivo de origem',
    USAGE_EPILOG_WITHOUT_SUBSCRIBE: 'Não inclui mods inscritos no Workshop',
    USAGE_EPILOG_TRANSLATE_SIGN: 'Modifica o arquivo de origem escrevendo identificadores de tradução e substituindo duplicatas',
    USAGE_EPILOG_SOURCE_SAFE: 'Não modifica o arquivo de origem',

    SPIN_MODULE_NAME_TRANSLATE: 'Traduzindo o nome do mod (o texto original será exibido se a tradução falhar)',
    SPIN_NEXUSMOD_SEARCH: 'Pesquisando mods NexusMod',
    SPIN_NATIVE_MOD_SEARCH: 'Pesquisando lista de mods locais',
    SPIN_BROWSE_PAGE: 'Abrindo o navegador padrão para visualizar',
    SPIN_READ_PAGE: 'Analisando conteúdo HTML',
    SPIN_MODULE_PAGE_AI: 'Organizando página de mod',
    SPIN_MODULE_PAGE_TRANSLATE: 'Traduzindo a página do mod (o texto original será exibido se a tradução falhar)',
    SPIN_RENDER_PAGE: 'Renderizando documentação do mod',
    SPIN_NEXUSMOD_INDEX: 'Indexando NexusMod e mods locais',
    SPIN_MODULE_DESC_TRANSLATE: 'Traduzindo a descrição do mod (o texto original será exibido se a tradução falhar)',
    SPIN_LOCALE_NORMALIZE_XML: 'Organizando arquivos XML traduzíveis',
    SPIN_LOCALE_TRANSLATE_XML: 'Traduzindo arquivos XML encontrados',
    SPIN_GENERATE_NORMALIZE_XML: 'Preenchendo identificadores de tradução e gerando modelos XML',

    INQ_SELECT_MSG: 'Selecione um mod no NexusMod (pressione CTRL + C para cancelar)',
    INQ_SEARCH_MOD: 'Insira palavras-chave para pesquisar (pressione CTRL + C para cancelar)',
    INQ_SEARCH_MATCHING: 'Insira palavras-chave para pesquisar mods NexusMod correspondentes',
    INQ_CONFIRM_EXPERIMENTAL: 'Este comando é experimental. Faça backup do módulo a ser selecionado antes de executá-lo.',

    LABEL_MD_FILE: 'Arquivo',
    LABEL_MD_ROW: 'Linha',
    LABEL_MD_PATH: 'Caminho',
    LABEL_MD_LANG_SUPPORT: 'Lista de idiomas suportados',
    LABEL_MD_TRANSLATION_FILE: 'Estatísticas de tradução',
    LABEL_MD_GENERATE_FILE: 'Estatísticas de geração',

    LABEL_MOD_TITLE: 'Nome do mod',
    LABEL_MOD_ENDORSEMENT: 'Endossos',
    LABEL_MOD_UNIQUE_DOWNLOAD: 'Downloads exclusivos',
    LABEL_MOD_TOTAL_DOWNLOAD: 'Total de downloads',
    LABEL_MOD_TOTAL_VIEWS: 'Total de visualizações',
    LABEL_MOD_VERSION: 'Versão',
    LABEL_MOD_CURRENT_VERSION: 'Versão atual',
    LABEL_MOD_LATEST_VERSION: 'Versão mais recente',
    LABEL_MOD_THUMBNAIL: 'Miniatura',
    LABEL_MOD_TAG: 'Etiquetas',
    LABEL_MOD_DEPENDENCIES: 'Dependências',
    LABEL_MOD_DESC: 'Descrição do mod',
    LABEL_MOD__VERSION_OUTDATED: 'O mod está obsoleto',

    LABEL_FILE_UPDATED: 'Data de atualização',
    LABEL_FILE_UPLOADED: 'Data de upload',
    LABEL_FILE_CREATED_BY: 'Criado por',
    LABEL_FILE_UPLOADED_BY: 'Enviado por',
    LABEL_FILE_VIRUS_SCAN: 'Verificação de vírus',
    LABEL_FILE_OUTDATED: 'O arquivo está desatualizado',
    LABEL_FILE_LATEST_DATE: 'Data do último arquivo',
    LABEL_FILE_CURRENT_DATE: 'Data do arquivo atual',
    LABEL_FILE_DOWNLOAD_DATE: 'Data de download',

    WARN_NOT_SAFE_FOR_WORK: 'Os mods NSFW não podem ser analisados ​​devido às restrições de acesso do NexusMod',
    WARN_GOOGLE_TRANSLATE: 'Dica: o Google Tradutor pode não ser compatível em determinadas regiões, use VPN ou experimente o mecanismo Bing',
    WARN_NOT_SAME_MODULE: 'Incompatibilidade detectada entre o mod local e o autor do NexusMod, use a opção --reset para reindexar o mod local',

    EOP_CANCEL: 'Operação cancelada pelo usuário',

    EACCES_FILE: 'Permissão negada ou arquivo/diretório não existe',
    EACCES_STEAM: 'Falha ao recuperar a lista de aplicativos. Atualmente, só é compatível com Windows. ',
    EACCES_BROWSER: 'Falha ao abrir o navegador padrão, tente executar o terminal como administrador',

    ECONNREFUSED_REMOTE_MOD: 'Falha ao enviar solicitação de consulta de mod para Nexus Mods',
    ECONNREFUSED_REMOTE_PAGE: 'Falha ao consultar a página do mod NexusMod',
    ECONNREFUSED_MODEL_RESP: 'Falha ao obter resposta da API OpenRouter',

    ENOENT_FILE: 'Arquivo ou diretório não encontrado',
    ENOENT_APP: 'Aplicativo não encontrado, verifique se Mount & Blade II: Bannerlord existe na biblioteca Steam',
    ENOENT_MOD_DIR: 'Aplicativo não encontrado, verifique se Mount & Blade II: Bannerlord existe na biblioteca Steam',
    ENOENT_MOD_CONFIG: 'Mod faltando arquivo SubModule.xml',
    ENOENT_REMOTE_MOD: 'Nenhum mod NexusMod correspondente encontrado',
    ENOENT_NATIVE_MOD: 'Nenhum mod local correspondente encontrado',
    ENOENT_NATIVE_MOD_EMPTY: 'O diretório mod local está vazio',

    ENOTFOUND_NEXUSMOD_URL: 'Nenhum link NexusMod correspondente encontrado',

    EINVAL_MOD_QUERY: 'Insira palavras-chave mod',
    EINVAL_MOD_CONFIG: 'Arquivo SubModule.xml inválido',
    EINVAL_MODEL_KEY: 'Insira uma chave de API OpenRouter válida, disponível em https://openrouter.ai/',
    EINVAL_MODEL_RESP: 'Falha ao analisar a resposta da API OpenRouter. Se isso persistir, envie um problema em https://github.com/kabeep/bannerlord-helper/issues',
    EINVAL_LANG_FILE_EMPTY: 'Código de idioma inválido ou sem arquivos traduzíveis',
    EINVAL_LANG_OPTS_EMPTY: 'Código de idioma inválido ou sem opções traduzíveis',
    EINVAL_LANG_CODE_OR_NAME: 'Nome ou código do idioma não suportado, use o comando `Language` para visualizar os idiomas suportados',
};