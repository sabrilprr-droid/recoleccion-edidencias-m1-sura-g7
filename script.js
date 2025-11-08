let peso = NaN;       // Almacena el peso del usuario
let altura = NaN;     // Almacena la altura del usuario
let bmi = NaN;        // Almacena el indice de masa corporal
let opcion = "";      // Controla la opcion seleccionada

while (opcion !== "5") {
console.log("=== MENU VIDA SANA ===\n1. Ingresar Peso\n2. Ingresar Altura\n3. Calcular BMI\n4. Interpretar Resultado\n5. Salir");

  opcion = prompt("Selecciona una opcion de 1 a 5: \n=== MENU VIDA SANA ===\n1. Ingresar Peso\n2. Ingresar Altura\n3. Calcular BMI\n4. Interpretar Resultado\n5. Salir ");

 switch (opcion) {
    case "1":
      let entradaTextoPesoIngresadoPorUsuarioEnKilogramos = prompt("Ingresa tu peso en Kg:");
  let valorNumericoPesoIngresadoPorUsuarioEnKilogramos = Number(entradaTextoPesoIngresadoPorUsuarioEnKilogramos);

  if (!isNaN(valorNumericoPesoIngresadoPorUsuarioEnKilogramos)) {
    if (valorNumericoPesoIngresadoPorUsuarioEnKilogramos > 0 && valorNumericoPesoIngresadoPorUsuarioEnKilogramos < 500) {
      peso = valorNumericoPesoIngresadoPorUsuarioEnKilogramos;
      console.log("Peso guardado correctamente.");
    } else {
      console.log("Dato inválido. El peso debe ser mayor a 0 y menor a 500.");
    }
  } else {
    console.log("Entrada inválida. Debes ingresar un número.");
  }
      break;

    case "2":
      
      break;

    case "3":
      
      break;

    case "4":
     
      break;

    case "5":
      console.log("Gracias por usar VidaSana.");
      
      break;

    default:
      console.log("Opción no válida. Intenta de nuevo.");
  }
}