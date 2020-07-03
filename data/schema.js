import { resolvers } from "./resolvers";
import { makeExecutableSchema } from "graphql-tools";
// import graphql from "graphql";

// const contactType = new graphql.GraphQLObjectType({
//     name: "Contact",
//     fields: {
//         firstName: { type: graphql.GraphQLString },
//         lastName: { type: graphql.GraphQLString },
//     },
// });

// const genderType = new graphql.GraphQLEnumType({
//     name: "Gender",
//     values: {
//         MALE: { value: "MALE" },
//         FEMALE: { value: "FEMALE" },
//         OTHER: { value: "OTHER" },
//     },
// });

// const friendType = new graphql.GraphQLObjectType({
//     name: "Friend",
//     fields: {
//         id: { type: graphql.GraphQLID },
//         firstName: { type: graphql.GraphQLString },
//         lastName: { type: graphql.GraphQLString },
//         gender: { type: genderType },
//         age: { type: graphql.GraphQLInt },
//         language: { type: graphql.GraphQLString },
//         email: { type: graphql.GraphQLString },
//         contacts: { type: new graphql.GraphQLList(contactType) },
//     },
// });

// const queryType = new graphql.GraphQLObjectType({
//     name: "Query",
//     fields: {
//         getFriend: {
//             type: friendType,
//             args: {
//                 id: { type: graphql.GraphQLID },
//             },
//             resolve: resolvers.Query.getFriend,
//         },
//     },
// });

const typeDefs = `
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        age: Int
        language: String
        email: String
        contacts: [Contact]
    }

    type Contact {
        firstName: String
        lastName: String
    }

    enum Gender {
        MALE
        FEMALE
        OTHER
    }

    type Query {
        getFriend(id: ID) : Friend
    }

    input FriendInput {
        id: ID
        firstName: String!
        lastName: String
        gender: Gender
        age: Int
        language: String
        email: String 
        contacts: [ContactInput]
    }

    input ContactInput {
        firstName: String
        lastName: String
    }

    type Mutation {
        createFriend(input: FriendInput) : Friend
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
