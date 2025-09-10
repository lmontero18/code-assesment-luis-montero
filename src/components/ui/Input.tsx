import type { ReactNode } from "react";
import { Field } from "formik";

interface InputProps {
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  label?: string;
  icon?: ReactNode;
  error?: string;
  "data-testid"?: string;
}

const Input = ({
  id,
  name,
  type = "text",
  placeholder,
  label,
  icon,
  error,
  "data-testid": testId,
}: InputProps) => {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        <Field
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          data-testid={testId}
          className={`w-full px-4 py-3 rounded-lg border ${
            error ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          aria-describedby={error ? `${id}-error` : undefined}
        />
        {icon && (
          <span
            data-testid="icon-container"
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
          >
            {icon}
          </span>
        )}
      </div>
      {error && (
        <div id={`${id}-error`} className="text-red-500 text-sm">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
