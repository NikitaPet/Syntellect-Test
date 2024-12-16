import { useCallback } from "react";
import { observer } from "mobx-react";
import { debounce } from "lodash";
import cn from "classnames";
import Control, { type Props as ControlProps } from "ui/Control";
import Input, { type Props as InputProps } from "ui/Input";
import Store from "./Store";

import styles from "./AutoCompleteControl.module.scss";

export default function AutoCompleteControl({
  maxHintsNumber,
  className = "",
  ...props
}: Props) {
  const store = new Store(maxHintsNumber);
  return (
    <Control
      className={cn(styles["autocomplete-control"], {
        [className]: !!className,
      })}
      {...props}
    >
      <ControlledInput store={store} />
      <CompletionList store={store} />
    </Control>
  );
}
export { AutoCompleteControl };
  
export const ControlledInput = observer(function ({
  store,
  ...props
}: ControlledInputProps) {
  const updateHints = useCallback(
    debounce((value: string) => store.updateHints(value), 1000),
    []
  );

  return (
    <Input
      value={store.value}
      onChange={({ target }) => {
        store.setValue(target.value);
        updateHints(target.value);
      }}
      onFocus={() => {
        (async () => {
          await store.updateHints(store.value);
          store.showHints();
        })();
      }}
      onBlur={() => setTimeout(() => store.hideHints(), 200)}
      className={styles["completed-input"]}
      {...props}
    />
  );
});

export const CompletionList = observer(function ({
  store,
}: CompletionListProps) {
  const list = store.hints;
  if (!(store.areHintsShown && list?.length > 0)) return null;
  return (
    <div className={styles["completion-list"]}>
      {store.hints.map((item) => (
        <div onClick={() => store.setValue(item.name)} className={styles.item}>
          <img src={item.flag} alt={item.name} className={styles.flag} />
          <div className={styles.names}>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.name}>{`(${item.fullName})`}</p>
          </div>
        </div>
      ))}
    </div>
  );
});

export type Props = ControlProps & {
  maxHintsNumber: number;
};

export type ControlledInputProps = InputProps & {
  store: Store;
};

export type CompletionListProps = { store: Store };
