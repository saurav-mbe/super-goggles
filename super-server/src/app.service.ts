import { Injectable, StreamableFile } from '@nestjs/common';
import { sendEmail } from './helpers/smpt';
import { getCode } from './helpers/otp-storage';
import { createReadStream } from 'fs';
import { join } from 'path';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  sendEmail(email: string): void {
    sendEmail(email);
  }

  verifyCode(email: string, code: number) {
    console.log(getCode(email), code);
    if (getCode(email).toString() === code.toString()) {
      console.log(code);
      const file = createReadStream(
        join(process.cwd(), 'resources/editions/oct1/oct1.pdf'),
      );
      return new StreamableFile(file);
    }
  }
}
