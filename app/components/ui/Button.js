"use client";

import { useFormStatus } from "react-dom";

export default function Button() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className="bg-blue-500 text-white rounded px-3 py-2 w-full disabled:opacity-15"
            disabled={pending}
        >
            Submit
        </button>
    );
}
