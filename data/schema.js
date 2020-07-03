import { resolvers } from "./resolvers";
import { makeExecutableSchema } from "graphql-tools";
import gql from "graphql-tag";

const typeDefs = gql`
    """
    A friend
    """
    type Friend {
        id: ID
        """
        First Name
        """
        firstName: String
        """
        Last Name
        """
        lastName: String
        """
        Gender - MALE | FEMALE | OTHER
        """
        gender: Gender
        age: Int
        language: String
        email: String
        """
        Zero or more Contact objects
        """
        contacts: [Contact]
    }

    """
    Alien
    """
    type Alien {
        id: ID
        """
        First Name
        """
        firstName: String
        """
        Last Name
        """
        lastName: String
        """
        Planet of origin
        """
        planet: String
    }

    """
    Contact
    """
    type Contact {
        """
        First Name
        """
        firstName: String
        """
        Last Name
        """
        lastName: String
    }

    enum Gender {
        MALE
        FEMALE
        OTHER
    }

    """
    Queries
    """
    type Query {
        """
        Gets one friend by id.
        """
        getOneFriend(id: ID) : Friend
        """
        Gets all aliens.
        """
        getAliens: [Alien]
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
        updateFriend(input: FriendInput) : Friend
        deleteFriend(id: ID!) : String
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
