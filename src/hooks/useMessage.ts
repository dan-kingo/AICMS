import axios from "axios";
import { useState } from "react";

interface Message {
  user: string;
  bot: string;
}

const useMessage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Send message to API
  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { user: input, bot: "..." },
    ]);
    setLoading(true);
    const userInput = input;
    setInput("");

    try {
      const response = await axios.post("http://localhost:3000/api/chatbot", {
        message: userInput,
      });

      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1),
        { user: userInput, bot: response.data.reply },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1),
        { user: userInput, bot: "Sorry, something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return { isOpen, setIsOpen, input, sendMessage, loading, messages, setInput };
};

export default useMessage;
