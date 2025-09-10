import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router";
import LoginForm from "./LoginForm";

const meta = {
  title: "Forms/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="w-96 p-6 bg-white rounded-xl shadow-lg">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// Note: This component requires AuthContext and other providers to work properly
// In a real app, you might want to add those providers in the decorator or
// mock the hooks used by the component
