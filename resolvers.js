/**
 * @readonly
 * @enum {String}
 */
const Gender = {
    MALE: "MALE",
    FEMALE: "FEMALE",
    OTHER: "OTHER"
}

/**
 * @typedef {Object} Friend
 * @property {String} firstName
 * @property {String} lastName
 * @property {Gender} gender
 * @property {Number} age
 * @property {String} language
 * @property {String} email
 */
const friendFactory = {
    /**
     * @param {String} id
     * @param {Friend} obj
     * @returns {Friend}
     */
    create: function create(
        id,
        { firstName, lastName, gender, age, language, email }
    ) {
        return Object.freeze(
            Object.assign(Object.create(null), {
                id,
                firstName,
                lastName,
                gender,
                age,
                language,
                email,
            })
        );
    },
};

/**
 * @type {Object}
 * @property {Friend} [any]
 */
const friendDatabase = {};

/**
 * @param {Object} obj
 * @param {Friend} obj.input
 */
const createFriend = function createFriend({ input }) {
    let id = require("crypto").randomBytes(10).toString("hex");
    friendDatabase[id] = input;
    return friendFactory.create(id, input);
};

/**
 * @param {Object} obj
 * @param {String} obj.id
 * @returns {Friend}
 */
const getFriend = function getFriend({ id }) {
    return friendFactory.create(id, friendDatabase[id]);
};

const resolvers = {
    getFriend,
    createFriend,
};

export default resolvers;
