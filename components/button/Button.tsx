export const Button = ({
  children,
  type = "primary",
  onClick,
  disabled = false,
}: {
  children: React.ReactNode;
  type?: "primary" | "secondary";
  onClick?: () => void;
  disabled?: boolean;
}) => {
  const baseStyles =
    "flex items-center justify-center h-10 md:min-h-12 w-fit px-8 md:px-10 rounded-3xl font-normal cursor-pointer transition-shadow duration-200";
  const primaryStyles =
    "bg-white text-foreground hover:bg-foreground hover:text-white hover:border-2 hover:border-white";
  const secondaryStyles =
    "bg-foreground text-white hover:bg-white hover:text-foreground hover:border-2 hover:border-foreground";
  const disabledStyles = "opacity-50 cursor-not-allowed";

  return (
    <button
      className={`${baseStyles} ${
        type === "secondary" ? secondaryStyles : primaryStyles
      } ${disabled ? disabledStyles : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
