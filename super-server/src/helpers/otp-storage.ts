// TODO : convert to nest servicec

const emailCodeMap = new Map<string, number>();

// const writeEmailToFile = () => {
//   // TODO : write the email to a separate file or database for record
// };

export const addCode = (email: string, value: number) => {
  emailCodeMap.set(email, value);
};

export const getCode = (email: string): number => {
  return emailCodeMap.get(email);
};
