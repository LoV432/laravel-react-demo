import MessageItem from "@/Components/MessageItem";
import Pagination from "@/Components/Pagination";
import { LaravelPagination } from "@/Types/LaravelPagination";
import { MessageWithVenterAndColor } from "@/Types/Message";

type MessagesData = LaravelPagination & {
    data: MessageWithVenterAndColor[];
};

export default function Messages({
    messagesData,
}: {
    messagesData: MessagesData;
}) {
    console.log(messagesData);
    return (
        <>
            <div className="max-w-2xl mx-auto grid gap-5 w-full">
                <h1 className="text-3xl font-bold text-gray-100 text-center">
                    Messages for{" "}
                    <span className="block">
                        {messagesData.data[0].venter.user_name}
                    </span>
                </h1>
                <div className="space-y-4">
                    {messagesData.data.map((message) => (
                        <MessageItem key={message.uuid} message={message} />
                    ))}
                </div>
                <Pagination pagination={messagesData} />
            </div>
        </>
    );
}
