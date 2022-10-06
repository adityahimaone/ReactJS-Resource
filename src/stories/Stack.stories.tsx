/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Stack from '../components/Stack';

interface IStack {
  children: React.ReactNode;
  direction: 'row' | 'column';
  spacing: number;
  wrap: boolean;
  //   numberOfChildren: number;
}

export default {
  title: 'Components/Stack',
  component: Stack,
  argTypes: {
    numberOfChildren: { type: 'number', defaultValue: 3 },
  },
} as ComponentMeta<typeof Stack>;

function Template({ numberOfChildren, ...args }: any): JSX.Element {
  return (
    <Stack {...args}>
      {Array.from({ length: numberOfChildren }, (_, i) => (
        <div key={i} className="flex h-20 w-20 items-center justify-center bg-blue-500 text-white">
          {i + 1}
        </div>
      ))}
    </Stack>
  );
}

export const Horizontal: ComponentStory<typeof Stack> = Template.bind({});

Horizontal.args = {
  direction: 'row',
  spacing: 2,
  wrap: false,
};

export const Vertical: ComponentStory<typeof Stack> = Template.bind({});

Vertical.args = {
  direction: 'column',
  spacing: 2,
  wrap: false,
};
