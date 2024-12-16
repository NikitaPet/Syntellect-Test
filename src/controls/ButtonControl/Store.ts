import { makeObservable, observable } from "mobx";

export default class Store {
  value: string;

  constructor(defaultValue = "") {
    this.value = defaultValue;

    makeObservable(this, {
      value: observable,
    });
  }

  setValue(value: string): void {
    this.value = value;
  }

  clearValue(): void {
    this.value = "";
  }
}
export { Store };
