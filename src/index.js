const express = require("express");
const bodyParser = require("body-parser");
import {
  calcularPrecoPrazo,
} from 'correios-brasil';
import cors from 'cors'

const app = express();
app.use(bodyParser.json());
app.use(cors())
app.post("/frete", (req, res) => {

  const { ceporigem, cepdestino,altura,largura,comprimento,peso,diametro,formato } = req.body
  let args = {
    // Não se preocupe com a formatação dos valores de entrada do cep, qualquer uma será válida (ex: 21770-200, 21770 200, 21asa!770@###200 e etc),
    sCepOrigem: ceporigem,
    sCepDestino: cepdestino,
    nVlPeso:peso,
    nCdFormato: formato,
    nVlComprimento: comprimento,
    nVlAltura: altura,
    nVlLargura: largura,
    nCdServico: ['04014', '04510'], //Array com os códigos de serviço
    nVlDiametro: diametro,
  };

  calcularPrecoPrazo(args).then(response => {
    console.log(response);

    return res.json(response)
  });

})
app.listen(process.env.PORT);
