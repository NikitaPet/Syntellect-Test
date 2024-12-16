import { type DetailedHTMLProps, InputHTMLAttributes } from "react";
import cn from "classnames";

import styles from "./Input.module.scss";

export default function Input({ className = "", children, ...props }: Props) {
  return (
    <input
      className={cn(styles.input, { [className]: !!className })}
      {...props}
    />
  );
}
export { Input };

export type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
