import express from "express";
import {
    createUser,
    deleteUser,
    getUser,
    getUsers,
    updateUser,
} from "../controllers/userController.js";

const router = express.Router();

// get all the users
router.get("/", getUsers);

// create user
router.post("/", createUser);

// find a single user
router.get("/:id", getUser);

// update a single user
router.patch("/:id", updateUser);

// delete a single user
router.delete("/:id", deleteUser);

export default router;
