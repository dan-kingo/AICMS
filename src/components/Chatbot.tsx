// Chatbot.tsx

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
} from "@/components/ui/dialog"; // ShadCN Dialog for modal functionality
import axios from "axios"; // For making API requests
import { MessageCircleDashed } from "lucide-react";

interface Message {
  user: string;
  bot: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false); // State for controlling modal visibility
  const [messages, setMessages] = useState<Message[]>([]); // State for storing chat messages
  const [input, setInput] = useState<string>(""); // User's input
  const [loading, setLoading] = useState<boolean>(false); // Loading state for message sending

  // Send message to API
  const sendMessage = async () => {
    if (!input.trim()) return; // Do nothing if input is empty

    // Add user message to the chat
    setMessages([...messages, { user: input, bot: "..." }]);
    setLoading(true);

    try {
      // Make a request to your backend (replace with your own API endpoint)
      const response = await axios.post("/chatbot", { message: input });
      // Add the bot response to the chat
      setMessages([...messages, { user: input, bot: response.data.reply }]);
      setInput(""); // Clear input field
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

  return (
    <>
      {/* Chat Icon button from Loccid React */}
      <button
        onClick={() => setIsOpen(true)} // Open modal on click
        className="fixed bottom-5 right-5 p-3 bg-primary rounded-full text-white"
      >
        <MessageCircleDashed />
      </button>

      {/* ShadCN Dialog to show Chatbot */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogOverlay className="fixed inset-0 bg-black opacity-50" />
        <DialogContent className="w-[90vw] max-w-xl mx-auto p-4 bg-white dark:bg-dark rounded-lg">
          <DialogHeader className="text-lg font-bold">AI Chatbot</DialogHeader>
          <div className="chat-window h-64 overflow-auto mt-2 p-2 dark:bg-gray-900 bg-gray-100 rounded-lg">
            <div className="chat-messages">
              {messages.map((msg, index) => (
                <div key={index} className="mb-3">
                  <div className="text-sm font-semibold">User:</div>
                  <div className="text-gray-800">{msg.user}</div>
                  <div className="text-sm font-semibold mt-2">Bot:</div>
                  <div className="text-gray-600">{msg.bot}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Input and Send Button */}
          <div className="mt-4 flex items-center space-x-2">
            <input
              type="text"
              className="flex-1 p-2 rounded-lg border border-gray-300"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="px-4 py-2 bg-primary text-white rounded-lg"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Chatbot;
