import { Context } from "hono";
import { foods } from "../../model/foods.model";

export const getFoodsById = (c: Context) => {
  const id = c.req.param("id");
  let food = foods.find((food) => food.id === id);

  return c.json({ food: food });
};
