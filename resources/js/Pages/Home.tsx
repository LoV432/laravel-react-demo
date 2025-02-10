import Pagination from "../Components/Pagination";
import SendMessage from "../Components/SendMessage";
import { LaravelPagination } from "../Types/LaravelPagination";

type Message = {
    message_text: string;
    created_at: string;
    venter_id: number;
    color_id: number;
    uuid: string;
    is_deleted: boolean;
};

type MessagesData = LaravelPagination & {
    data: Message[];
};

export default function Home({ messagesData }: { messagesData: MessagesData }) {
    const messages = messagesData.data;
    const totalMessages = messages.length;
    return (
        <>
            <div className="px-6 py-4 flex min-h-screen flex-col">
                <SendMessage />
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
                <div className="border-t border-gray-200 mt-auto pt-2">
                    <Pagination pagination={messagesData} />
                </div>
            </div>
        </>
    );
}
