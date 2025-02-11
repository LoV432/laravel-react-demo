import { Link, usePage } from "@inertiajs/react";
import { MessageWithVenterAndColor } from "../Types/Message";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { useState } from "react";
import EditMessage from "./EditMessage";

type MessageItemProps = {
    message: MessageWithVenterAndColor;
};

export default function MessageItem({ message }: MessageItemProps) {
    const [isEditing, setIsEditing] = useState(false);
    const { venter_id } = usePage().props;
    const avatarUrl = `https://robohash.org/${message.venter_id}?set=set1`;
    return (
        <div
            className="flex items-start space-x-4 p-4 rounded-lg relative border-2 border-white border-opacity-10"
            style={{ backgroundColor: `${message.color?.color_name}10` }}
        >
            <Link
                href={`/venter/${message.venter.id}`}
                className="absolute inset-0"
            ></Link>
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
                    {message.venter.user_name === venter_id && (
                        <div
                            onClick={() => setIsEditing(!isEditing)}
                            className="absolute -top-2 -right-3 rounded-full bg-slate-950 px-1 py-1 text-white"
                        >
                            <Pencil1Icon className="w-4 h-4" />
                        </div>
                    )}
                </div>
                {isEditing ? (
                    <EditMessage
                        message={message}
                        setIsEditing={setIsEditing}
                    />
                ) : (
                    <p
                        className="mt-1 text-gray-300"
                        style={{ color: message.color?.color_name }}
                    >
                        {message.is_deleted ? (
                            "This message has been deleted."
                        ) : (
                            <pre>{message.message_text}</pre>
                        )}
                    </p>
                )}
            </div>
        </div>
    );
}
