export const Button = ({ children }) => {
  return (
    <div className="flex items-center min-h-12 bg-foreground text-white  px-10 rounded-3xl font-normal">
      {children}
    </div>
  );
};
