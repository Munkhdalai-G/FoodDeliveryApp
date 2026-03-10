import { Context } from "hono";
import { foods } from "../../model/foods.model";

export const updateFoodById = async (c: Context) => {
  const id = c.req.param("id");
  const { title } = await c.req.json();

  const updatedFoods = foods.map((food) => {
    if (food.id === id) {
      return { ...food, title };
    }
    return food;
  });

  c.status(200);
  return c.json({ foods: updatedFoods });
};
