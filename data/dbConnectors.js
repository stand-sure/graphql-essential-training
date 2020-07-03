import mongoose, { connect, Schema, model } from "mongoose";

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

export { Friends };
