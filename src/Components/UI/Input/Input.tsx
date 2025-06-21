import type { ChangeEvent } from "react";

interface inputProps {
  className: string;
  type: "text" | "number" | "email" | "password";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ ...props }): Partial<inputProps> => {
  return <input {...props} />;
};

export default Input;
