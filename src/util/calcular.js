export class Cacular {
  constructor(number1 = 0, number2 = 0) {
    this.number1 = number1;
    this.number2 = number2;
  }

  getMultiplicar(a, b) {
    return a * b;
  }
  getRestar(a, b) {
    return a - b;
  }
  getSumar(a, b) {
    return a + b;
  }
  getDividir(a, b) {
    return a / b;
  }

  getSigno = (cadena) => cadena.match(/[+*/-]/g);

  setCacular(signo) {
    switch (signo) {
      case "+":
        return this.getSumar(this.number1, this.number2);
      case "-":
        return this.getRestar(this.number1, this.number2);
      case "*":
        return this.getMultiplicar(this.number1, this.number2);
      case "/":
        return this.getDividir(this.number1, this.number2);
      default:
        return 0;
    }
  }
}
