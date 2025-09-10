import { useNavigate } from "react-router";
import { Formik, Form } from "formik";
import type { FormikHelpers } from "formik";
import { useAuth } from "@/hooks/useAuth";
import { useRememberMe } from "@/hooks/useRememberMe";
import { loginSchema } from "@/validation/loginSchema";
import { LOGIN_FORM_INITIAL_VALUES } from "@/constants/formValues";
import { parseError } from "@/utils/error";
import { useState, useEffect } from "react";
import Input from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { ErrorAlert } from "@/components/ui/ErrorAlert";
import { MailIcon, LockIcon } from "@/components/icons";

type LoginFormData = typeof LOGIN_FORM_INITIAL_VALUES;

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { getStoredData, saveRememberMe } = useRememberMe();
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [initialValues, setInitialValues] = useState(LOGIN_FORM_INITIAL_VALUES);

  useEffect(() => {
    const { email, remember } = getStoredData();
    if (email) {
      setInitialValues((prev) => ({
        ...prev,
        email,
        remember,
      }));
    }
  }, []);

  const handleSubmit = async (
    values: LoginFormData,
    { setSubmitting }: FormikHelpers<LoginFormData>
  ) => {
    setGlobalError(null);
    try {
      await login(values.email, values.password, values.remember);
      saveRememberMe(values.email, values.remember);
      navigate("/dashboard");
    } catch (error) {
      const errorResponse = parseError(error);
      setGlobalError(
        errorResponse.code === "AUTH_INVALID_CREDENTIALS"
          ? "Invalid email or password"
          : errorResponse.message
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="space-y-6">
          <ErrorAlert message={globalError} />

          <Input
            id="email"
            type="email"
            name="email"
            data-testid="sign_in_email"
            placeholder="Email Address"
            icon={<MailIcon />}
            error={touched.email ? errors.email : undefined}
          />

          <Input
            id="password"
            type="password"
            name="password"
            data-testid="sign_in_password"
            placeholder="Password"
            icon={<LockIcon />}
            error={touched.password ? errors.password : undefined}
          />

          <div className="flex items-center justify-between text-sm">
            <Checkbox name="remember" label="Remember me" />
            <a href="#" className="text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          <Button type="submit" isLoading={isSubmitting}>
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
