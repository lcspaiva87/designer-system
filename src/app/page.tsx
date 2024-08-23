"use client"



import { Input } from "@/components/Input";
import { useForm } from "react-hook-form";

export default function Home() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  return (
    <main className="flex bg-white">
      <Input type={"text"} placeholder={""} label={""} control={control} name={""} iconType={"lock"}
        className="!text-red-900 "
        size="lg"
      />
    </main>
  );
}
