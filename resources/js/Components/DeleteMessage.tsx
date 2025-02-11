import { MessageWithVenterAndColor } from "@/Types/Message";
import { useForm } from "@inertiajs/react";
import { TrashIcon } from "@radix-ui/react-icons";

export default function EditMessage({
    message,
}: {
    message: MessageWithVenterAndColor;
}) {
    const { processing, reset, delete: deleteMessage } = useForm();

    function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        deleteMessage(`/messages/${message.id}`, {
            onSuccess: () => {
                reset();
            },
        });
    }
    return (
        <form onSubmit={submit} className="absolute -top-2 right-4">
            <button
                type="submit"
                disabled={processing}
                className="rounded-full bg-slate-950 px-1 py-1 text-white"
            >
                <TrashIcon className="w-4 h-4" />
            </button>
        </form>
    );
}
