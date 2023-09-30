"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const smpt_1 = require("./helpers/smpt");
const otp_storage_1 = require("./helpers/otp-storage");
const fs_1 = require("fs");
const path_1 = require("path");
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
    sendEmail(email) {
        (0, smpt_1.sendEmail)(email);
    }
    verifyCode(email, code) {
        console.log((0, otp_storage_1.getCode)(email), code);
        if ((0, otp_storage_1.getCode)(email).toString() === code.toString()) {
            console.log(code);
            const file = (0, fs_1.createReadStream)((0, path_1.join)(process.cwd(), 'resources/editions/oct1/oct1.pdf'));
            return new common_1.StreamableFile(file);
        }
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map