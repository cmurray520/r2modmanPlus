export default interface LangInterface {

    SPLASH_UPDATE_BANNER: (...params: any[]) => string;
    ABOUT: (...params: any[]) => string;
    FAQ: (...params: any[]) => string;
    INSTALLED: (...params: any[]) => string;
    INSTALLED_COUNT: (...params: any[]) => string;
    CONTINUE_OFFLINE: (...params: any[]) => string;
    RETRY_CONNECTION: (...params: any[]) => string;
    GO_BACK: (...params: any[]) => string;
    INSTALL_MODS_SPLASH_MESSAGE: (...params: any[]) => string;
    EXPORT_PROFILE_SPLASH_MESSAGE: (...params: any[]) => string;
    DID_YOU_KNOW: (...params: any[]) => string;
    HAVING_TROUBLE: (...params: any[]) => string;
    HAVING_TROUBLE_DETAIL: (...params: any[]) => string;
    SPLASH_ABOUT_AUTHOR: (...params: any[]) => string;
    SPLASH_ABOUT_DEV_TOOLS: (...params: any[]) => string;
    ELECTRON: (...params: any[]) => string;
    NODE: (...params: any[]) => string;
    TYPESCRIPT: (...params: any[]) => string;
    VUE: (...params: any[]) => string;
    HOW_DO_I_GET_STARTED: (...params: any[]) => string;
    HOW_DO_I_GET_STARTED_ANSWER: (...params: any[]) => string;
    HOW_DO_I_START_MODDED: (...params: any[]) => string;
    HOW_DO_I_START_MODDED_ANSWER: (...params: any[]) => string;

}
