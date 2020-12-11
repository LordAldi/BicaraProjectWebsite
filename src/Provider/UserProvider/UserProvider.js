import { createContext, useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

const DATA = gql`
  query me {
    me {
      id
      username
      email
    }
  }
`;
export const UserContext = createContext({
  isAuth: false,
  ID: "",
  username: "",
});

export const UserProvider = ({ children }) => {
  const { loading, error, data } = useQuery(DATA);

  const [user, setUser] = useState({
    username: "",
    ID: "",
    isAuth: false,
  });

  const login = (login) => {
    localStorage.setItem("token", login.jwt);
    setUser((user) => ({
      username: login.user.username,
      ID: login.user.id,
      isAuth: true,
    }));
  };

  // Logout updates the user data to default
  const logout = () => {
    localStorage.setItem("token", "");
    setUser((user) => ({
      username: "",
      ID: "",
      IsAuth: false,
    }));
  };
  useEffect(() => {
    if (!loading && data && !error) {
      setUser((user) => ({
        username: data.me.username,
        ID: data.me.id,
        isAuth: true,
      }));
    }
  }, [data]);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
