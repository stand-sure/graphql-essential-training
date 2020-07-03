import mongoose, { connect, Schema, model } from "mongoose";
import { Sequelize, STRING } from "sequelize";
import _ from "lodash";
import casual from "casual";

mongoose.Promise = globalThis.Promise;
connect("mongodb://localhost/friends", {
    useMongoClient: true,
});

const friendSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    gender: {
        type: String,
    },
    age: {
        type: Number,
    },
    language: {
        type: String,
    },
    email: {
        type: String,
    },
    contacts: {
        type: Array,
    },
});

const Friends = model("friends", friendSchema);

const sequelize = new Sequelize("database", null, null, {
    dialect: "sqlite",
    storage: "./aliens.sqlite",
});

const Aliens = sequelize.define("aliens", {
    firstName: {
        type: STRING,
    },
    lastName: {
        type: STRING,
    },
    planet: {
        type: STRING,
    },
});

Aliens.sync({ force: true}).then(() => {
    _.times(10, (i) => {
        Aliens.create({
            firstName: casual.first_name,
            lastName: casual.last_name,
            planet: casual.word
        })
    })
});

export { Friends, Aliens };
