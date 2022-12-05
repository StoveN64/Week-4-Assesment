const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());


const { getCompliment, getFortune, getCharacter, addCharacter, deleteCharacter, updateCharacter} = require('./controller')


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.get("/api/character", getCharacter)
app.post("/api/newcharacter", addCharacter)
// app.get("/api/picture", getSauron)
app.delete("/api/character/:id", deleteCharacter)
app.put("/api/character:id", updateCharacter)
app.listen(4000, () => console.log("Server running on 4000"));