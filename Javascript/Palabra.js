// Algoritmo 1:

function encontrarPalabraLarga(str)
{
    let palabras = str.split(" ");
    // console.log(palabras);

    let miPalabraLarga = "";

    for (let palabra of palabras)
    {
        if (palabra.length > miPalabraLarga.length)
        {
            miPalabraLarga = palabra;
        }
    }
    return miPalabraLarga;
 }

 console.log(encontrarPalabraLarga("HOLA MICHAEL ! QUE BUENO QUE LO ENCUENTRO!!!!"));

 // Algoritmo 2:

 function encontrarPalabraLargaNumerica(str)
 {
    let palabras = str.split(" ");

    let miPalabraLarga = "";

    for (let i = 0; i < palabras.length; i++)
    {
        if (palabras[i].length > miPalabraLarga.length)
        {
            miPalabraLarga = palabras[i];
        }
    }
    return miPalabraLarga;
 }

 console.log(encontrarPalabraLarga("HOLA MUNDO CRUEL DE 80 MIL PALABRAS!!!!"));

 // Algoritmo 3:

 function palabraMasLarga(stringInput)
 {
    let arreglo = stringInput.split(" ");
    // BASADO EN UN NÚMERO DE CARACTERES Y/O LETRAS, UTILIZAREMOS LA FUNCIÓN "sort"...

    arreglo.sort(function(a, b)
    {
        return (b.length - a.length);
    });

    // LA PARTE ANTERIOR CON "Arrow Function"
    // arreglo.sort((a, b) => b.length - a.length);
    // console.log(`La palabra más larga es: ${arreglo[0]}`);

    // PERO NO ES LA FORMA...

    console.log("La palabra más larga essss: " + arreglo[0]);
    // document.write("La palabra más larga essss: " + arreglo[0]);
 };

 palabraMasLarga("HOLA COMPLETAMENTE MI QUERIDO SEÑOR JESUCRISTO!");

 // Algoritmo 4:

 function palabraMasLarga(string)
 {
    let str = string.split(" ");
    // console.log(str);

    let contadorPalabras = 0;
    let palabra = "";
    str.forEach(function(str)
    {
        if(str.length > contadorPalabras)
        {
            contadorPalabras = str.length;
            palabra = str;
        }
    });
    return palabra;
 }

 console.log(palabraMasLarga("HOLA AQUÍ! QUÉ ES LO QUE HICISTE HOY DÍA?"));

 // Algoritmo 5:

 function queEsLargo(str1, str2)
 {
    return(str2.length > str1.length) ? str2 : str1;
 }

 function palabraMasLarga(str)
 {
    let palabras = str.split(" ");
    return palabras.reduce(queEsLargo);
 }

 console.log(palabraMasLarga("HOLA, QUERIDO AMIGO!"));

 // Algoritmo 6 (BONIFICACIÓN):

 function todasLasPalabrasLargas(str)
 {
    let palabras = str.split(" ");
    let tamano = 0;
    let max = [""];

    for (let i = 0; i < palabras.length; i++)
    {
        if (palabras[i].length >= tamano)
        {
            // console.log(palabras[i]);

            tamano = palabras[i].length;

            if (max[max.length - 1].length < palabras[i].length)
            {
                max = [];
                max.push(palabras[i]);
            }
            else 
            {
                max = [...max, palabras[i]];

            }
        }
    }

    return max;
 }

 console.log(todasLasPalabrasLargas("UN SALUDO PARA NUESTRO SEÑOR JESUCRISTO Y SU SANTOREINO !"));
 console.log(todasLasPalabrasLargas("QUE NUESTRO SEÑOR JESUCRISTO TE RECIBA EN SU SANTOREINO !"));

 // Algoritmo 6.1 (BONIFICACIÓN 2):

 function encontrarPalabraLarga(str)
 {
    let palabras = str.split(" ");
    var todasLasPalabras = [""];

    // let miPalabraLarga = "";

    for (let palabra of palabras)
    {
        if (palabra.length > todasLasPalabras[0].length)
        {
            todasLasPalabras = [palabra];
        }

        else if (palabra.length === todasLasPalabras[0].length)
        {
            todasLasPalabras.push(palabra);
        }
    }

    return todasLasPalabras;
 }

 console.log(encontrarPalabraLarga("HOLA , JESUCRISTO , QUÉ BUENO QUE TE ENCUENTRO , TORREJAIBA Y SANTOREINO !"));

 // Algoritmo 6.2 (ÚLTIMA BONIFICACIÓN):

 function encontrarPalabraLarga(str)
 {
    let palabras = str.split(" ");
    let tamanoMaximo = Math.max(...palabras.map(palabra => palabra.length));
    return palabras.filter(palabra => palabra.length === tamanoMaximo);

    // return tamanoMaximo;
 }

 console.log(encontrarPalabraLarga("HOLA , GENDARMERIA , QUÉ BUENO QUÉ LO ENCUENTRO, SEGUISMUNDO Y REPITENCIAS !"));