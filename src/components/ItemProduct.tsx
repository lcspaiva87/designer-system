import Image from "next/image";

export function ItemProduct() {
  return (
    <main className="rounded   shadow-boxShadowItem px-3 py-4 w-full">
      <section className="flex justify-between px-3 py-4">
        <div className="pl-2.5 pr-9 py-2.8 flex flex-col gap-4">
          <h1 className="text-gray-500 font-bold text-base">Bife grande e suculento</h1>
          <span className="font-medium text-xs text-gray-400">Um suculento bife grelhado, perfeitamente selado por fora e macio por dentro, coberto por um delicioso molho cremoso com notas de ervas frescas. Acompanhado por brócolis levemente salteados, preservando sua crocância e cor vibrante, além de um purê de batatas aveludado, cremoso e temperado na medida certa, criando uma combinação irresistível de sabores e texturas</span>
          <span className="text-gray-500 font-bold text-xs">Serve 2 pessoas</span>
          <div className="flex gap-3 ">
            <span className="text-green-500 font-bold text-base">R$ 59,90</span>
            <span className="text-defautText font-bold text-base line-through">R$ 59,90</span>
          </div>
        </div>
        <Image
          src="/assets/item.png"
          width={191}
          height={171}
          alt={""} />
      </section>
    </main>
  )
}