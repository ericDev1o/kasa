import { type RouteConfig, route } from "@react-router/dev/routes";

export default [route("*?", "allroutes.tsx")] satisfies RouteConfig;
