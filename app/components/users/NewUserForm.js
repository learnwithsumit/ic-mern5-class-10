export default function NewUserForm() {
    return (
        <div className="flex flex-col gap-4">
            <div>
                <input
                    className="border border-gray-700 rounded px-3 py-2 w-full"
                    type="text"
                    placeholder="Name"
                />
            </div>
            <div>
                <input
                    className="border border-gray-700 rounded px-3 py-2 w-full"
                    type="email"
                    placeholder="Email"
                />
            </div>
            <div>
                <button className="bg-blue-500 text-white rounded px-3 py-2 w-full">
                    Submit
                </button>
            </div>
        </div>
    );
}
