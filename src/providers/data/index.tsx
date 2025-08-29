import graphqlDataProvider, {
  GraphQLClient,
  liveProvider as graphqlLiveProvider,
} from "@refinedev/nestjs-query";

import { createClient } from "graphql-ws";

import { fetchWrapper } from "./fetch-wrapper";

export const API_BASE_URL = "https://api.crm.refine.dev";
export const API_URL = `${API_BASE_URL}/graphql`; //Full URL for GraphQL HTTP requests
export const WS_URL = "wss://api.crm.refine.dev/graphql"; //WebSocket URL for GraphQL subscriptions


//GraphQL Client instance to send GraphQL queries/mutations
export const client = new GraphQLClient(API_URL, {
  fetch: (url: string, options: RequestInit) => {
    try {
      return fetchWrapper(url, options); //If fetchWrapper works → it returns the request.If it fails → it rejects the Promise with an error


    } catch (error) {
      return Promise.reject(error as Error);
    }
  },
});

export const wsClient =
  typeof window !== "undefined"
    ? createClient({
        url: WS_URL,
        connectionParams: () => {
          const accessToken = localStorage.getItem("access_token");

          return {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          };
        },
      })
    : undefined;

export const dataProvider = graphqlDataProvider(client);

export const liveProvider = wsClient
  ? graphqlLiveProvider(wsClient)
  : undefined;