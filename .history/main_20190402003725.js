var request = require('request');
var cheerio = require('cheerio');
var url; 
/**
 *Function responsavel por criar um get de dados de um site.
 *
 * @param {*} url
 * @param {*} classecomponente
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
