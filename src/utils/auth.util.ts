import { ResolverContext } from "./../libs/apolloClient";
import { NextPageContext } from "next";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import { ACCESS_TOKEN_NAME } from "../constants";

export const setAuthToken = (token: string, ctx?: NextPageContext) => {
  setCookie(ctx, ACCESS_TOKEN_NAME, token, {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });
};

export const getAuthToken = (ctx?: ResolverContext) => {
  return parseCookies(ctx)[ACCESS_TOKEN_NAME];
};

export const destroyAuthToken = (ctx?: ResolverContext) => {
  destroyCookie(ctx, ACCESS_TOKEN_NAME);
};
