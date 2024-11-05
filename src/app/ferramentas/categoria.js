'use client';
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const categories = [
    { id: 1, label: "Populares", value: "Populares" },
    { id: 2, label: "Geradores", value: "Geradores" },
    { id: 3, label: "Produtos", value: "Produtos" },
    { id: 4, label: "Gerenciar Etiquetas", value: "Etiquetas" },
    { id: 5, label: "Controle de Avarias", value: "Avarias" },
    { id: 6, label: "Vencimento", value: "Vencimento" },
];

function Categoria() {
    const [actived, setActived] = useState(1);
    const router = useRouter();
    const searchParams = useSearchParams();
    const categoriaAtual = searchParams.get("categoria");

    // Sincroniza o estado com o parâmetro de categoria na URL
    useEffect(() => {
        const foundCategory = categories.find(cat => cat.value === categoriaAtual);
        setActived(foundCategory ? foundCategory.id : 1);
    }, [categoriaAtual]);

    const handleClick = (id, categoria) => {
        setActived(id); 
        router.push(`?categoria=${categoria}`, { scroll: false });
    };

    return (
        <div className="flex justify-center transition-colors gap-2 flex-wrap mt-14">
            {categories.map(category => (
                <div
                    key={category.id}
                    onClick={() => handleClick(category.id, category.value)}
                    className={`bg-[#f1f2f4] flex items-center justify-center ${
                        actived === category.id ? "selectedCat" : ""
                    } h-[40px] py-[6px] px-[16px] text-[16px] font-normal text-[#222529] text-center whitespace-nowrap cursor-pointer rounded-lg ${
                        actived === category.id ? "hover:bg-[#fbce07b5]" : "hover:bg-[#E8EAEC]"
                    }`}
                >
                    {category.label}
                </div>
            ))}
        </div>
    );
}

export default Categoria;
