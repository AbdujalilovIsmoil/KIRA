interface buttonTypes {
  className: string;
  onClick: () => void;
  children: React.ReactNode;
  type: "button" | "submit";
}

const Button = ({ children, ...props }: Partial<buttonTypes>) => {
  return <button {...props}>{children}</button>;
};

export default Button;
