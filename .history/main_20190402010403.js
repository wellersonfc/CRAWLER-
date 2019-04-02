const { pegandoDados } = require("./pegandoDados");

//Testando a função do crawler 
pegandoDados('https://yayanimes.net/','.ep','li','.nome-thumb a');
