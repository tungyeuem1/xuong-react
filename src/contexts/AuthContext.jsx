/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import api from "../api";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          // Dùng cách này khi đã có api/endpoint để kiểm tra token
          const { data } = await api.get("/users/3", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          // Dùng cách này khi chưa có api/endpoint để kiểm tra token

          // const { data } = await api.get("/660/users/3", {
          //   headers: {
          //     Authorization: `Bearer ${token}`,
          //   },
          // });

          setUser(data);
          setIsAuthenticated(true);
        } catch (error) {
          console.error(error);
          setIsAuthenticated(false);
          setUser(null);
        }
      }
    };
    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await api.post("/login", { email, password });
      if (data.accessToken) {
        localStorage.setItem("token", data.accessToken);
        console.log(
          "Token set in localStorage:",
          localStorage.getItem("token")
        );
        setUser(data.user);
        setIsAuthenticated(true);
      } else {
        console.error("No access token in response");
        throw new Error("No access token in response");
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const register = async (name, email, password) => {
    try {
      const { data } = await api.post("/register", { name, email, password });
      if (data.accessToken) {
        localStorage.setItem("token", data.accessToken);
        setUser(data.user);
        setIsAuthenticated(true);
      } else {
        console.error("No access token in response");
        throw new Error("No access token in response");
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
