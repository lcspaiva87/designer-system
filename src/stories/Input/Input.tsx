"use client"
import { validateEmailFormat } from "@/lib/validateEmail";
import { Eye, Mail } from "lucide-react";
import { useState } from "react";
type InputType =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'tel'
  | 'url'
  | 'search'
  | 'date'
  | 'datetime-local'
  | 'month'
  | 'week'
  | 'time'
  | 'color'
  | 'checkbox'
  | 'radio'
  | 'file'
  | 'hidden'
  | 'image'
  | 'range'
  | 'reset'
  | 'submit'
  | 'button';
import { Controller, ControllerProps } from 'react-hook-form'
import { Control, FieldValues } from 'react-hook-form';
import { tv } from "tailwind-variants";

export interface InputProps {
  type: InputType;
  placeholder: string;
  label: string;
  required?: boolean;
  control: Control<FieldValues> | undefined;
  name: string;
  disabled?: boolean;
}
export function Input({

  placeholder = "email@gmail.com",
  type = 'password',
  label,
  required = false,
  control,
  name,
  disabled = false,
}: InputProps) {
  const [inputType, setInputType] = useState<InputType>(type)
  const [error, setError] = useState<string | undefined>(undefined)
  const validateInput = (inputValue: string | number) => {
    if (required && inputValue.toString().trim().length === 0) {
      return 'Campo obrigatório'
    }

    if (type === 'email' && typeof inputValue === 'string') {
      const result = validateEmailFormat(inputValue, { required })
      if (!result.ok) {
        return result.error
      }
    }

    if (type === 'password' && typeof inputValue === 'string') {
      if (inputValue.length < 8) {
        return 'A senha deve ter pelo menos 8 caracteres'
      }
    }

    return undefined
  }

  const handleTogglePasswordVisibility = () => {
    setInputType((prev) => (prev === 'password' ? 'text' : 'password'))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setError(validateInput(inputValue))
  }
  const variantButton = tv({
    base: "flex rounded-lg border bg-gray-50 border-secudary px-4 py-3 gap-3  focus-within:border-orange-500 ",
    variants: {
      disabled: {
        true: "flex rounded-lg border bg-secondary-200 border-white px-4 py-3 gap-3  focus-within:border-orange-500 cursor-not-allowed",
        false: "flex rounded-lg border bg-gray-50 border-secudary px-4 py-3 gap-3  focus-within:border-orange-500"
      }
    }
  })
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field }) => (
        <div className="flex gap-3 flex-col justify-between w-full">
          <label htmlFor="" className="text-sm font-normal text-textInput">{label}</label>
          <div className={variantButton({
            disabled: disabled
          })}>
            <div className="flex items-center justify-betwee gap-3">

              <Mail className="size-6 text-secudary  " />
              <input
                name={name}
                value={field.value}
                onChange={(e) => {
                  field.onChange(e)
                  handleChange(e)
                }}
                disabled={disabled}
                type={inputType}
                placeholder={placeholder}
                className="text-sm font-normal placeholder:text-secudary bg-transparent text-defautText border-none outline-none disabled:cursor-not-allowed disabled:bg-secondary-200 " />
            </div>
            {type === 'password' && (
              <button
                onClick={handleTogglePasswordVisibility}
                className="group flex-shrink-0"
                type="button"
              >
                <Eye className="size-6 text-secudary hover:text-defautText" />
              </button>
            )}
          </div>
          {error && <p className="text-sm mt-1 text-red-400">{error}</p>}
        </div>
      )}
    />
  )
}
