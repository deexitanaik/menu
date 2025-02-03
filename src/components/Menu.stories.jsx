import React from "react";
import Menu from "./Menu";

export default {
  title: "Components/Menu",
  component: Menu,
};

const Template = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {};

