import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import FloatingNavbar from "../components/FloatingNavbar";

export default {
  title: "Components/FloatingNavbar",
  component: FloatingNavbar,
  argTypes: {
    backgroundColor: { control: 'text' },
    textColor: { control: 'text' },
    hoverColor: { control: 'text' },
    navItems: { control: 'object' },
  },
} as Meta;

const Template: StoryFn = (args: any) => (
  <div style={{ height: '200vh', paddingTop: '100px' }}>
    <FloatingNavbar {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  backgroundColor: "bg-primary-faintest",
  textColor: "text-primary",
  hoverColor: "hover:text-primary-light",
  navItems: [
    { href: "/sluzby", label: "Služby" },
    { href: "/projekty", label: "Projekty" },
    { href: "/o-nas", label: "O nás" },
    { href: "/kontakt", label: "Kontakt" },
    { href: "/blog", label: "Blog" },
  ],
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  backgroundColor: "bg-blue-200",
  textColor: "text-blue-800",
  hoverColor: "hover:text-blue-600",
  navItems: Default.args.navItems,
};

export const CustomNavItems = Template.bind({});
CustomNavItems.args = {
  ...Default.args,
  navItems: [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
};
