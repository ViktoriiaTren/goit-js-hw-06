class Storage {
  #items; // Приватна властивість

  constructor(initialItems) {
    this.#items = initialItems; // Ініціалізація приватної властивості
  }

  getItems() {
    return this.#items; // Повертає поточні товари
  }

  addItem(newItem) {
    this.#items.push(newItem); // Додає новий товар
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove); // Видаляє товар
  }
}

// Код для перевірки коректності роботи
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
