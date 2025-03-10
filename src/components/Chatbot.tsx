import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog"; // ShadCN Dialog for modal functionality
import { MessageCircleDashed } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import useMessage from "@/hooks/useMessage";

const Chatbot = () => {
  const { input, messages, setInput, isOpen, setIsOpen, sendMessage, loading } =
    useMessage();

  return (
    <>
      {/* Chat Icon button from Loccid React */}
      <Button
        onClick={() => setIsOpen(true)} // Open modal on click
        className="fixed bottom-5 right-5 p-3 rounded-full text-white cursor-pointer size-14"
      >
        <MessageCircleDashed className="size-7" />
      </Button>

      {/* ShadCN Dialog to show Chatbot */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogOverlay className="fixed inset-0 bg-white opacity-50" />
        <DialogContent className="w-[90vw] max-w-xl mx-auto p-4 bg-white dark:bg-dark rounded-lg">
          <DialogHeader className="text-lg font-bold">
            <DialogTitle>AI Chatbot</DialogTitle>
            <DialogDescription className="text-sm font-light">
              an assistant chatbot
            </DialogDescription>
          </DialogHeader>
          <div className="chat-window h-64 overflow-auto mt-2 p-2 dark:bg-[#303030]  bg-gray-100 rounded-lg">
            <div className="chat-messages">
              {messages.map((msg, index) => (
                <div key={index} className="mb-3">
                  <div className="text-sm font-semibold">User:</div>
                  <div className="dark:text-gray-400 text-gray-800">
                    {msg.user}
                  </div>
                  <div className="text-sm font-semibold mt-2">Bot:</div>
                  <div className="text-gray-600 dark:text-gray-400 ">
                    {msg.bot}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Input and Send Button */}
          <div className="mt-4 flex items-center space-x-2">
            <Input
              type="text"
              className="flex-1 p-2 rounded-lg border border-gray-300"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="px-4 py-2 bg-primary text-white rounded-lg cursor-pointer"
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
