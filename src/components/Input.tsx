
import { cn } from "@/lib/ultils";
import { validateEmailFormat } from "@/lib/validateEmail";

import { Eye, LockIcon, Mail, MapPin, Smartphone, Ticket, User } from "lucide-react";
import { useState } from "react";
import { Control, Controller, FieldValues } from 'react-hook-form';
import { tv } from "tailwind-variants";

type InputType =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'tel'
  | 'url'
  | 'search'
  | 'date'
  | 'month'
  | 'checkbox'
  | 'radio'
  | 'file'
  | 'hidden'
  | 'image'
  | 'reset'
  | 'submit'

export interface InputProps {
  type: InputType;
  placeholder: string;
  label: string;
  required?: boolean;
  control: Control<FieldValues> | undefined;
  name: string;
  disabled?: boolean;
  iconType?: 'lock' | 'mail' | 'mapPin' | 'user' | 'smartphone' | 'ticket';
  className?: string;
  buttonIcon?: boolean;
}

export function Input({
  placeholder = "name user",
  type = 'text',
  label,
  required = false,
  control,
  name,
  disabled = false,
  iconType,
  className,
  buttonIcon = false

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
    base: "flex rounded-lg border bg-gray-50 border-secudary px-4 py-3 gap-3 justify-between focus-within:border-orange-500",
    variants: {
      disabled: {
        true: "flex rounded-lg border bg-secondary-200 border-white px-4 py-3 gap-3 focus-within:border-orange-500 cursor-not-allowed",
        false: "flex rounded-lg border bg-gray-50 border-secudary px-4 py-3 gap-3 focus-within:border-orange-500"
      },

    }
  })


  const renderIcon = () => {
    switch (iconType) {
      case 'lock':
        return <LockIcon className="size-6 text-secudary" />;
      case 'mail':
        return <Mail className="size-6 text-secudary" />;
      case 'mapPin':
        return <MapPin className="size-6 text-secudary" />;
      case 'user':
        return <User className="size-6 text-secudary" />;
      case 'smartphone':
        return <Smartphone className="size-6 text-secudary" />;
      case 'ticket':
        return <Ticket className="size-6 text-secudary" />;
      default:
        return <User className="size-6 text-secudary" />;
    }
  }

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field }) => (
        <div className="flex gap-3 flex-col w-full">
          <label htmlFor="" className="text-sm font-normal text-textInput">{label}</label>
          <div className={cn(variantButton({ disabled }), className,)}>
            <div className="flex items-center justify-between gap-3 w-full">
              {buttonIcon && (
                renderIcon()
              )}

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
                className={cn("text-sm font-normal w-full placeholder:text-secudary bg-transparent text-defautText border-none outline-none", {
                  "disabled:cursor-not-allowed disabled:bg-secondary-200": disabled
                }, className)}
              />
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