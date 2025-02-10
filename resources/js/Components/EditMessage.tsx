import { MessageWithVenterAndColor } from "@/Types/Message";
import { useForm } from "@inertiajs/react";

export default function SendMessage({
    message,
    setIsEditing,
}: {
    message: MessageWithVenterAndColor;
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const { data, setData, patch, processing, errors, reset } = useForm({
        message: message.message_text,
    });

    function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        patch(`/messages/${message.id}`, {
            onSuccess: () => {
                reset();
                setIsEditing(false);
            },
        });
    }
    return (
        <form onSubmit={submit} className="flex flex-col w-full relative">
            <textarea
                rows={5}
                className="w-full rounded-lg border-2 border-gray-300 p-2 text-sm"
                name="message"
                value={data.message}
                onChange={(e) => setData("message", e.target.value)}
            />
            <button
                className="aboslute right-0 top-0 mt-2 rounded-lg bg-blue-500 px-4 py-2 text-white"
                type="submit"
                disabled={processing}
            >
                Save
            </button>
        </form>
    );
}
