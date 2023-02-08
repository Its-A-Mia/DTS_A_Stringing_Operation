import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '.';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    variant: { options: ['primary', 'secondary'], control: { type: 'radio' } },
    size: { options: ['sm', 'md', 'lg'], control: { type: 'radio' } },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'SAMPLE',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  variant: 'secondary',
};

export const Large = Template.bind({});
Large.args = {
  ...Primary.args,
  size: 'lg',
};
