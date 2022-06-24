import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4setwew20ve01z14y8d0lcj/master",
  cache: new InMemoryCache()
})