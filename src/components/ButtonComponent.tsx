import { MouseEventHandler } from "react";

export function ButtonComponent({
  onClick,
  className,
  children,
}: {
  onClick: MouseEventHandler;
  className: string;
  children: any;
}) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
