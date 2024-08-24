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
              <ItemProduct key={index} />
            ))
          }
        </div>

      </div>
    </main>
  );
}
