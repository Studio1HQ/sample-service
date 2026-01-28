import { db } from "../utils/db.js";


export async function fetchUserById(id) {
    return db.users.find(u => u.id === id);
}


export async function saveUser(data) {
    const user = { id: Date.now().toString(), ...data };
    db.users.push(user);
    return user;
}
