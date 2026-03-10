import { Hono } from "hono";
import { getFoods } from "../controllers/foods/get-foods";
import { getFoodsById } from "../controllers/foods/get-food-by-id";
import { addFood } from "../controllers/foods/add-food";
import { updateFoodById } from "../controllers/foods/update-food-by-id";
import { deleteFood } from "../controllers/foods/delete-food-by-id";

export default function registerFoodsRoute(app: Hono) {
  app.get("/foods", getFoods);

  app.get("/foods/:id", getFoodsById);

  app.post("/foods", addFood);

  app.put("/foods/:id", updateFoodById);

  app.delete("/foods/:id", deleteFood);
}
