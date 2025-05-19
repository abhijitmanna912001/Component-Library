import { Meta, StoryObj } from "@storybook/react";
import { Select } from "../components";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "medium",
    options: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ],
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    options: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ],
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    size: "small",
    options: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ],
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "large",
    options: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ],
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    size: "medium",
    disabled: true,
    options: [{ label: "Disabled Option", value: "disabled" }],
  },
};
