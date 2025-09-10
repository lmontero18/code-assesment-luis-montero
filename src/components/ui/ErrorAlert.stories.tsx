import type { Meta, StoryObj } from "@storybook/react";
import { ErrorAlert } from "./ErrorAlert";

const meta = {
  title: "UI/ErrorAlert",
  component: ErrorAlert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ErrorAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithMessage: Story = {
  args: {
    message: "Invalid email or password",
  },
};

export const Hidden: Story = {
  args: {
    message: null,
  },
};
