//Obtenemos un numero ramdom y agregamos un valor maximo de 10 y un minimo de 1
let numeroMaquina = Math.floor(Math.random() * (10 - 1)) + 1;
console.log(numeroMaquina);

//Asignamos la cantidad de vidas
let vidas = 3

//Obtenemos el numero del jugador
let numeroUsuario = parseInt(prompt('Adivine el numero del 1 al 10'));


while(numeroMaquina !== numeroUsuario && vidas > 1){

  let mensaje = (numeroMaquina > numeroUsuario) ? 'El numero Random es mayor' : 'El numero Random es menor';

  console.log('Te equivocaste'+' tines: '+ vidas +' vidas. '+mensaje );
  numeroUsuario = parseInt(prompt('Numero del 1 al 10'));
  vidas--;
}


//Evaluamos si el numero de la maquina es igual al del usuario
if(numeroMaquina === numeroUsuario){
  console.log("Ganaste :)")
} else{
  console.log("Perdiste :( el numero era: "+numeroMaquina);
}