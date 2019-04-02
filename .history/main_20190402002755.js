var request = require('request');
var cheerio = require('cheerio');
var url; 

console.log('to aqui');

function pegandoDados(url, classecomponente, componente, elemento){
    
    request(url, function(err , res, body){
        if(err) console.log('Erro' + err);

        var $ = cheerio.load(body);

        $(`'${classecomponente} ${componente}'`).each(function(){
            var exibirelemento = $(this).find(`${elemento}`).text().trim();
        })
        
    })
}

pegandoDados('https://yayanimes.net/','.ep','li');
