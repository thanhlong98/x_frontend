import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { IncomingMessage, ServerResponse } from 'http'
import { useMemo } from 'react'
import { getAuthToken } from '@utils'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

export type ResolverContext = {
  req?: IncomingMessage
  res?: ServerResponse
}

const isServer = () => typeof window === 'undefined'

const uri: string = 'http://localhost:3000/graphql'

function createApolloClient(context?: ResolverContext) {
  const token = getAuthToken(context)

  const httpLink = new HttpLink({
    uri,
    credentials: 'include'
  })

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        'access-token': token
      }
    }
  })

  return new ApolloClient({
    ssrMode: isServer(),
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  })
}

export function initializeApollo(
  initialState: any = null,
  context?: ResolverContext
) {
  const _apolloClient = apolloClient ?? createApolloClient(context)

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState })
  }
  // For SSG and SSR always create a new Apollo Client
  if (isServer) return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
