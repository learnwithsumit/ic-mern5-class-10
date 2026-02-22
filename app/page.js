import NewUserForm from "@/app/components/users/NewUserForm";
import UserList from "@/app/components/users/UserList";

export default async function Home() {
    return (
        <div className="flex flex-col gap-6 p-20">
            <h1 className="font-bold text-3xl">ADD USER</h1>
            <NewUserForm />
            <UserList />
        </div>
    );
}
