export const Button = ({
  children,
  type = "primary",
}: {
  children: React.ReactNode;
  type?: "primary" | "secondary";
}) => {
  const baseStyles =
    "flex items-center  h-10 md:min-h-12 w-fit px-8 md:px-10 rounded-3xl font-normal cursor-pointer transition-shadow duration-200";
  const primaryStyles =
    "bg-white text-foreground hover:bg-foreground hover:text-white hover:border-2 hover:border-white";
  const secondaryStyles =
    "bg-foreground text-white cursor-pointer hover:bg-white hover:text-foreground hover:border-2 hover:border-foreground";

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
