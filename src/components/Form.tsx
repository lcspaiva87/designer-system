import { useForm } from "react-hook-form";
import { Button } from "./button";
import { Input } from "./Input";

export function FormRegister() {
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