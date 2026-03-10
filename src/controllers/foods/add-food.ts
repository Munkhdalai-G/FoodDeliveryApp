import { Context } from "hono";
import { foods } from "../../model/foods.model";

export const addFood = async (c: Context) => {
  const { title } = await c.req.json();
  const newFood = { id: "3", title };

  const updatedFoods = [...foods, newFood];

  c.status(200);

  return c.json({ foods: updatedFoods });
};
