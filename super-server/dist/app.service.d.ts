import { StreamableFile } from '@nestjs/common';
export declare class AppService {
    getHello(): string;
    sendEmail(email: string): void;
    verifyCode(email: string, code: number): StreamableFile;
}
