export declare const mailOptions: (email: string) => {
    from: string;
    to: string;
    subject: string;
    text: string;
};
export declare const sendEmail: (email: string) => void;
