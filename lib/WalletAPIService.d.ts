export default class WalletAPIService {
    static generateWalletLoginNonce(walletAddress: string): Promise<{
        nonce: string;
        issuedAt: string;
    }>;
    static walletLogin(walletAddress: string, signedMessage: string): Promise<string>;
    static walletLogout(): Promise<void>;
}
//# sourceMappingURL=WalletAPIService.d.ts.map