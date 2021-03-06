import { MouseEventHandler } from "react";
import styled from "styled-components";

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
    <Button onClick={onClick} className={className}>
      {children}
    </Button>
  );
}

const Button = styled.button`
  background-color: transparent;
  color: #ecf0f1;
  width: 100%;
  height: 4rem;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.2rem;
  border: 3px solid #ecf0f1;
  border-radius: 10px;
  margin: 1rem 0;
  &:hover {
    background-color: rgb(0 0 0 / 28%);
  }
  &:active {
    background-color: rgb(0 0 0 / 50%);
  }
`;
