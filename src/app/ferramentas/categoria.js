'use client'
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Categoria() {
    const [actived, setAct] = useState(1);
    const router = useRouter();
    const searchParams = useSearchParams();
    const categoriaAtual = searchParams.get('categoria');

    // Sincroniza o estado com o parâmetro de categoria na URL
    useEffect(() => {
        switch (categoriaAtual) {
            case 'Populares':
                setAct(1);
                break;
            case 'Geradores':
                setAct(2);
                break;
            case 'Produtos':
                setAct(3);
                break;
            case 'Etiquetas':
                setAct(4);
                break;
            case 'Avarias':
                setAct(5);
                break;
            case 'Vencimento':
                setAct(6);
                break;
            default:
                setAct(1); // Define Populares como padrão
        }
    }, [categoriaAtual]);

    const handleClick = (id, categoria) => {
        setAct(id); // Define o ID do botão ativo
        router.push(`?categoria=${categoria}`, { scroll: false });
    };

    return (
        <div className="flex justify-center transition-colors gap-2 flex-wrap mt-14">
            <div onClick={() => handleClick(1, 'Populares')}
                className={`bg-[#f1f2f4] flex   items-center justify-center ${actived === 1 ? 'selectedCat ' : ''} h-[40px] py-[6px] px-[16px] text-[16px] font-normal text-[#222529] text-center whitespace-nowrap cursor-pointer rounded-lg ${actived === 1 ? 'hover:bg-[#fbce07b5]' : 'hover:bg-[#E8EAEC]'}`}>
                Populares
            </div>
            <div onClick={() => handleClick(2, 'Geradores')}
                className={`bg-[#f1f2f4] ${actived === 2 ? 'selectedCat' : ''} flex items-center justify-center h-[40px] py-[6px] px-[16px] text-[16px] font-normal text-[#222529] text-center whitespace-nowrap cursor-pointer rounded-lg ${actived === 2 ? 'hover:bg-[#fbce07b5]' : 'hover:bg-[#E8EAEC]'}`}>
                Geradores
            </div>
            <div onClick={() => handleClick(3, 'Produtos')}
                className={`bg-[#f1f2f4] ${actived === 3 ? 'selectedCat' : ''} flex items-center justify-center h-[40px] py-[6px] px-[16px] text-[16px] font-normal text-[#222529] text-center whitespace-nowrap cursor-pointer rounded-lg ${actived === 3 ? 'hover:bg-[#fbce07b5]' : 'hover:bg-[#E8EAEC]'}`}>
                Produtos
            </div>
            <div onClick={() => handleClick(4, 'Etiquetas')}
                className={`bg-[#f1f2f4] ${actived === 4 ? 'selectedCat' : ''} flex items-center justify-center h-[40px] py-[6px] px-[16px] text-[16px] font-normal text-[#222529] text-center whitespace-nowrap cursor-pointer rounded-lg ${actived === 4 ? 'hover:bg-[#fbce07b5]' : 'hover:bg-[#E8EAEC]'}`}>
                Gerenciar Etiquetas
            </div>
            <div onClick={() => handleClick(5, 'Avarias')}
                className={`bg-[#f1f2f4] ${actived === 5 ? 'selectedCat' : ''} flex items-center justify-center h-[40px] py-[6px] px-[16px] text-[16px] font-normal text-[#222529] text-center whitespace-nowrap cursor-pointer rounded-lg ${actived === 5 ? 'hover:bg-[#fbce07b5]' : 'hover:bg-[#E8EAEC]'}`}>
                Controle de Avarias
            </div>
            <div onClick={() => handleClick(6, 'Vencimento')}
                className={`bg-[#f1f2f4] ${actived === 6 ? 'selectedCat' : ''} flex items-center justify-center h-[40px] py-[6px] px-[16px] text-[16px] font-normal text-[#222529] text-center whitespace-nowrap cursor-pointer rounded-lg ${actived === 6 ? 'hover:bg-[#fbce07b5]' : 'hover:bg-[#E8EAEC]'}`}>
                Vencimento
            </div>
        </div>
    );
}
