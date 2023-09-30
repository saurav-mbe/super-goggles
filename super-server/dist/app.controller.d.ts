import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    sendActivationCode(query: {
        email: string;
    }): Promise<void>;
    verifyCode(query: {
        email: string;
        code: number;
    }): Promise<import("@nestjs/common").StreamableFile>;
}
