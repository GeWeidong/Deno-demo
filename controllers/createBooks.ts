import { Context } from "../deps.ts";
import { createBooks } from "../services/books.ts";

export default async (ctx: Context) => {
  const { request, response } = ctx;
  const data = await request.body().value;
  console.log(data, '请求的body参数');
  const result = await createBooks(data);
  response.body = result;
};
