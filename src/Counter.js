export class Counter {
  data = {};

  count(label = "default") {
    if (!(label in this.data)) {
      this.clear(label);
    }
    this.data[label]++;
  }

  get(label = "default") {
    if (label in this.data) {
      return this.data[label];
    }
    return undefined;
  }
  clear(label = "default") {
    this.data[label] = -1;
  }
  clearAll() {
    this.data = {};
  }
}
