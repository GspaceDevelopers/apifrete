import cors from "cors";
export default (app) => {
  app.use("/cep", require("./routes/cep"));
  app.use("/frete", require("./routes/frete"));
  app.use(cors("Access-Control-Allow-Origin"));
};
