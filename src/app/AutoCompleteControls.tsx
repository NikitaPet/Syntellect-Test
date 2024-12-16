import AutoCompleteControl from "controls/AutoCompleteControl";

import styles from "./App.module.scss";

export default function AutoCompleteControls() {
  return (
    <div className={styles["autocomplete-controls"]}>
      <FirstControl />
      <SecondControl />
    </div>
  );
}
export { AutoCompleteControls };

function FirstControl() {
  return (
    <AutoCompleteControl title="Контрол с 3 подсказками" maxHintsNumber={3} />
  );
}

function SecondControl() {
  return (
    <AutoCompleteControl title="Контрол с 10 подсказками" maxHintsNumber={10} />
  );
}
