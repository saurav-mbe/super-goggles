"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCode = exports.addCode = void 0;
const emailCodeMap = new Map();
const addCode = (email, value) => {
    emailCodeMap.set(email, value);
};
exports.addCode = addCode;
const getCode = (email) => {
    return emailCodeMap.get(email);
};
exports.getCode = getCode;
//# sourceMappingURL=otp-storage.js.map