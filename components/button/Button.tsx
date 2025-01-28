export const Button = ({ children }) => {
  return (
    <div className="flex items-center min-h-12 w-fit bg-white text-foreground  px-10 rounded-3xl font-normal cursor-pointer">
      {children}
    </div>
  );
};
