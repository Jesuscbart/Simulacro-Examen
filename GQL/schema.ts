export const typeDefs = `#graphql

type Character {                # Tipo de dato Character
    id: ID!
    name: String!
    episode: [Episode!]!
}

type Episode {                  # Tipo de dato Episode
    id: ID!
    name: String!
    characters: [Character!]!
}

type Query {
    character(id: ID!): Character               # Personaje según ID
    characterByID(IDs: [ID!]!): [Character]     # Array de personajes según sus IDs
}

`;