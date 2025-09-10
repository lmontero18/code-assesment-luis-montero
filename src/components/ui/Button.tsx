import { Spinner } from "./Spinner";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button = ({
  isLoading,
  children,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      disabled={isLoading || props.disabled}
      className={`w-full py-3 px-4 rounded-lg text-white transition-colors flex items-center justify-center ${
        isLoading || props.disabled
          ? "bg-blue-400 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700"
      } ${className}`}
    >
      {isLoading ? (
        <>
          <Spinner />
          <span className="ml-2">Please wait...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};
