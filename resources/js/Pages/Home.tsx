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
            <div className="bg-white rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                <h3 className="mt-5 text-base font-medium tracking-tight">
                    Welcome to Inertia with React!
                </h3>
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
            </div>
        </>
    );
}
