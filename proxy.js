import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function proxy(request) {
    // anything you can do here
    return NextResponse.rewrite(new URL("/user", request.url));
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
    matcher: ["/"],
};
