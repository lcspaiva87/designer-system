"use client"
import { Inputs } from "@/components/Inputs";
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
      <Inputs
        type="text"
        name="amount"
        placeholder="name"
        required
        control={control} label={"text"}
      />
    </main>
  );
}
