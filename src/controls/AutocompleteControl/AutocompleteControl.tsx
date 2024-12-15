import { observer } from "mobx-react";
import cn from "classnames";
import Control, { type Props as ControlProps } from "ui/Control";
import Input, { type Props as InputProps } from "ui/Input";
import Button, { type Props as ButtonProps } from "ui/Button";
import ControlStore from "./ControlStore";

import styles from "./AutocompleteControl.module.scss";

export default function AutocompleteControl({
  className = "",
  children,
  ...props
}: ControlProps) {
  return (
    <Control
      className={cn(styles["buttons-control"], { [className]: !!className })}
      {...props}
    >
      {children}
    </Control>
  );
}
export { AutocompleteControl };

export const ControlledInput = observer(function ({
  store,
  ...props
}: ControlledInputProps) {
  return (
    <Input
      value={store.value}
      onChange={({ target }) => store.setValue(target.value)}
      className={styles["controlled-input"]}
      {...props}
    />
  );
});

export const ControlButton = observer(function ({ ...props }: ButtonProps) {
  return <Button className={styles["control-button"]} {...props} />;
});

export { ControlStore };
export type ControlledInputProps = InputProps & { store: ControlStore };
