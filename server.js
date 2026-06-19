import "dotenv/config";
import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({message: "Server is healthy! v4: Github Actions: hurray checking for PR REVIEW APP!!!!"});
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


