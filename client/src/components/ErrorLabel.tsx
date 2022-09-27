import React from "react";

export const ErrorLabel: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  if (!children) return null;
  return <span className="text-red-500 w-full mt-1 block">{children}</span>;
};
