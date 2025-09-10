import { Field } from "formik";

interface CheckboxProps {
  label: string;
  name: string;
  className?: string;
}

export const Checkbox = ({ label, name, className = "" }: CheckboxProps) => {
  return (
    <label className={`flex items-center ${className}`}>
      <Field
        type="checkbox"
        name={name}
        className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
      {label}
    </label>
  );
};
