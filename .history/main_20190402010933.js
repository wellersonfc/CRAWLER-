var request = require('request');
var cheerio = require('cheerio');

/**
 *  Função responsável por criar um arquivo de dados de um site.
 *
 * @param {*} url - O site que deseja pegar os dados
 * @param {*} classecomponente - A class do tratamento
 * @param {*} componente - O componente html (Lista)
 * @param {*} elemento - O elemento  Html  (Raiz)
 */
function pegandoDados(url, classecomponente, componente, elemento){
    
    //Rquisição GET 
    request(url, function(err , res, body){
        
        //Verificando Erro
        if(err) console.log('Erro' + err);
        
        //Pegando o corpo do e-mail
        var $ = cheerio.load(body);
        
        //Each de todos os dados
        $(`${classecomponente} ${componente}`).each(function(){

            //Recebendo o dados daquele elemento
            var exibirelemento = $(this).find(`${elemento}`).text().trim();

            //Mostrar os elementos selecionados
            console.log(exibirelemento);
        })
        
    })
}

//Testando a função do crawler 
pegandoDados('https://yayanimes.net/','.ep','li','.nome-thumb a');
