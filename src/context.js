import { createContext } from "react";
export const AuthContext = createContext({
  isAuth: false,
  token: null,
  ID: null,
  username: null,
  login: () => {},
  logout: () => {},
});
