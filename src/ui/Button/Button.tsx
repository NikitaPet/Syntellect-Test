import { type HTMLAttributes } from "react";
import cn from "classnames";

import styles from "./Button.module.scss";

export default function Button({ className = "", children, ...props }: Props) {
  return (
    <button
      className={cn(styles.button, { [className]: !!className })}
      {...props}
    >
      {children}
    </button>
  );
}
export { Button };

export type Props = HTMLAttributes<HTMLButtonElement>;
