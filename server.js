const express = require("express");
const morgan = require("morgan");
const prisma = require("./prisma");
const playersRouter = require("./api/players");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/players", playersRouter);

app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Server Error" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
