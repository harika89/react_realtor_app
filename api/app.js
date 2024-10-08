import express from "express";
import postRoutes from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoute);

app.listen(8800, () =>{
    console.log("server is running on http://localhost:8800");
}

);