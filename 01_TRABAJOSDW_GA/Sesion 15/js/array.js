window.onload = function(){
    var mayor = 0;
    var menor=99999;
    var numeros = [];
    //catura de datos
    for(var i=0;i<6;i++){
    numeros[i]=parseInt(prompt('Dime un numero y te indicare cual es el mayor de los seis :)')); 
    }
    //recorrer array y comprobar el número mayor

    for(var i=0;i<numeros.length;i++){

        if(numeros[i]>mayor){

            mayor = numeros[i];

        }

        if(numeros[i]<menor){

            menor = numeros[i];

        }

    }
    
    console.log('Hemos terminado de comprobar');

    console.log(`El numero mayor es ${mayor}`);

    console.log(`El numero menor es ${menor}`);

}


