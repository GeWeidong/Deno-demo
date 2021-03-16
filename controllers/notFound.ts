import { Context } from "../deps.ts";

export default (ctx: Context) => {
  ctx.response.status = 404;
  ctx.response.body = { msg: "Not Found" };
};
