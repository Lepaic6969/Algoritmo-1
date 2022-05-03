const razas=["Enanos","Elfos","Humanos","Orcos","Huargos"];
const cantidadMuertos=[];
let porcentajes=[];
let dato=0; // Este es el dato que le pedimos al usuario y que se va a ir almacenando.
let maximo=0;
let minimo=0;



//Retorna null si el dato es inválido y retorna el dato casteado si es correcto.
const validarDato=(dato)=>{
    if(dato===""){
        alert("No ha ingresado el dato");
        return null;
    }
    dato=Number(dato);
    if(isNaN(dato)){
        alert("El dato ingresado no es numérico, verifique e intente nuevamente.");
        return null;
    }
    if(dato<0){
        alert("Es ilógico que el total de muertos sea negativo, verifica y vualve a intentarlo");
        return null;
    }
    
    return dato;

}


//Aquí vienen las funciones solicitadas por el ejercício.
const devolverNombre=(codigoRaza)=>razas[codigoRaza];

const masMuertos=(arr)=>{
    maximo=Math.max(...arr);
    return devolverNombre(arr.indexOf(maximo));
}
const menosMuertos=(arr)=>{
    minimo=Math.min(...arr);
    return devolverNombre(arr.indexOf(minimo));
}


//Método que me calcula le total de muertos
const totalMuertos=(arr)=>{
    let contadorMuertos=0;
    arr.forEach(element => {
        contadorMuertos+=element;
    });
    return contadorMuertos;
}

//Método que me calcula el porcentaje de muertos en cada raza.
const porcentajeMuertos=(arr)=>{
   porcentajes=arr.map(element=>element*100/totalMuertos(arr));
}

for(let i=0;i<razas.length;i++){
    dato=prompt(`Ingrese la cantidad de muertos de los ${razas[i]}`);
    dato=validarDato(dato);

    if(dato===null){
        i--;  //Para que se repita nuevamente la iteración.
    }else{
        cantidadMuertos.push(dato);
    }
    
}

porcentajeMuertos(cantidadMuertos);
let resultadoFinal=`
Resultados de la Batalla...
El total de muertos en el combate es de: ${totalMuertos(cantidadMuertos)}, repartidos así:
Enanos: ${porcentajes[0].toFixed(2)}%
Elfos: ${porcentajes[1].toFixed(2)}%
Humanos: ${porcentajes[2].toFixed(2)}%
Orcos: ${porcentajes[3].toFixed(2)}%
Huargos: ${porcentajes[4].toFixed(2)}%

La raza con más muertos es: ${masMuertos(cantidadMuertos)}.
La raza con menos muertos es : ${menosMuertos(cantidadMuertos)}.

`;

alert(resultadoFinal);
// console.log(cantidadMuertos);
// console.log(masMuertos(cantidadMuertos));
// console.log(menosMuertos(cantidadMuertos));


