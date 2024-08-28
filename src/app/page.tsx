"use client"



import Image from "next/image";
export default function Home() {

  return (
    <main className="flex  items-center justify-center w-screen h-screen px-5 ">
      <div className="flex flex-col justify-center items-center w-screen h-screen ">
        {/* 
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
        </div> */}
        <div className="grid grid-cols-2 gap-10 ">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="bg-white shadow-boxShadowItem  rounded p-4 flex gap-3 items-center w-full ">
              <Image
                width={60}
                height={60}
                src='https://imgs.search.brave.com/La-uuMdvH2WhQ1WQLgDDq0ApZGyEOZqzpTEMVAcCr3s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ndWlh/ZG9oYW1idXJndWVy/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wOS9zdWpp/bmhvLTk2MHg5NjAu/anBn'
                alt="Avatar"
                quality={100}
                objectFit="cover"
                className="size-16  object-cover rounded-xl"
              />
              <div className="flex flex-col gap-2 ">
                <span className=" text-gray-500 font-bold text-lg">Hamburguer</span>
                <span className="text-gray-400 font-normal text-[5px] line-clamp-4  ">Um suculento bife grelhado, perfeitamente selado por fora e macio por dentro, coberto por um delicioso molho cremoso com notas de ervas frescas. Acompanhado por brócolis levemente salteados, preservando sua crocância e cor vibrante, além de um purê de batatas aveludado, cremoso e temperado na medida certa, criando uma combinação irresistível de sabores e texturas.</span>
                <div className="flex gap-3 ">
                  <span className="text-green-500 font-light text-xs">R$ 100</span>
                  <span className="text-defautText font-light text-xs line-through"> R$ 150</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main >
  );
}
