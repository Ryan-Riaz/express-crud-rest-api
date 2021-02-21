import { v4 as uuid } from "uuid";

let users = [
    { name: "ryan", age: 29, id: "123" },
    { name: "riaz", age: 19, id: "124" },
    { name: "boss", age: 34, id: "125" },
];

// get request for getting all users
export const getUsers = (req, res) => {
    res.json(users);
};

// post request for creating a user
export const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuid() });
    res.json(users);
    console.log(`${user.name} is added`);
};

// get request for getting a single user
export const getUser = (req, res) => {
    const { id } = req.params;

    const findUser = users.find((user) => user.id === id);

    res.json(findUser);
    console.log(`we found this ${id} No. user`);
};

// patch request for updating a user
export const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;

    const user = users.find((user) => user.id === id);

    if (name) user.name = name;
    if (age) user.age = age;
    res.json(users);
    console.log(`User of ${id} is updated`);
};

// delete request for deleting a user
export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.json(users);
    console.log(`${id} No. user is deleted`);
};
