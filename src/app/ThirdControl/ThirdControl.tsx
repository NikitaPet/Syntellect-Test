import AutocompleteControl from "controls/AutocompleteControl";
import { ControlStore } from "controls/AutocompleteControl";
import { ControlledInput, ControlButton } from "controls/AutocompleteControl";

export default function FirstControl() {
  const controlStore = new Store();
  return (
    <AutocompleteControl title="Контрол с 2 кнопками справа">
      <ControlledInput store={controlStore} />
      <ControlButton onClick={() => controlStore.clearValue()}>
        Очистить поле
      </ControlButton>
      <ControlButton onClick={() => controlStore.setHello()}>
        Hello world!
      </ControlButton>
    </AutocompleteControl>
  );
}
export { FirstControl };

const Store = class extends ControlStore {
  constructor(defaultValue = "") {
    super(defaultValue);
  }

  setHello(): void {
    this.setValue("Hello world!");
  }
};
