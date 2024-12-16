import { configure } from "mobx";
import ButtonControls from "./ButtonControls";
import AutoCompleteControls from "./AutoCompleteControls";

import "./App.scss";
import styles from "./App.module.scss";

export default function App() {
  return (
    <div className={styles.app}>
      <div className={styles.section}>
        <h1 className={styles.title}>Контрол с кнопками</h1>
        <ButtonControls />
      </div>

      <div className={styles.section}>
        <h1 className={styles.title}>Контрол-автокомплит</h1>
        <AutoCompleteControls />
      </div>
    </div>
  );
}
export { App };

configure({
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
  disableErrorBoundaries: true,
  enforceActions: "always",
});
