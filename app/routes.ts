import { type RouteConfig, route } from "@react-router/dev/routes";

export default [route("*?", "../src/allroutes.tsx")] satisfies RouteConfig;
