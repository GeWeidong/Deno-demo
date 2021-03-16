import { Router } from "./deps.ts";

import getBooks from "./controllers/getBooks.ts";
import getBookDetails from "./controllers/getBookDetails.ts";
import createBooks from "./controllers/createBooks.ts";
import updateBook from "./controllers/updateBook.ts";
import deleteBook from "./controllers/deleteBook.ts";

const router = new Router();

router
  .get("/checkHealth", (ctx) => {
    ctx.response.body = "Hello World!!!!";
  })
  .get("/books", getBooks)
  .post("/books", createBooks)
  .get("/books/getBookDetails", getBookDetails)
  .put("/books/updateBook", updateBook)
  .delete("/books/deleteBook", deleteBook);

export default router;
