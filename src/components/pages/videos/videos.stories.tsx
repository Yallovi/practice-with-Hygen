import React from 'react';
import { videos } from './';
import { Story, Meta } from '@storybook/react/types-6-0';

type Props = React.ComponentProps<typeof videos>

const csf: Meta = {
  title: 'pages/videos',
}

const Template: Story<Props> = (args) => <videos {...args} />;

export const c1 = Template.bind({});
c1.storyName = 'default'

export default csf