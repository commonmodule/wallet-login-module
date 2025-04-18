import { IWalletModuleConfig } from "@commonmodule/wallet";
declare class WalletLoginConfig {
    messageForWalletLogin: string;
    executeAfterLogin: (token: string) => Promise<void>;
    private _apiBaseURL;
    get apiBaseURL(): string;
    set apiBaseURL(url: string);
    init(options: IWalletModuleConfig & {
        apiBaseURL: string;
    }): void;
}
declare const _default: WalletLoginConfig;
export default _default;
//# sourceMappingURL=WalletLoginConfig.d.ts.map