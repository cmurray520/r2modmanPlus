import LangInterface from './langInterface';

const enDefinition: LangInterface = {
    // Splash.vue
    SPLASH_UPDATE_BANNER: () => "Risk of Rain 2 updates may break mods. If a new update has been released, please be patient.",
    ABOUT: () => "About",
    FAQ: () => "FAQ",
    GO_BACK: () => "Go back",
    CONTINUE_OFFLINE: () => "Continue offline",
    RETRY_CONNECTION: () => "Try to reconnect",
    INSTALL_MODS_SPLASH_MESSAGE: () => "You can install mods using the \"Install with Mod Manager\" button on",
    EXPORT_PROFILE_SPLASH_MESSAGE: () =>
        "You can export the selected profile from the settings screen as either a file, or a code." +
        "This makes it easy to share your mod list with friends!",
    DID_YOU_KNOW: () => "Did you know?",
    HAVING_TROUBLE: () => "Having trouble?",
    HAVING_TROUBLE_DETAIL: () =>
        "Send a screenshot of the error in the Thunderstore modding discord server. Feel free to ping me " +
        "if it doesn't get resolved.",
    HOW_DO_I_GET_STARTED: () => "How do I get started?",
    HOW_DO_I_GET_STARTED_ANSWER: () => "Head over to the online tab, and download BepInEx and R2API.",
    HOW_DO_I_START_MODDED: () => "How do I start the game with mods?",
    HOW_DO_I_START_MODDED_ANSWER: () => "You have to start the game from within the manager. Starting through Steam will not work "
        + "without changing launch parameters.",

    // Splash - About Section
    SPLASH_ABOUT_AUTHOR: () => "It's created by Ebkr, using Quasar.",
    SPLASH_ABOUT_DEV_TOOLS: () => "Quasar provides the following development tools that r2modman is built upon:",

    ELECTRON: () => "Electron",
    NODE: () => "Node",
    TYPESCRIPT: () => "TypeScript",
    VUE: () => "Vue",

    // Manager.vue
    INSTALLED: () => "Installed",
    INSTALLED_COUNT: (count: number) => `Installed ${count}`,
    CHECKING_FOR_UPDATES: () => "Checking for updates",
    STARTING_R2MODMAN: () => "Starting r2modman",
    INITIALISING: () => "Initialising",
    PREPARING: () => "Preparing",
    DOWNLOADING_EXCLUSIONS: () => "Downloading exclusions",
    CONNECTING_TO_THUNDERSTORE: () => "Connecting to Thunderstore",
    GETTING_MOD_LIST_FROM_THUNDERSTORE: () => "Getting mod list from Thunderstore"
}

export default enDefinition;
