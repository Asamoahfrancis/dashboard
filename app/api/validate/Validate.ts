import { auth } from "@/app/auth";
export const Validate = async (password: string | undefined) => {
  console.log(auth[0].password);
  console.log(password);
  return auth[0].password == password;
};
