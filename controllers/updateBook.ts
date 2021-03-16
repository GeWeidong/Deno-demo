import { Context } from "../deps.ts";
import { updateBook } from "../services/books.ts";
import getParams from "../utils/getParams.ts";

export default async (ctx: Context) => {
  const { request, response } = ctx;
  const { title } = getParams(request.url.search);
  const data = await request.body().value;
  await updateBook(title, data);
  response.body = { msg: "Book updated" };
};
