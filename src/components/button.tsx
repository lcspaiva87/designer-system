import { cn } from "@/lib/ultils"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from 'react'
const buttonVariants = cva(
  'flex rounded-lg items-center px-11 py-2 hover:bg-orange-600 font-bold text-xl disabled:opacity-50 ring-offset-background disabled:pointer-events-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'bg-orange-500 text-primary-foreground hover:bg-orange-600',
        destructive:
          'bg-red-500 text-white hover:bg-red-600',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-secudary hover:text-seconday-900 border border-seconday-400 text-secondary-600 font-medium bg-transparent',

      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
