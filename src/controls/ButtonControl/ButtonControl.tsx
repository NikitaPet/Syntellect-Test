import { observer } from "mobx-react";
import cn from "classnames";
import Control, { type Props as ControlProps } from "ui/Control";
import Input, { type Props as InputProps } from "ui/Input";
import Button, { type Props as ButtonProps } from "ui/Button";
import Store from "./Store";

import styles from "./ButtonControl.module.scss";

export default function ButtonControl({
  store,
  className = "",
  leftButtons = [],
  rightButtons = [],
  ...props
}: Props) {
  return (
    <Control
      className={cn(styles["button-control"], { [className]: !!className })}
      {...props}
    >
      {leftButtons.map((button) => (
        <ControlButton onClick={button.onClick}>{button.text}</ControlButton>
      ))}
      <ControlledInput {...{ store }} />
      {rightButtons.map((button) => (
        <ControlButton onClick={button.onClick}>{button.text}</ControlButton>
      ))}
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

export type Props = ControlProps & {
  store: Store;
  leftButtons?: ButtonData[];
  rightButtons?: ButtonData[];
};
export type ControlledInputProps = InputProps & { store: Store };
export type ButtonData = {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
