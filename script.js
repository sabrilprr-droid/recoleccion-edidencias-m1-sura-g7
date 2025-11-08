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
        let entradaTextoAlturaIngresadaPorUsuarioEnMetros = prompt("Ingresa tu altura en metros (ejemplo: 1.75)(recuerda que es con (.)):");
  let valorNumericoAlturaIngresadaPorUsuarioEnMetros = Number(entradaTextoAlturaIngresadaPorUsuarioEnMetros);

  if (!isNaN(valorNumericoAlturaIngresadaPorUsuarioEnMetros)) {
    if (valorNumericoAlturaIngresadaPorUsuarioEnMetros > 0.5 && valorNumericoAlturaIngresadaPorUsuarioEnMetros < 3) {
      altura = valorNumericoAlturaIngresadaPorUsuarioEnMetros;
      console.log("Altura guardada correctamente.");
    } else {
      console.log("Dato inválido. La altura debe ser mayor a 0.5 y menor a 3 metros.");
    }
  } else {
    console.log("Entrada inválida. Debes ingresar un número.");
  }
      
      break;

    case "3":
      if (!isNaN(peso) && !isNaN(altura)) {
    let resultadoIndiceMasaCorporalCalculadoConPesoYAltura = peso / (altura * altura); //formula para hallar el imc
    bmi = resultadoIndiceMasaCorporalCalculadoConPesoYAltura;

    let bmiRedondeadoDosDecimales = Math.round(bmi * 100) / 100; // el math.round se utilizo para que el resultado de la operacion no diera tanto decimal
    console.log("Tu índice de masa corporal (IMC) es: " + bmiRedondeadoDosDecimales);

    if (bmi < 18.5) {
      console.log("Clasificación: Bajo peso");
    } else if (bmi >= 18.5 && bmi < 24.9) {
      console.log("Clasificación: Peso normal");
    } else if (bmi >= 25 && bmi < 29.9) {
      console.log("Clasificación: Sobrepeso");
    } else {
      console.log("Clasificación: Obesidad");
    }
  } else {
    console.log("No se puede calcular el IMC. Asegúrate de haber ingresado peso y altura válidos.");
  }
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