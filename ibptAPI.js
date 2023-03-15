const axios = require('axios');
const querystring = require('querystring');

// Configuração da API do IBPT
const ibptApiBaseUrl = 'https://apidoni.ibpt.org.br/api/v1';
const ibptApiToken = 'SEU_TOKEN_DA_API_IBPT_AQUI';
const ibptApiCnpj = 'SEU_CNPJ_DE_CADASTRO';

//Codifica os valores para serem passasdos da forma correta
var descricaoProd = "DESCRICAO DO PRODUTO";
var valorCodificadoDescri = querystring.escape(descricaoProd);

var gtinProd = "GTIN DO PRODUTO";
var valorCodificadoSemGtin = querystring.escape(gtinProd);

// Exemplo de chamada à API para obter informações sobre os impostos de um produto
const produto = {
  descricao: valorCodificadoDescri,
  ncm: 'CODIGO NCM DO PRODUTO',
  valor: "VALOR DO PRODUTO EXEMPLO 7.80",
  uf: "SIGLA DA UF DO ESTADO DE ORIGEM",
  ex: "0",
  codigoInterno:"15274",
  unidadeMedida:"UN",
  gtin: valorCodificadoSemGtin
};

axios.get(`${ibptApiBaseUrl}/produtos?token=${ibptApiToken}&cnpj=${ibptApiCnpj}&codigo=${produto.ncm}&uf=${produto.uf}&ex=${produto.ex}&codigoInterno=${produto.codigoInterno}&descricao=${produto.descricao}&unidadeMedida=${produto.unidadeMedida}&valor=${produto.valor}&gtin=${produto.gtin}`)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
