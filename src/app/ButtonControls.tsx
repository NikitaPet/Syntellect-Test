import ButtonsControl, { Store } from "controls/ButtonControl";
import { ControlledInput, ControlButton } from "controls/ButtonControl";
import { type ButtonData } from "controls/ButtonControl";

import styles from "./App.module.scss";

export default function ButtonControls() {
  return (
    <div className={styles["button-controls"]}>
      <FirstControl />
      <SecondControl />
    </div>
  );
}
export { ButtonControls };

function FirstControl() {
  const store = new (class extends Store {
    setHello(): void {
      this.setValue("Hello world!");
    }
  })();

  const rightButtons: ButtonData[] = [
    { text: "Очистить поле", onClick: () => store.clearValue() },
    { text: "Hello world!", onClick: () => store.setHello() },
  ];

  return (
    <ButtonsControl
      title="Контрол с 2 кнопками справа"
      {...{ rightButtons, store }}
    />
  );
}

function SecondControl() {
  const store = new (class extends Store {
    alertValue(): void {
      alert(this.value);
    }

    alertNumberValue(): void {
      const isValueNumber = !isNaN(+this.value);
      if (!!this.value && isValueNumber) this.alertValue();
    }
  })();

  const leftButtons: ButtonData[] = [
    {
      text: "Вывод только числа",
      onClick: () => store.alertNumberValue(),
    },
  ];

  const rightButtons: ButtonData[] = [
    { text: "Вывод значения", onClick: () => store.alertValue() },
  ];

  return (
    <ButtonsControl
      title="Контрол с 1 кнопкой справа и 1 кнопкой слева"
      {...{ leftButtons, rightButtons, store }}
    />
  );
}
