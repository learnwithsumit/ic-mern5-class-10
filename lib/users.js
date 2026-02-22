export const createUser = async (userData) => {
    const response = await fetch("http://localhost:8000/users", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const user = await response.json();

    return user;
};

export const readUsers = async () => {
    const response = await fetch("http://localhost:8000/users");
    const users = await response.json();

    return users;
};
