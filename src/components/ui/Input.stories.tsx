import type { Meta, StoryObj } from "@storybook/react";
import { Formik, Form } from "formik";
import Input from "./Input";
import { MailIcon, LockIcon } from "@/components/icons";

const meta = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Formik initialValues={{ email: "", password: "" }} onSubmit={() => {}}>
        <Form className="w-80">
          <Story />
        </Form>
      </Formik>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "email",
    name: "email",
    placeholder: "Email Address",
  },
};

export const WithLabel: Story = {
  args: {
    id: "email",
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
  },
};

export const WithIcon: Story = {
  args: {
    id: "email",
    name: "email",
    placeholder: "Email Address",
    icon: <MailIcon />,
  },
};

export const Password: Story = {
  args: {
    id: "password",
    name: "password",
    type: "password",
    placeholder: "Enter your password",
    icon: <LockIcon />,
  },
};

export const WithError: Story = {
  args: {
    id: "email",
    name: "email",
    placeholder: "Email Address",
    error: "Invalid email address",
    icon: <MailIcon />,
  },
};
