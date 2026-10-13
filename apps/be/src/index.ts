import express from "express";
const app = express();
import cors from "cors";
import router from "./routes/index";

app.use(express.json());
app.use(cors({
    origin : "*"
}));

app.use("/api/v1", router);
app.get("/health", (req, res)=>{
    res.send("Good health to all");
});

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`Server running on ${port}`)
});

export default app;