
import { Button } from '@/components/ui/button';
import { QuickReply } from './types';

interface QuickReplyButtonsProps {
  quickReplies: QuickReply[];
  onQuickReplyClick: (reply: string) => void;
}

const QuickReplyButtons = ({ quickReplies, onQuickReplyClick }: QuickReplyButtonsProps) => {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {quickReplies.map((reply) => (
        <Button
          key={reply.id}
          variant="outline"
          size="sm"
          className="text-xs rounded-full bg-gray-50 hover:bg-gray-100 border-gray-200"
          onClick={() => onQuickReplyClick(reply.text)}
        >
          {reply.text}
        </Button>
      ))}
    </div>
  );
};

export default QuickReplyButtons;
