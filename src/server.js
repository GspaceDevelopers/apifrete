const express = require("express");
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());


require(".").default(app);

app.listen(process.env.PORT || 5050, () => {
  console.log("Server started on port 5050!");
});
// GPqepPrAbWYrl4ec
