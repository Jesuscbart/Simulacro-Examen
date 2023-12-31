import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Query } from "./resolvers/Query.ts";
import { Character } from "./resolvers/Character.ts"
import { Episode } from "./resolvers/Episode.ts";
import { typeDefs } from "./GQL/schema.ts";

const server = new ApolloServer({   // Se crea el servidor
  typeDefs,
  resolvers: {
    Query,
    Character,
    Episode
  }
});

const { url } = await startStandaloneServer(server);    // Se inicia el servidor
console.info(`Server ready at: ${url}`);                // Se imprime la URL del servidor