"use client"



import { Button } from "@/components/button";
import { ItemProduct } from "@/components/ItemProduct";
export default function Home() {

  return (
    <main className="flex  items-center justify-center w-screen h-screen px-28 ">
      <div className="flex flex-col justify-center items-center w-screen h-screen ">
        <Button variant='ghost'>
          asd
        </Button>
        <div className="grid grid-cols-2 gap-10 ">

          {
            Array.from({ length: 10 }).map((_, index) => (
              <ItemProduct
                key={index}
                title={"hamburguer"}
                description="Um suculento bife grelhado, perfeitamente selado por fora e macio por dentro, coberto por um delicioso molho cremoso com notas de ervas frescas. Acompanhado por brócolis levemente salteados, preservando sua crocância e cor vibrante, além de um purê de batatas aveludado, cremoso e temperado na medida certa, criando uma combinação irresistível de sabores e texturas."
                price={100}
                discount={150}
                serves={10}
                image='https://imgs.search.brave.com/xs3hQusVonlqW3y6uJiGjCTlHhkh11_kP5fasogj6Hw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9oYW1idXJnZXIt/d2l0aC1oYW1idXJn/ZXItaXQtcGljdHVy/ZS1oYW1idXJnZXJf/OTM5NDM0LTEzMjEz/LmpwZz9zaXplPTYy/NiZleHQ9anBn' />
            ))
          }
        </div>

      </div>
    </main>
  );
}
