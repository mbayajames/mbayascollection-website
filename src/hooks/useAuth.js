import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function useAuth() {
  const { user, token, login, logout } = useContext(AuthContext);

  const isAuthenticated = !!user && !!token;

  return { user, token, login, logout, isAuthenticated };
}

export default useAuth;
