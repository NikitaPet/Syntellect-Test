import { type HTMLAttributes } from "react";
import cn from "classnames";

import styles from "./Control.module.scss";

export default function Control({
  title = "",
  className = "",
  children,
  ...props
}: Props) {
  return (
    <div className={styles.wrapper}>
      {title && <h1 className={styles.title}> {title}</h1>}
      <div
        className={cn(styles.control, { [className]: !!className })}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}
export { Control };

export type Props = HTMLAttributes<HTMLDivElement> & { title?: string };
