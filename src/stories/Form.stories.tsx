import { Button } from "@/components/button";
import { Input } from "@/components/Input";
import { Meta } from "@storybook/react";
import { useForm } from "react-hook-form";

const meta: Meta<typeof Input> = {
  title: "Components/Formulario de registro",
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
}
export default meta;

export const Component = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form className="p-4 bg-white rounded-md flex-col gap-4 flex">
      <Input
        type='text'
        placeholder='Digite seu nome'
        label='Nome'
        control={control}
        name='name'
        iconType="user"
        buttonIcon
        required
      />
      <Input
        type='email'
        placeholder='Digite seu email'
        label='email'
        control={control}
        name='email'
        iconType="mail"
        buttonIcon
        required
      />
      <Input
        type='password'
        placeholder='Digite uma senha'
        label='password'
        control={control}
        name='password'
        iconType="lock"
        buttonIcon
        required
      />
      <Button
        variant="default"
        className="w-full text-center flex justify-center text-white"
      >Register</Button>
    </form>
  )
}