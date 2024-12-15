import { configure } from "mobx";
import FirstControl from "./FirstControl";
import SecondControl from "./SecondControl";
import ThirdControl from "./ThirdControl";
import FourthControl from "./FourthControl";

import "./App.scss";
import styles from "./App.module.scss";

export default function App() {
  return (
    <div className={styles.app}>
      <div className={styles.controls}>
        <h1>Контрол с кнопками</h1>
        <FirstControl />
        <SecondControl />
      </div>
      <div className={styles.controls}>
        <h1>Контрол-автокомплит</h1>
        <ThirdControl />
        <FourthControl />
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
