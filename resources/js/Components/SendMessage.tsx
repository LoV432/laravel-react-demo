import { useForm } from "@inertiajs/react";

export default function SendMessage() {
    const { data, setData, post, processing, errors, reset } = useForm({
        message: "",
    });

    function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post("/", {
            onSuccess: () => {
                reset();
            },
        });
    }
    return (
        <form onSubmit={submit} className="flex flex-col w-full">
            <textarea
                rows={5}
                className="w-full rounded-lg border-2 border-gray-300 p-2 text-sm"
                name="message"
                placeholder="Whats on your mind?"
                value={data.message}
                onChange={(e) => setData("message", e.target.value)}
            />
            {errors.message && <div>{errors.message}</div>}
            <button
                type="submit"
                disabled={processing}
                className="mt-2 rounded-lg bg-blue-500 px-4 py-2 text-white"
            >
                Send Message
            </button>
        </form>
    );
}
