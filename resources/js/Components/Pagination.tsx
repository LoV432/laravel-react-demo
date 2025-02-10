import { Link } from "@inertiajs/react";
import { LaravelPagination } from "../Types/LaravelPagination";

type PaginationProps = {
    pagination: LaravelPagination;
};

function onEachSide(pagination: LaravelPagination, eachSide: number) {
    const { links } = pagination;

    const activeIndex = links.indexOf(links.filter((link) => link.active)[0]);
    const lastIndex = links.length - 1;

    return links.filter(
        (_, index) =>
            index === 0 ||
            index === lastIndex ||
            Math.abs(index - activeIndex) <= eachSide
    );
}

export default function Pagination({ pagination }: PaginationProps) {
    const {
        current_page,
        last_page,
        prev_page_url,
        next_page_url,
        last_page_url,
        first_page_url,
    } = pagination;
    const newLinks = onEachSide(pagination, 2);
    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-1 justify-between sm:hidden">
                <a
                    href={prev_page_url}
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </a>
                <a
                    href={next_page_url}
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between gap-8 flex-row-reverse">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing{" "}
                        <span className="font-medium">{current_page}</span> of{" "}
                        <span className="font-medium">{last_page}</span> pages
                    </p>
                </div>
                <div>
                    <nav
                        aria-label="Pagination"
                        className="isolate inline-flex -space-x-px rounded-md shadow-xs"
                    >
                        {current_page > 1 && (
                            <Link
                                href={first_page_url}
                                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                                {"<<"}
                            </Link>
                        )}
                        {newLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.url}
                                className={
                                    link.active
                                        ? "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        : "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                }
                                // TODO: This is just to make the < > icons work.
                                // I should not be doing this.
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            ></Link>
                        ))}
                        {current_page < last_page && (
                            <Link
                                href={last_page_url}
                                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                                {">>"}
                            </Link>
                        )}
                    </nav>
                </div>
            </div>
        </div>
    );
}
