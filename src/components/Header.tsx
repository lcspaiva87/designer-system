import { LogOut, Search, ShoppingBasket } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";

export function Header() {
  return (
    <header className="bg-white px-14 py-6 flex justify-between w-full">
      <Image src="/assets/logo.svg" alt="logo" width={130} height={32} />
      <div className="bg-Default rounded-md flex items-center p-4 w-[347px] justify-between">
        <input className="bg-transparent  border-none outline-none " placeholder="Busque por item" />
        <Search className="size-6 text-orange-600" />
      </div>
      <section className="flex gap-2 items-center">
        <Button variant='ghost' className="border-none">
          <LogOut className="text-orange-600" />
        </Button>
        <div className="flex gap-2 items-center">

          <Button variant='ghost' className="border-none">
            <ShoppingBasket className="text-orange-600" />
          </Button>
          <h1 className="text-gray-400 font-light text-xs flex flex-col">
            R$ 100,00
            <span className="text-gray-400 font-light text-xs">0 itens</span>
          </h1>
        </div>
      </section>
    </header>
  );
}