import "./globals.css";

export const metadata = {
    title: "Server Actions",
    description: "Next.js Server Action Example",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="px-5">
                <main className="mx-auto rounded max-w-5xl px-5 min-dvh">
                    {children}
                </main>
            </body>
        </html>
    );
}
