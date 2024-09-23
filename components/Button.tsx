import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  isDefault?: boolean; // Renamed 'default' to 'isDefault'
}

const Button: React.FC<ButtonProps> = ({ children, className, isDefault }) => {
  // Ensure def is initialized correctly
  const def = isDefault ? "bg-green-500 text-stone-700" : "";

  return (
    <div>
      <button
        className={`${def} ${className}  hover:transition-all duration-500 rounded-full py-2 px-4 `}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
