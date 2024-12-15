import { observer } from "mobx-react";
import cn from "classnames";
import Control, { type Props as ControlProps } from "ui/Control";
import Input, { type Props as InputProps } from "ui/Input";
import Button, { type Props as ButtonProps } from "ui/Button";
import ControlStore from "./ControlStore";

import styles from "./ButtonControl.module.scss";

export default function ButtonControl({
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
export { ButtonControl };

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
