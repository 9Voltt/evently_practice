import mongoose, { Schema } from "mongoose";

export interface IEvent extends Document {
    _id: string;
    title: string;
    description?: string;
    place?: string;
    createdAt: Date;
    imageUrl: string;
    startDateTime: Date;
    endDateTime: Date;
    price: string;
    isFree: boolean;
    url: string;
    category: { _id: string, name: string };
    organizer: { _id: string, firstName: string, lastName: string };
}

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    place: { type: String },
    createdAt: { type: Date, required: Date.now },
    imageUrl: { type: String, required: true },
    startDateTime: { type: Date, required: Date.now },
    endDateTime: { type: Date, required: Date.now },
    price: { type: String },
    isFree: { type: Boolean, required: false },
    url: { type: String },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    organizer: { type: Schema.Types.ObjectId, ref: "User" }
});

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);

export default Event;