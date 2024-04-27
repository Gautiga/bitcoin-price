var bitcoin = document.getElementById("bit");
var ethereum = document.getElementById("ethe");
var dogecoin = document.getElementById("doge");

var settings = {
    "async" : true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function(response){
  bitcoin.innerHTML = response.bitcoin.usd;
  ethereum.innerHTML = response.ethereum.usd;
  dogecoin.innerHTML = response.dogecoin.usd;
}, 1000);


