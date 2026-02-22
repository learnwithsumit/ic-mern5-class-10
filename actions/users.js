"use server";

import { createUser, readUsers } from "@/lib/users";
import wait from "@/utils/wait";
import { revalidatePath } from "next/cache";

export async function addUser(pro, formData) {
    console.log(pro);

    const user = {
        name: formData.get("name"),
        email: formData.get("email"),
    };

    await createUser(user);
    await wait(3000);

    // signal to UserList to update itself
    revalidatePath("/");
}

export async function getUsers() {
    const users = await readUsers();
    return users;
}
