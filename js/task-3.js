class StringBuilder {
  #value; // Приватна властивість

  constructor(initialValue) {
    this.#value = initialValue; // Ініціалізація приватної властивості
  }

  getValue() {
    return this.#value; // Повертає поточне значення
  }

  padEnd(str) {
    this.#value += str; // Додає рядок в кінець
  }

  padStart(str) {
    this.#value = str + this.#value; // Додає рядок на початок
  }

  padBoth(str) {
    this.padStart(str); // Спочатку додає на початок
    this.padEnd(str);   // Потім додає в кінець
  }
}

// Код для перевірки коректності роботи
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
