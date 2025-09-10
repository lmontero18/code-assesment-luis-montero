interface ErrorAlertProps {
  message: string | null;
}

export const ErrorAlert = ({ message }: ErrorAlertProps) => {
  if (!message) return null;

  return (
    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
      {message}
    </div>
  );
};
