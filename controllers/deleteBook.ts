import { Context } from "../deps.ts";
import { deleteBook } from "../services/books.ts";
import getParams from "../utils/getParams.ts";

export default async (ctx: Context) => {
  const { request, response } = ctx;
  const { title } = getParams(request.url.search);
  await deleteBook(title);
  response.body = { msg: "Book deleted" };
};
