import * as React from "react";

export default function Home() {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {}, []);
    return (
        <>
            <div className="bg-white rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                <h3 className="mt-5 text-base font-medium tracking-tight">
                    Welcome to Inertia with React!
                </h3>
                <p className="text-slate-500 mt-2 text-sm">{count}</p>
                <button
                    onClick={() => {
                        setCount(count + 1);
                    }}
                    className="mt-5 bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
                >
                    Increment
                </button>
                <button
                    onClick={() => {
                        setCount(count - 1);
                    }}
                    className="mt-5 bg-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded"
                >
                    Decrement
                </button>
            </div>
        </>
    );
}
