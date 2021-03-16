import { Context } from "../deps.ts";
import { getBookDetails } from "../services/books.ts";
import getParams from "../utils/getParams.ts";

export default async (ctx: Context) => {
  const { request, response } = ctx;
  const { title } = getParams(request.url.search);
  const foundBook = await getBookDetails(title);
  response.body = foundBook;
};
