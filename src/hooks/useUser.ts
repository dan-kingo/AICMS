import axios, { AxiosError } from "axios";

const useUser = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/user/current-user",
      {
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
    if (error instanceof AxiosError) {
      console.error(
        error.response?.data?.message || "An unknown error occurred."
      );
    } else {
      console.error("Failed to fetch user.");
    }
    return null;
  }
};

export default useUser;
