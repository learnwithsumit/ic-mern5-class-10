import { getUsers } from "@/actions/users";

export default async function UserList() {
    const users = await getUsers();

    return (
        <div className="box-secondary mt-20">
            <h2 className="font-bold text-2xl mb-6">USER LIST</h2>

            <div>
                {users.map((user, index) => (
                    <p key={user.id}>
                        {index + 1}: {user.name} - {user.email}
                    </p>
                ))}
            </div>
        </div>
    );
}
