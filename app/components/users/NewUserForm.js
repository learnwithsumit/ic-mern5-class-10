import { addUser } from "@/actions/users";
import Button from "@/app/components/ui/Button";

export default function NewUserForm() {
    const addProUser = addUser.bind(null, "pro");

    return (
        <form action={addProUser} className="flex flex-col gap-4">
            <div>
                <input
                    className="border border-gray-700 rounded px-3 py-2 w-full"
                    type="text"
                    placeholder="Name"
                    name="name"
                />
            </div>
            <div>
                <input
                    className="border border-gray-700 rounded px-3 py-2 w-full"
                    type="email"
                    placeholder="Email"
                    name="email"
                />
            </div>
            <div>
                <Button />
            </div>
        </form>
    );
}
