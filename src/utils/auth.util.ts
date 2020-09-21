import { ResolverContext } from '@graphql/apollo'
import { NextPageContext } from 'next'
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { ACCESS_TOKEN_NAME } from '@constants'

export const setAuthToken = (token: string, ctx?: NextPageContext) => {
  setCookie(ctx, ACCESS_TOKEN_NAME, token, {
    maxAge: 30 * 24 * 60 * 60,
    path: '/'
  })
}

export const getAuthToken = (ctx?: ResolverContext) => {
  return parseCookies(ctx)[ACCESS_TOKEN_NAME]
}

export const destroyAuthToken = (ctx?: ResolverContext) => {
  destroyCookie(ctx, ACCESS_TOKEN_NAME)
}
