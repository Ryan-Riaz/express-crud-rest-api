import bodyParser from "body-parser";
import express from "express";
import userRouter from "./routers/userApiRoute.js";

// call the express
const app = express();

// using the port fallback
const PORT = process.env.PORT || 4242;

// use body-parser
app.use(bodyParser.json());

// our home page
app.get("/", (req, res) => {
    res.send("<h1>This is the Home Page</h1>");
});

// use the userRouter
app.use("/users", userRouter);

// start the server
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
