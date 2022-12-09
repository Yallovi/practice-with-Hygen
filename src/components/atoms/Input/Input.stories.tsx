import React from 'react';
import { Input } from './';
import { Story, Meta } from '@storybook/react/types-6-0';

type Props = React.ComponentProps<typeof Input>

const csf: Meta = {
  title: 'atoms/Input',
}

const Template: Story<Props> = (args) => <Input {...args} />;

export const c1 = Template.bind({});
c1.storyName = 'default'

export default csf