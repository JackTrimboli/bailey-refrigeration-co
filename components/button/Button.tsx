export const Button = ({
  children,
  type = "primary",
}: {
  children: React.ReactNode;
  type?: "primary" | "secondary";
}) => {
  const baseStyles =
    "flex items-center min-h-8 h-12 w-fit px-10 rounded-3xl font-normal cursor-pointer transition-shadow duration-200";
  const primaryStyles = "bg-white text-foreground";
  const secondaryStyles = "bg-foreground text-white cursor-pointer ";

  return (
    <div
      className={`${baseStyles} ${
        type === "secondary" ? secondaryStyles : primaryStyles
      }`}
    >
      {children}
    </div>
  );
};
