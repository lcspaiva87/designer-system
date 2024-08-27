import Image from "next/image";
interface ItemProductProps {
  title: string;
  description: string;
  price: number;
  discount: number;
  serves: number;
  image: string;
}
export function ItemProduct({
  title,
  description,
  price,
  discount,
  serves,
  image
}: ItemProductProps) {
  return (
    <main className="rounded   shadow-boxShadowItem px-3 py-4 w-full">
      <section className="flex justify-between px-3 py-4">
        <div className="pl-2.5 pr-9 py-2.8 flex flex-col gap-4">
          <h1 className="text-gray-500 font-bold text-base">{title}</h1>
          <span className="font-medium text-xs text-gray-400">{description}</span>
          <span className="text-gray-500 font-bold text-xs">serve ate {serves} pessoa{serves > 0 ? 's' : ''}</span>
          <div className="flex gap-3 ">
            <span className="text-green-500 font-bold text-base">R$ {price}</span>
            <span className="text-defautText font-bold text-base line-through"> R${discount}</span>
          </div>
        </div>
        <Image
          src={image}
          width={191}
          height={171}
          alt={title} />
      </section>
    </main>
  )
}