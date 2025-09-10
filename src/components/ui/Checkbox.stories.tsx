import type { Meta, StoryObj } from "@storybook/react";
import { Formik, Form } from "formik";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Formik initialValues={{ remember: false }} onSubmit={() => {}}>
        <Form>
          <Story />
        </Form>
      </Formik>
    ),
  ],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Remember me",
    name: "remember",
  },
};

export const WithCustomClass: Story = {
  args: {
    label: "Accept terms and conditions",
    name: "terms",
    className: "text-sm text-gray-600",
  },
};
