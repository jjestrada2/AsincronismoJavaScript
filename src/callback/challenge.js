//instalar dependencia que esta dentro de node, XMLhttp que es un objeto

let XMLHttpRequest=require('xmlhttprequest').XMLHttpRequest;
//creo varable donde guardo la ur de la api a donde pido informacion
let API='https://rickandmortyapi.com/api/character/';
 function fecthData(url_api,callback){
    //creo una instancia de la clase XMLHttprequest
    let xhttp=new XMLHttpRequest();
    //utilizo el metodo open de la clase XMLHttpreuest 
    xhttp.open('GET',url_api,true);
    //utilizo otro metodo de la clase XMLHttprequest para escuchar  la coneccion de OPEN
    xhttp.onreadystatechange=function(event){
        //hacer validacion de si mellego correctamente la informacion
        if(xhttp.readyState===4){
            //recordar status 200 es exito=)
            if(xhttp.status===200){
                //convierto la info que me vien en forma de JSON a texto plano
                callback(null,JSON.parse(xhttp.responseText))
            }else{
                //creo una instacia de la clase error para mostrar en caso de que la peticion no sea exitos
                const error= new Error('Error '+ url_api);
                return  callback(error,null);
            }
        }
    }
    //mando solicitd mediante el metodo send de la clase XMLHttpreques
    xhttp.send();
 }

 //utilizo la funcion fechdata que acabe de crear
 fecthData(API,function(error1,data1){
     if (error1) console.error(error1)
     //estoy creando la direccion url giandome con lo que vi en postaman
     fecthData(API + data1.results[0].id, function(error2,data2){
         if(error2) console.error(error2)
        
     })
 })
    