const express = require("express");
const feedbackRouter = require("./routes/feedback.routes");
const corsMiddleware = require("./middleware/middleware");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use("/api", feedbackRouter);

app.listen(PORT, () => console.log(`Server started on - ${PORT}`));
