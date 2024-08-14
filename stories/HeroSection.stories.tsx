import type { Meta, StoryObj } from "@storybook/react";
import HeroSection from "../components/HeroSection";

const meta: Meta<typeof HeroSection> = {
  title: "Components/HeroSection",
  component: HeroSection,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {};

export const CustomTitle: Story = {
  args: {
    title: "BEžte všici do píče",
  },
};
