import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function ChatbotPlaceholder() {
  const handleClick = () => {
    console.log("Chatbot clicked - ready for future AI integration");
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        size="icon"
        className="w-14 h-14 rounded-full shadow-lg bg-primary hover:bg-primary/90"
        onClick={handleClick}
        data-testid="button-chatbot"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
}
