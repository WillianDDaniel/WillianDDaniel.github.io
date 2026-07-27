import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("pages/Home/index.tsx", { id: "home-default" }),
  route(":lang", "pages/Home/index.tsx", { id: "home-lang" }),
] satisfies RouteConfig;
