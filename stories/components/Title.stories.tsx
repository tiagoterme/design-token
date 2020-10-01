import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Title from './index';

export default {
  title: 'Components/Title',
  component: Title,
} as Meta;

export const Primary = (args) => <Title {...args} />

Primary.args = {
  children: 'Text'
}