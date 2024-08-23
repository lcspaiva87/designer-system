import { Meta, StoryObj } from '@storybook/react';
import "../../app/globals.css";

import { Input } from '@/components/Input';
import { FormProvider, useForm } from 'react-hook-form';

const meta = {
  title: 'Components/Inputs',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'text', 'password', 'email', 'number', 'tel', 'url', 'search', 'date',
          'datetime-local', 'month', 'week', 'time', 'color', 'checkbox', 'radio',
          'file', 'hidden', 'image', 'range', 'reset', 'submit', 'button'
        ],
      },
    },
    placeholder: { control: 'text' },
    label: { control: 'text' },
    required: { control: 'boolean' },
    name: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  decorators: [
    (Story) => {
      const methods = useForm();
      return (
        <FormProvider {...methods}>
          <Story />
        </FormProvider>
      );
    },
  ],
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Input label="Name" placeholder="Enter your name" type="text" control={undefined} name="name" iconType={'lock'} />
  ),
};

export const PasswordInput: Story = {
  render: () => (
    <Input label="Password" placeholder="Enter your password" type="password" control={undefined} name="password" iconType={'lock'} />
  ),
};

export const EmailInput: Story = {
  render: () => (
    <Input label="Email" placeholder="Enter your email" type="email" control={undefined} name="email" iconType={'lock'} />
  ),
};

export const DisabledInput: Story = {
  render: () => (
    <Input label="Disabled" placeholder="Disabled input" type="text" control={undefined} name="disabled" disabled iconType={'lock'} />
  ),
};

export const RequiredInput: Story = {
  render: () => (
    <Input label="Required" placeholder="Required input" type="text" control={undefined} name="required" required iconType={'lock'} />
  ),
};
