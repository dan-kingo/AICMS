import axios from "axios";
import { useState } from "react";
interface Message {
  user: string;
  bot: string;
}
const useMessage = () => {
  const [isOpen, setIsOpen] = useState(false); // State for controlling modal visibility
  const [messages, setMessages] = useState<Message[]>([]); // State for storing chat messages
  const [input, setInput] = useState<string>(""); // User's input
  const [loading, setLoading] = useState<boolean>(false); // Loading state for message sending

  // Send message to API
  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to the chat
    setMessages([...messages, { user: input, bot: "..." }]);
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:3000/api/chatbot", {
        message: input,
      });
      setMessages([...messages, { user: input, bot: response.data.reply }]);
      setInput("");
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages([
        ...messages,
        { user: input, bot: "Sorry, something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return { isOpen, setIsOpen, input, sendMessage, loading, messages, setInput };
};

export default useMessage;
