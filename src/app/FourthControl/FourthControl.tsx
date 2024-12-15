import AutocompleteControl from "controls/AutocompleteControl";
import { ControlStore } from "controls/AutocompleteControl";
import { ControlledInput, ControlButton } from "controls/AutocompleteControl";

export default function SecondControl() {
  const controlStore = new Store();
  return (
    <AutocompleteControl title="Контрол с 1 кнопкой справа и 1 кнопкой слева">
      <ControlButton onClick={() => controlStore.alertNumberValue()}>
        Вывод только числового значения
      </ControlButton>

      <ControlledInput store={controlStore} />

      <ControlButton onClick={() => controlStore.alertValue()}>
        Вывод значения
      </ControlButton>
    </AutocompleteControl>
  );
}
export { SecondControl };

const Store = class extends ControlStore {
  constructor(defaultValue = "") {
    super(defaultValue);
  }

  alertValue(): void {
    alert(this.value);
  }

  alertNumberValue(): void {
    if (!isNaN(+this.value)) this.alertValue();
  }
};
