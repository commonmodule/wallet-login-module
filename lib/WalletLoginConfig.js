import { WalletModuleConfig } from "@commonmodule/wallet";
class WalletLoginConfig {
    messageForWalletLogin = "Login with Crypto Wallet";
    executeAfterLogin = async (token) => { };
    _apiBaseURL;
    get apiBaseURL() {
        if (!this._apiBaseURL)
            throw new Error("API base URL is not set");
        return this._apiBaseURL;
    }
    set apiBaseURL(url) {
        this._apiBaseURL = url;
    }
    init(options) {
        this.apiBaseURL = options.apiBaseURL;
        WalletModuleConfig.init(options);
    }
}
export default new WalletLoginConfig();
//# sourceMappingURL=WalletLoginConfig.js.map