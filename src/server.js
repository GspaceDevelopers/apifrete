const express = require("express");
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
// app.use((req, res, next) => {
//   // app.use(
//   //   cors({
//   //     origin: "*",
//   //     headers: "Access-Control-Allow-Origin",
//   //   })
//   // );
//   next();
// });

require(".").default(app);

app.listen(process.env.PORT || 5050)
// GPqepPrAbWYrl4ec
