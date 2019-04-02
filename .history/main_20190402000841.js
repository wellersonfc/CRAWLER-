var request = require('request');
var cheerio = require('cheerio');
var url; 

function pegandoDados(url){
    request(url, function(err , res, body){
        if(err) console.log('Erro' + err);
    })
}