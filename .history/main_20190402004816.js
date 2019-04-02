var request = require('request');
var cheerio = require('cheerio');

/**
 *  Função responsável por criar um arquivo de dados de um site.
 *
 * @param {*} url - O site que deseja pegar os dados
 * @param {*} classecomponente - A class do tratamento
 * @param {*} componente
 * @param {*} elemento
 */
function pegandoDados(url, classecomponente, componente, elemento){
    
    request(url, function(err , res, body){
        if(err) console.log('Erro' + err);

        var $ = cheerio.load(body);

        $(`${classecomponente} ${componente}`).each(function(){
            var exibirelemento = $(this).find(`${elemento}`).text().trim();
            console.log(exibirelemento);
        })
        
    })
}

pegandoDados('https://yayanimes.net/','.ep','li','.nome-thumb a');
