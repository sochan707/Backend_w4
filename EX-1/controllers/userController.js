import * as User from '../models/users.js';

export const getAllUsers = (req, res) => {
    res.json(User.getUsers());
};

export const getUser = (req, res) => {
    const user = User.getUserById(parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
};

export const createUser = (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ error: 'Name and email required' });
    const newUser = User.createUser(name, email);
    res.status(201).json(newUser);
};

export const updateUser = (req, res) => {
    const updated = User.updateUser(parseInt(req.params.id), req.body);
    if (!updated) return res.status(404).json({ error: 'User not found' });
    res.json(updated);
};

export const deleteUser = (req, res) => {
    const deleted = User.deleteUser(parseInt(req.params.id));
    if (!deleted) return res.status(404).json({ error: 'User not found' });
    res.status(204).send();
};