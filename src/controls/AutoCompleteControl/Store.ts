import { makeObservable, observable } from "mobx";
import { CountryInfo, getCountryByName } from "api/apiService";

export default class Store {
  value: Value;
  maxHintsNumber: number;
  hints: Hints;
  areHintsShown: boolean;

  constructor(maxHintsNumber: number, defaultValue = "") {
    this.value = defaultValue;
    this.maxHintsNumber = maxHintsNumber > 0 ? Math.trunc(maxHintsNumber) : 1;
    this.hints = [];
    this.areHintsShown = false;

    makeObservable(this, {
      value: observable,
      hints: observable,
      areHintsShown: observable,
    });
  }

  setValue(value: Value): void {
    this.value = value;
  }

  async updateHints(value: Value): Promise<CountryInfo[]> {
    const countriesList: CountryInfo[] = await getCountryByName(value);
    const limitCountriesList = countriesList.slice(0, this.maxHintsNumber);
    this.hints = limitCountriesList;
    return limitCountriesList;
  }

  showHints(): void {
    this.areHintsShown = true;
  }

  hideHints(): void {
    this.areHintsShown = false;
  }
}
export { Store };

type Value = string;
type Hints = CountryInfo[];
