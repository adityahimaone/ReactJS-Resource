/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/function-component-definition */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/Button';

interface IButton {
  label: string;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  full?: boolean;
  onClick?: () => void;
}

export default {
  title: 'Components/Button',
  component: Button,
  //   argTypes for define function if name not onClick
  argTypes: { handleClick: { action: 'action' } },
} as ComponentMeta<typeof Button>;

const Template = (args: IButton) => <Button {...args} />;

export const Primary: ComponentStory<typeof Button> = Template.bind({});

Primary.args = {
  variant: 'primary',
  label: 'Button',
  size: 'medium',
  full: false,
};

export const Secondary: ComponentStory<typeof Button> = Template.bind({});

Secondary.args = {
  variant: 'secondary',
  label: 'Button',
  size: 'medium',
  full: false,
};

export const Large: ComponentStory<typeof Button> = Template.bind({});

Large.args = {
  variant: 'primary',
  label: 'Button',
  size: 'large',
  full: false,
};

export const Medium: ComponentStory<typeof Button> = Template.bind({});

Medium.args = {
  variant: 'primary',
  label: 'Button',
  size: 'medium',
  full: false,
};

export const Small: ComponentStory<typeof Button> = Template.bind({});

Small.args = {
  variant: 'primary',
  label: 'Button',
  size: 'small',
  full: false,
};

export const PrimaryFull: ComponentStory<typeof Button> = Template.bind({});

PrimaryFull.args = {
  variant: 'primary',
  label: 'Button',
  size: 'medium',
  full: true,
};

export const SecondaryFull: ComponentStory<typeof Button> = Template.bind({});

SecondaryFull.args = {
  variant: 'secondary',
  label: 'Button',
  size: 'medium',
  full: true,
};
