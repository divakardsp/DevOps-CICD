import "dotenv/config";
import express from "express";
import router from "./route.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
    res.json({
        message:
            "Server is healthy! v4: Github Actions: hurray checking for PR REVIEW APP checking again UPDATED AGAIN!!!!",
    });
});

app.get("/health", (req, res) => {
    res.json({ healthy: true });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
