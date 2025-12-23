import { Router } from "express";
import { getFoods } from "../controllers/food/get-foods";
import { createFood } from "../controllers/food/create-foods";
import { deleteFood } from "../controllers/food/delete-foods";

const FoodRouter = Router();

FoodRouter.get("/", getFoods).post("/create", createFood).delete("/", deleteFood)
export {FoodRouter};