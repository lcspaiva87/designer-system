"use client"


import Image from "next/image";
import { useForm } from "react-hook-form";

export default function Home() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  return (
    <main className="flex bg-white">

    </main>
  );
}
