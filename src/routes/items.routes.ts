import { Router } from "express";
import { getAllItems, getItemsById, createItem, updateItem, deleteItem } from "../controllers/item.controller";
import { validateItem } from "../middlewares/validateItem";
import { handleValidation } from "../middlewares/handleValidation";

const router = Router();

router.get("/", getAllItems);
router.get("/:id", getItemsById);
router.post("/", validateItem, handleValidation, createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem)

export default router;