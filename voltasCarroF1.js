function voltas() {
  console.log(
    "3 Carros dão voltas em um circuito em tempos diferentes, o Carro A em 100 segundos, o carro B em 80 segundos e o carro C em 60 segundos."
  );
  console.log(
    "Quantas voltas deu o carro mais lento até os 3 carros cruzarem a linha de chegada juntos?"
  );
  let tempoCarroA = 100;
  let tempoCarroB = 80;
  let tempoCarroC = 60;

  voltas = 1;

  let a = Array(40);
  let b = Array(40);
  let c = Array(40);

  for (voltas; voltas < 41; voltas++) {
    voltaA = tempoCarroA * voltas;
    voltaB = tempoCarroB * voltas;
    voltaC = tempoCarroC * voltas;

    a[voltas] = voltaA;
    b[voltas] = voltaB;
    c[voltas] = voltaC;
  }

  for (i = 1; i < 41; i++) {
    for (y = 1; y < 41; y++) {
      if (a[i] == b[y]) {
        for (z = 1; z < 41; z++) {
          if (b[y] == c[z]) {
            console.log(
              "Tempo do carro A é: " + a[i] + " segundos e deu " + i + " voltas"
            );
            console.log(
              "Tempo do carro B é: " + b[y] + " segundos e deu " + y + " voltas"
            );
            console.log(
              "Tempo do carro C é: " + c[z] + " segundos e deu " + z + " voltas"
            );
            return;
          }
        }
      }
    }
  }
}

voltas();
