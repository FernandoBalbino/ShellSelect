// pages/ferramentas.js
"use client";
import { useState } from "react";
import { gg } from "./data2";
import CategoryFilter from "./categoria2";
import Image from "next/image";
import Link from "next/link";

export default function Ferramentas2() {
  const [category, setCategory] = useState("Populares");

  // Obtenha as categorias únicas do array
  
  const categories = [{ id: 0, label: "Populares" }, 
    ...Array.from(new Set(gg.map((tool) => tool.categoria))).map((cat, index) => ({
      id: index + 1,
      label: cat
    }))
  ];

  return (
    <div>
      <CategoryFilter categories={categories} setCategory={setCategory} />
      <div className='grid max-w-7xl mx-auto grid-cols-1 gap-y-6 gap-x-6 xl:grid-cols-4 justify-center justify-items-center items-center content-center center  p-9 '>

      
        {gg
          .filter((tool) => category === 'Populares' || tool.categoria === category)
          .map((item) => (
            <Link
              href={item.url}
              key={item.id}
              className="w-[18rem] py-3 transition-all hover:-translate-y-2 h-full"
            >
              <div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-xl flex flex-col overflow-hidden md:h-[270px] max-w-[18rem] md:max-h-[300px]"
              >
                <Image
                  priority
                  className="w-[564px] rounded-xl h-auto"
                  width={564}
                  height={376}
                  alt={item.nome}
                  src={item.image}
                />
                <h2 className="mt-3 font-bold text-[14px] text-[#222529]">
                  {item.nome}
                </h2>
                <p className="mt-1 text-[12px] text-[#4c535c] line-clamp-3">
                  {item.descricao}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
