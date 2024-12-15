import ButtonsControl, { ControlStore } from "controls/ButtonControl";
import { ControlledInput, ControlButton } from "controls/ButtonControl";

export default function FirstControl() {
  const controlStore = new Store();
  return (
    <ButtonsControl title="Контрол с 2 кнопками справа">
      <ControlledInput store={controlStore} />

      <ControlButton onClick={() => controlStore.clearValue()}>
        Очистить поле
      </ControlButton>

      <ControlButton onClick={() => controlStore.setHello()}>
        Hello world!
      </ControlButton>
    </ButtonsControl>
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
