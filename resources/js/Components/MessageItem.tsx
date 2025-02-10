import { MessageWithVenterAndColor } from "../Types/Message";

type MessageItemProps = {
    message: MessageWithVenterAndColor;
};

export default function MessageItem({ message }: MessageItemProps) {
    const avatarUrl = `https://robohash.org/${message.venter_id}?set=set1`;
    return (
        <div
            className="flex items-start space-x-4 p-4 rounded-lg"
            style={{ backgroundColor: `${message.color.color_name}10` }}
        >
            <img
                src={avatarUrl || "/placeholder.svg"}
                alt={message.venter.user_name}
                className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-200">
                        {message.venter.user_name}
                    </h3>
                    <span className="text-xs text-gray-400">
                        {new Date(message.created_at).toLocaleString()}
                    </span>
                </div>
                <p
                    className="mt-1 text-gray-300"
                    style={{ color: message.color.color_name }}
                >
                    {message.is_deleted
                        ? "This message has been deleted."
                        : message.message_text}
                </p>
            </div>
        </div>
    );
}
