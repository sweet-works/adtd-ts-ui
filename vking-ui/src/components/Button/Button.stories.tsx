import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Button, {  ButtonProps } from './button';
export default {
  title: 'Components/Button',
  component: Button,
} as Meta;
export const Primary = () => <Button btnType="primary" onClick={(e) => console.log(e)} >Button</Button>;