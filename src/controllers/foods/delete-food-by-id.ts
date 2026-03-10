import { Context } from "hono";
import { foods } from "../../model/foods.model";

export const deleteFood = (c: Context) => {
  const id = c.req.param("id");
  c.status(200);
  return c.json({ foods });
};
