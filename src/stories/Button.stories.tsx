import { Button, ButtonProps } from "@/components/button";
import type { Meta } from '@storybook/react';
import { fn } from "@storybook/test";

interface ButtonStoryArgs extends ButtonProps {
  children: React.ReactNode;
}


const meta: Meta<typeof Button> = {
  title: "components/Button",
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'destructive', 'secondary', 'ghost'],
      control: { type: 'radio' },
    },
    onClick: { action: 'clicked' },
  },

  args: { onClick: fn(), children: 'Click here' },
};

export default meta;



export const Component = ({ children, variant }: ButtonStoryArgs) => {
  return (
    <div className="flex gap-7 justify-between">
      <Button variant={variant}>{children}</Button>
    </div>
  )
}