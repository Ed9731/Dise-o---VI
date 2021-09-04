window.onload = function listas(){

   

    var mayor = 0;

    var menor=99999;

    var numeros = [];

    var usuario = "";

    do{
        usuario = prompt('Dime un numero o escribe "fin" para terminar');
        if(usuario!='fin'){
        numeros.push(parseInt(usuario)); 
        }
                        
    }while(usuario!='fin');

 
    //recorremos array y comprobamos cual es el mayor / menor

    for(var i=0;i<numeros.length;i++){

        if(numeros[i]>mayor){

            mayor = numeros[i];
              
        }

        if(numeros[i]<menor){

            menor = numeros[i];

        }

    

    }

    if(numeros.length>2){
        document.getElementById("numero").innerHTML="Números ingresados: " + numeros;
        document.getElementById("mayor").innerHTML="El número mayor es " + mayor;
        document.getElementById("menor").innerHTML="El número menor es " + menor;
             
        

    }else{

        alert('No hay numeros suficientes para comprobar mayor y menor');

    }

}