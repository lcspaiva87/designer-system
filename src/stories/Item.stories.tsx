import { ItemProduct, ItemProductMobile } from "@/components/ItemProduct";
import { Meta } from "@storybook/react";
interface ItemProductProps {
  title: string;
  description: string;
  price: number;
  discount: number;
  serves: number;
  image: string;
}
// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof ItemProduct> = {
  title: 'components/ItemProduct',
  component: ItemProduct,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: {
        type: 'text'
      }
    },
    description: {
      control: {
        type: 'text'
      }
    },
    price: {
      control: {
        type: 'number'
      }
    },
    discount: {
      control: {
        type: 'number'
      }
    },
    serves: {
      control: {
        type: 'number'
      }
    },
    image: {
      control: {
        type: 'text'
      }
    }
  }
}

export default meta;


export const Component = ({ description }: ItemProductProps) => {
  return (
    <div className="flex gap-10 flex-col justify-between   ">
      <ItemProduct
        title={"Hamburguer"}
        description={"Um suculento bife grelhado, perfeitamente selado por fora e macio por dentro, coberto por um delicioso molho cremoso com notas de ervas frescas. Acompanhado por brócolis levemente salteados, preservando sua crocância e cor vibrante, além de um purê de batatas aveludado, cremoso e temperado na medida certa, criando uma combinação irresistível de sabores e texturas."}
        price={100}
        discount={150}
        serves={3}
        image={"https://imgs.search.brave.com/La-uuMdvH2WhQ1WQLgDDq0ApZGyEOZqzpTEMVAcCr3s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ndWlh/ZG9oYW1idXJndWVy/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wOS9zdWpp/bmhvLTk2MHg5NjAu/anBn"}
      />
      <div className="grid grid-cols-2 gap-10 ">
        {Array.from({ length: 10 }).map((_, index) => (
          <ItemProductMobile key={index} title={"Hamburguer"}
            description={"Um suculento bife grelhado, perfeitamente selado por fora e macio por dentro, coberto por um delicioso molho cremoso com notas de ervas frescas. Acompanhado por brócolis levemente salteados, preservando sua crocância e cor vibrante, além de um purê de batatas aveludado, cremoso e temperado na medida certa, criando uma combinação irresistível de sabores e texturas."}
            price={100}
            discount={150}
            serves={3}
            image={"https://imgs.search.brave.com/La-uuMdvH2WhQ1WQLgDDq0ApZGyEOZqzpTEMVAcCr3s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ndWlh/ZG9oYW1idXJndWVy/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wOS9zdWpp/bmhvLTk2MHg5NjAu/anBn"} />
        ))}
      </div>
    </div>
  )
}