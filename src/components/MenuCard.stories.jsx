// MenuCard.stories.jsx
import React from 'react';
import MenuCard from './MenuCard'; // Adjust the import path based on your project structure

// Default export should include metadata for the story
export default {
  title: 'Components/MenuCard', // Adjust title as per your folder structure
  component: MenuCard,
};

const Template = (args) => <MenuCard {...args} />;

// Create individual stories by passing different args
export const Default = Template.bind({});
Default.args = {
  // Pass default args for your MenuCard component
};

