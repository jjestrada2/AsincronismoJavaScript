let XMLHttpRequest=require('xmlhttprequest').XMLHttpRequest;
//creo varable donde guardo la ur de la api a donde pido informacion

 const fecthData=(url_api)=>{

    return new Promise((resolve,reject)=>{

    //creo una instancia de la clase XMLHttprequest
        const xhttp=new XMLHttpRequest();
    //utilizo el metodo open de la clase XMLHttpreuest 
        xhttp.open('GET',url_api,true);
    //utilizo otro metodo de la clase XMLHttprequest para escuchar  la coneccion de OPEN
        xhttp.onreadystatechange=(()=>{
        //hacer validacion de si mellego correctamente la informacion
            if(xhttp.readyState===4){

                    (xhttp.status==200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error '+url_api));

            }
        });

        //mando solicitd mediante el metodo send de la clase XMLHttpreques
    xhttp.send();
    
    });
}

module.exports= fecthData;
 
