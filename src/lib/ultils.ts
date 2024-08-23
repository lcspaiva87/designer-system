import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  if (inputs.length === 0) return ''
  return twMerge(clsx(inputs))
}
