import { Friends, Aliens } from "./dbConnectors";

/**
 * @readonly
 * @enum {String}
 */
const Gender = {
    MALE: "MALE",
    FEMALE: "FEMALE",
    OTHER: "OTHER",
};

/**
 * @typedef {Object} Contact
 * @property {String} firstName
 * @property {String} lastName
 */

/**
 * @typedef {Object} Friend
 * @property {String} id
 * @property {String} firstName
 * @property {String} lastName
 * @property {Gender} gender
 * @property {Number} age
 * @property {String} language
 * @property {String} email
 * @property {Array<Contact>} contacts
 */


/**
 * @param {Object} root
 * @param {Object} obj
 * @param {Friend} obj.input
 * @returns {Promise<any>}
 */
const createFriend = function createFriend(root, { input }) {
    const newFriend = new Friends({
        ...input,
    });

    newFriend.id = newFriend._id;

    return new Promise((resolve, reject) => {
        newFriend.save((err) => {
            if (err) {
                reject(err);
            } else {
                resolve(newFriend);
            }
        });
    });
};

/**
 * @param {Object} root
 * @param {Object} obj
 * @param {Friend} obj.input
 * @returns {Promise<any>}
 */
const updateFriend = function updateFriend(root, { input }) {
    return new Promise((resolve, reject) => {
        Friends.findOneAndUpdate(
            { _id: input.id },
            input,
            { new: true },
            (err, updated) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(updated);
                }
            }
        );
    });
};

/**
 * @param {Object} root
 * @param {Object} obj
 * @param {String} obj.id
 * @returns {Promise<String>}
 */
const deleteFriend = function deleteFriend(root, { id }) {
    return new Promise((resolve, reject) => {
        Friends.deleteOne({ _id: id }, (err) => {
            err ? reject(err) : resolve(`deleted friend ${id}`);
        });
    });
};

/**
 * @param {Object} root
 * @param {Object} obj
 * @param {String} obj.id
 * @returns {Promise<any>}
 */
const getOneFriend = function getFriend(root, { id }) {
    console.log(`getFriend: ${id}`);
    return new Promise((resolve, reject) => {
        Friends.findOne({ _id: id }, (err, friend) => {
            if (err) {
                reject(err);
            } else {
                resolve(friend);
            }
        });
    });
};

const getAliens = function getAliens() {
    return Aliens.findAll();
};

const resolvers = {
    Query: {
        getOneFriend,
        getAliens,
    },
    Mutation: {
        createFriend,
        updateFriend,
        deleteFriend,
    },
};

export { resolvers };
