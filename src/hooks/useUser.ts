import axios from "axios";
import Cookies from "js-cookie";

const useUser = async () => {
  try {
    const token = Cookies.get("token");

    if (!token) {
      console.error("No authentication token found.");
      return null;
    }

    const response = await axios.get(
      "http://localhost:3000/api/user/current-user",
      {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      }
    );

    if (response.data.success) {
      return response.data.user;
    } else {
      console.error("Failed to fetch user data.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

export default useUser;
