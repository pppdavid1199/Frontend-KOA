void main() {
  print(getVowels("barack"));
  print(getConsonants("almakörte"));
  print(getFirstChar("körtelé"));
  print(getLastChar("körtefa"));
}

String getVowels(String szo) {
  String words = "";
  for (int i = 0; i < szo.length; i++) {
    if (szo[i].contains("a") ||
        szo[i].contains("e") ||
        szo[i].contains("i") ||
        szo[i].contains("o") ||
        szo[i].contains("u")) {
      words += szo[i];
    }
  }
  return words;
}

String getConsonants(String szo) {
  String words = "";
  for (int i = 0; i < szo.length; i++) {
    if (szo[i].contains("b") ||
        szo[i].contains("c") ||
        szo[i].contains("d") ||
        szo[i].contains("f") ||
        szo[i].contains("g") ||
        szo[i].contains("h") ||
        szo[i].contains("j") ||
        szo[i].contains("k") ||
        szo[i].contains("l") ||
        szo[i].contains("m") ||
        szo[i].contains("n") ||
        szo[i].contains("p") ||
        szo[i].contains("q") ||
        szo[i].contains("r") ||
        szo[i].contains("s") ||
        szo[i].contains("t") ||
        szo[i].contains("v") ||
        szo[i].contains("w") ||
        szo[i].contains("x") ||
        szo[i].contains("y") ||
        szo[i].contains("z")) {
      words += szo[i];
    }
  }
  return words;
}

String getFirstChar(String szo) {
  if (szo.isNotEmpty) {
    return szo[0];
  } else {
    return '';
  }
}

String getLastChar(String szo) {
  if (szo.isEmpty) {
    return "";
  } else {
    return szo[szo.length-1];
  }
}
