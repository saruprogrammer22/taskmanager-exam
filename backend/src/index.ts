import express from "express";
import cors from 'cors'
import taskRoute from './router/TaskRoute'
const app = express();

app.use(express.json());
app.use(cors(
    {
        origin: ["http://localhost:5173"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    }
));

app.use(express.static("Public"))
app.use("/task", taskRoute)


app.listen(8088, () => {
    console.log("RUNNING");
})