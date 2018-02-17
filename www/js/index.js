document.addEventListener("deviceready", onDeviceReady, false); 


function onDeviceReady() {

//alert('teste');
/*
var conn = navigator.connection.type;
if( conn == 'none' || conn == 'NONE' ){ //conn

alert('O aplicativo nao detectou conexao com internet.');

} else {

document.getElementById('conectando').style.display = 'none';
//cordova.InAppBrowser.open(encodeURI('http://fazerja.com.br/site/index.php?app=s'), '_self', 'location=no,hidden=no');
}


document.getElementById('fechar').style.display = 'block';
*/

atualizarNew();

}



function fechar(){
navigator.app.exitApp();
}





function atualizarNew(){


var conn = navigator.connection.type;
if( conn == 'none' || conn == 'NONE' ){ //conn

alert('O aplicativo nao detectou conexao com internet.');

} else {

var urlBrow = 'http://fazerja.com.br/site/index.php?app=s&tapp=i';
//alert( 'urlBrow: ' + urlBrow );
cordova.InAppBrowser.open(encodeURI( urlBrow ), '_self', 'location=no,hidden=no');

}



}
	






function atualizar(){


var conn = navigator.connection.type;
if( conn == 'none' || conn == 'NONE' ){ //conn

alert('O aplicativo nao detectou conexao com internet.');

} else {
//cordova.InAppBrowser.open(encodeURI('http://fazerja.com.br/site/index.php?app=s'), '_self', 'location=no,hidden=no');

var altTela = parseInt( screen.height ) ;
if( altTela != '' && altTela != 'undefined'  && altTela != 0 ){
//alert(altTela);
document.getElementById("ifrBrowser").style.height = altTela - 70 +"px";
}

var urlBrow = 'http://fazerja.com.br/site/index.php?app=s';
//alert( 'urlBrow: ' + urlBrow );
ifrBrowser.location.href =  urlBrow;

}



}
	   

