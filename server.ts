import {load} from "https://deno.land/x/denv/mod.ts";
import { Application, green, yellow } from "./deps.ts";
import router from "./router.ts";
import errorMiddleware from "./middlewares/error.ts";

// await load()

const APP_NAME = Deno.env.get("APP_NAME") || "oak";
const APP_HOST = Deno.env.get("APP_HOST") || "127.0.0.1";

// 初始化
const app = new Application();

app.use(errorMiddleware);
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({ secure, hostname, port }) => {
  const protocol = secure ? "https://" : "http://";
  const url = `${protocol}${hostname ?? "localhost"}:${port}`;
  console.log(
    `${yellow("Listening on:")} ${green(url)}`,
  );
});

await app.listen({ port: 1998 });
