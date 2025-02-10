import MessageItem from "../Components/MessageItem";
import Pagination from "../Components/Pagination";
import SendMessage from "../Components/SendMessage";
import { LaravelPagination } from "../Types/LaravelPagination";
import { MessageWithVenterAndColor } from "../Types/Message";

type MessagesData = LaravelPagination & {
    data: MessageWithVenterAndColor[];
};

export default function Home({ messagesData }: { messagesData: MessagesData }) {
    const messages = messagesData.data;
    return (
        <>
            <div className="bg-gray-900 min-h-screen p-8">
                <div className="max-w-2xl mx-auto grid gap-5">
                    <div className="justify-self-center w-full">
                        <SendMessage />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-100">
                        Messages
                    </h1>
                    <div className="space-y-4">
                        {messages.map((message) => (
                            <MessageItem key={message.uuid} message={message} />
                        ))}
                    </div>
                    <Pagination pagination={messagesData} />
                </div>
            </div>
            {/* <div className="px-6 py-4 flex min-h-screen flex-col bg-white">
                <p className="text-slate-500 mt-2 text-sm">
                    {totalMessages} messages
                </p>
                {messages.map((message) => (
                    <div key={message.uuid} className="mt-4">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src={`https://robohash.org/${message.venter_id}?set=set1`}
                                    alt=""
                                />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-slate-700">
                                    {message.venter_id}
                                </p>
                                <p className="mt-0.5 text-sm text-slate-500">
                                    {message.message_text}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="border-t border-gray-200 mt-auto pt-2"></div>
            </div> */}
        </>
    );
}
