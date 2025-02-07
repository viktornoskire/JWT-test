import express from "express";

const app = express();

const USERNAME = "admin";
const PASSWORD = "secret";

app.post("/api/login", async (req, res) => {
});

app.get("/api/protected", async (req, res) => {
});

app.use("/", express.static("./static"));

app.listen(5080);