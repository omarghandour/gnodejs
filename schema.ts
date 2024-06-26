export const typeDefs = `#graphql
type Game {
    id: ID!
    title: String!
    platform: [String!]!
}

type Review {
    id: ID!,
    rating: Int!
    content: String!
}
type Author {
    id: ID!
    name: String!
    Verified: Boolean!
}

type Query {
    reviews: [Review]
    games: [Game]
    authors: [Author]
}
`;
