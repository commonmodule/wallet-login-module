import { IWalletModuleConfig, WalletModuleConfig } from "@commonmodule/wallet";

class WalletLoginConfig {
  public messageForWalletLogin = "Login with Crypto Wallet";
  public executeAfterLogin = async (token: string) => {};

  private _apiBaseURL: string | undefined;
  public get apiBaseURL() {
    if (!this._apiBaseURL) throw new Error("API base URL is not set");
    return this._apiBaseURL;
  }
  public set apiBaseURL(url: string) {
    this._apiBaseURL = url;
  }

  public init(options: IWalletModuleConfig & { apiBaseURL: string }) {
    this.apiBaseURL = options.apiBaseURL;
    WalletModuleConfig.init(options);
  }
}

export default new WalletLoginConfig();
