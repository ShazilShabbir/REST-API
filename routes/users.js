import express from "express";
import { createUser, getUser,specificUser,deleteUser , updateUser} from "../controllers/users.js";
const router = express.Router();

router.get("/", getUser);

router.post("/", createUser);

router.get("/:id", specificUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
