// Algoritmo 1:

function encontrarPalabraLarga(str)
{
    let palabras = str.split(" ");
    // console.log(palabras);

    let miPalabraLarga = "";

    for (let palabra in palabras)
    {
        if (palabra.length > miPalabraLarga.length)
        {
            miPalabraLarga = palabra;
        }
    }

    return miPalabraLarga;
}

console.log(encontrarPalabraLarga("HOLA MICHAEL ! QUÉ BUENO QUE LO ENCUENTRO!!!!"));