function calcularEsquinas(lat, long, rad){
    let latitudDiferencia = rad / 111111;
    let longitudDiferencia = rad / (111111 * Math.cos(lat * (Math.PI / 180)));

    let esquinaSuperiorIzquierda = {
        latitude: lat + latitudDiferencia,
        longitude: long - longitudDiferencia,
    };

    let esquinaSuperiorDerecha = {
        latitude: lat + latitudDiferencia,
        longitude: long + longitudDiferencia,
    };

    let esquinaInferiorIzquierda = {
        latitude: lat - latitudDiferencia,
        longitude: long - longitudDiferencia,
    };

    let esquinaInferiorDerecha = {
        latitude: lat - latitudDiferencia,
        longitude: long + longitudDiferencia,
    };

    return {
        esquinaSuperiorIzquierda,
        esquinaSuperiorDerecha,
        esquinaInferiorDerecha,
        esquinaInferiorIzquierda,
    };
}

let args = process.argv.slice(2);

if (args.length !== 3) {
  console.log('Se requieren 3 valores: latitud, longitud y radio');
  process.exit(1);
}

let lat = parseFloat(args[0]);
let lon = parseFloat(args[1]);
let rad = parseFloat(args[2]);

// let lat = -12.0700045
// let lon = -77.064618
// let rad = 100;

let esquinas = calcularEsquinas(lat, lon, rad);

console.log(esquinas);