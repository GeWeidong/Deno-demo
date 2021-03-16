import { Context } from "../deps.ts";
export default async (ctx: Context, next: any) => {
  try {
    await next();
  } catch (err) {
    ctx.response.status = 500;
    ctx.response.body = { msg: err.message };
  }
};
