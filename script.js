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
    let resultadoIndiceMasaCorporalCalculadoConPesoYAltura = peso / (altura * altura); //es la formula para hallar el imc
    bmi = resultadoIndiceMasaCorporalCalculadoConPesoYAltura;

    let valorIndiceMasaCorporalRedondeadoDosDecimales = Math.round(bmi * 100) / 100; // se utiliza para mostras solo dos decimales  
    console.log("Tu índice de masa corporal (IMC) es: " + valorIndiceMasaCorporalRedondeadoDosDecimales);
  } else {
    console.log("No se puede calcular el índice de masa corporal (IMC). Asegúrate de haber ingresado peso y altura válidos.");
  }
      break;

    case "4":
     if (!isNaN(peso)) {
    console.log("Peso ingresado por el usuario en kilogramos: " + peso);
  } else {
    console.log("El peso aún no ha sido ingresado o es inválido.");
  }

  if (!isNaN(altura)) {
    console.log("Altura ingresada por el usuario en metros: " + altura);
  } else {
    console.log("La altura aún no ha sido ingresada o es inválida.");
  }

  if (!isNaN(bmi)) {
    let valorIndiceMasaCorporalRedondeadoDosDecimales = Math.round(bmi * 100) / 100;
    console.log("Índice de masa corporal (IMC) calculado: " + valorIndiceMasaCorporalRedondeadoDosDecimales);

    if (bmi < 18.5) {
      console.log("Clasificación según IMC: Bajo peso");
    } else if (bmi >= 18.5 && bmi < 24.9) {
      console.log("Clasificación según IMC: Peso normal"); //clasificacion bmi
    } else if (bmi >= 25 && bmi < 29.9) {
      console.log("Clasificación según IMC: Sobrepeso");
    } else {
      console.log("Clasificación según IMC: Obesidad");
    }
  } else {
    console.log("El IMC aún no ha sido calculado.");
  }
      break;

    case "5":
      console.log("Gracias por usar VidaSana.");
      
      break;

    default:
      console.log("Opción no válida. Intenta de nuevo.");
  }
}