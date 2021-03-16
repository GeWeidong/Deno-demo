import { Context } from "../deps.ts";
import { getBooks } from "../services/books.ts";

export default async (ctx: Context) => {
  const { response } = ctx;
  const result = await getBooks();
  response.body = result;
};
