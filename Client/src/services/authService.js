import axios from "./api";
import Cookies from "js-cookie";
const useAuth = () => {
  const signup = async (userData) => {
    try {
      const response = await axios.post("/users/signup", userData);
      return response.data;
    } catch (error) {
      console.error("Signup Error:", error.response || error.message);
      throw error;
    }
  };

  const login = async (credentials) => {
    try {
      const response = await axios.post("/users/login", credentials);
      const token = response.data.token;

      const expiryDate = new Date(new Date().getTime() + 5 * 60 * 1000);

      Cookies.set("authToken", token, { expires: expiryDate });
      Cookies.set("authTokenExpiry", expiryDate.toISOString(), {
        expires: expiryDate,
      });

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return response.data;
    } catch (error) {
      console.error("Login Error:", error.response || error.message);
      throw error;
    }
  };

  return { signup, login };
};

export default useAuth;
