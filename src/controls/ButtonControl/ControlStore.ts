import { makeObservable, observable } from "mobx";

export default class ControlStore {
  value: string;

  constructor(defaultValue = "") {
    this.value = defaultValue;
    makeObservable(this, {
      value: observable,
    });
  }

  setValue = (value: string) => {
    this.value = value;
  };

  clearValue = (): void => {
    this.value = "";
  };
}
export { ControlStore };
