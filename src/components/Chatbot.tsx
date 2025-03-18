import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  BotIcon,
  Loader2Icon,
  SendHorizonalIcon,
  User2Icon,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import useMessage from "@/hooks/useMessage";

const Chatbot = () => {
  const { input, messages, setInput, isOpen, setIsOpen, sendMessage, loading } =
    useMessage();

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 p-3 rounded-full text-white cursor-pointer size-14"
      >
        <BotIcon className="size-7" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="w-[90vw] max-w-xl mx-auto p-4 bg-white dark:bg-dark rounded-lg">
          <DialogHeader className="text-lg font-bold">
            <DialogTitle>AI Chatbot</DialogTitle>
            <DialogDescription className="text-sm font-light">
              An assistant chatbot powered by Gemini.
            </DialogDescription>
          </DialogHeader>

          <div className="chat-window h-64 overflow-auto mt-2 p-2 dark:bg-[#303030] bg-gray-100 rounded-lg">
            {messages.map((msg, index) => (
              <div key={index} className="mb-3">
                <div className="text-sm font-semibold flex gap-4 items-center">
                  <User2Icon />
                  <div className=" bg-blue-900 rounded-sm p-2 text-white">
                    {msg.user}
                  </div>
                </div>

                {msg.bot && (
                  <div className="text-sm font-semibold mt-2 flex items-center gap-4">
                    <BotIcon />
                    <div className="text-white bg-gray-700 p-2 rounded-sm">
                      {msg.bot}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center space-x-2">
            <Input
              type="text"
              className="flex-1 p-2 rounded-lg border border-gray-300"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
            />
            <Button
              variant="outline"
              className="dark:text-white"
              onClick={sendMessage}
              disabled={loading}
            >
              {loading ? (
                <Loader2Icon className="animate-spin" />
              ) : (
                <SendHorizonalIcon size="18px" />
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Chatbot;
