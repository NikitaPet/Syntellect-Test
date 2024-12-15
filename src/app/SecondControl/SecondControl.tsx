import ButtonsControl, { ControlStore } from "controls/ButtonControl";
import { ControlledInput, ControlButton } from "controls/ButtonControl";

export default function SecondControl() {
  const controlStore = new Store();
  return (
    <ButtonsControl title="Контрол с 1 кнопкой справа и 1 кнопкой слева">
      <ControlButton onClick={() => controlStore.alertNumberValue()}>
        Вывод только числового значения
      </ControlButton>

      <ControlledInput store={controlStore} />

      <ControlButton onClick={() => controlStore.alertValue()}>
        Вывод значения
      </ControlButton>
    </ButtonsControl>
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
