import mongoose from "mongoose"

const Schema = mongoose.Schema

const skillSchema = new Schema ({
    type: String,
    proficient: Boolean,
})

const Skill = mongoose.model("Skill", skillSchema)

export {
    Skill
}