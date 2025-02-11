import { Link } from "@inertiajs/react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-gray-900 min-h-screen p-8 pt-4 flex flex-col gap-5">
            <Link href="/" className="text-3xl font-bold text-gray-100">
                Venter
            </Link>
            {children}
        </div>
    );
}
