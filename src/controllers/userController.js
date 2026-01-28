import { fetchUserById, saveUser } from "../services/userService.js";


export async function getUser(req, res) {
    const user = await fetchUserById(req.params.id);
    res.json(user);
}


export async function createUser(req, res) {
    const user = await saveUser(req.body);
    res.status(201).json(user);
}
