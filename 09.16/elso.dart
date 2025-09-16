import 'dart:math';

void main() {
  veletlenSzam();
}

void veletlenSzam() {
  List<int> lista = [];
  Random random = Random();
  int szam = random.nextInt(100) + 1;

  print(szam);

  if (szam % 2 == 0) {
    return print("Páros!");
  } else {
    print("Páratlan!");
  }

  for (int i = 1; i <= szam; i++) {
    if (szam % i == 0) {
      lista.add(i);
    }
  }
  print(lista);
}
