import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Card } from "../components";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: "small",
    shadow: "md",
    border: "solid",
    children: <div>Small Card Content</div>,
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    shadow: "lg",
    border: "rounded",
    children: <div>Medium Card Content</div>,
  },
};

export const Large: Story = {
  args: {
    size: "large",
    shadow: "sm",
    border: "none",
    children: <div>Large Card Content</div>,
  },
};

export const NoBorder: Story = {
  args: {
    size: "medium",
    shadow: "md",
    border: "none",
    children: <div>No Border Card</div>,
  },
};

export const WithCustomContent: Story = {
  args: {
    size: "medium",
    shadow: "lg",
    border: "solid",
    children: (
      <div>
        <h2 className="font-semibold text-lg">Card Title</h2>
        <p className="text-sm">Some content inside the card</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eligendi sunt ipsam veniam voluptatibus adipisci nostrum nesciunt non nobis quod id, aperiam accusantium unde quo possimus nisi. Illum, nobis repellat?</p>
      </div>
    ),
  },
};
