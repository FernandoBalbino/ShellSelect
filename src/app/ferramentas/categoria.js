'use client';
import React from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const categories = [
    { id: 1, label: 'Populares', value: 'Populares' },
    { id: 2, label: 'Geradores', value: 'Geradores' },
    { id: 3, label: 'Produtos', value: 'Produtos' },
    { id: 4, label: 'Gerenciar Etiquetas', value: 'Etiquetas' },
    { id: 5, label: 'Controle de Avarias', value: 'Avarias' },
    { id: 6, label: 'Vencimento', value: 'Vencimento' },
];

export default function Categoria() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const categoriaAtual = searchParams.get('categoria');
    const actived = categories.find(cat => cat.value === categoriaAtual)?.id || 1;

    function handleClick(id, categoria) {
        const params = new URLSearchParams(searchParams);
        
        if (categoria) {
            params.set('categoria', categoria);
        } else {
            params.delete('categoria');
        }

        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="flex justify-center transition-colors gap-2 flex-wrap mt-14">
            {categories.map(category => (
                <div
                    key={category.id}
                    onClick={() => handleClick(category.id, category.value)}
                    className={`bg-[#f1f2f4] flex items-center justify-center ${
                        actived === category.id ? 'selectedCat' : ''
                    } h-[40px] py-[6px] px-[16px] text-[16px] font-normal text-[#222529] text-center whitespace-nowrap cursor-pointer rounded-lg ${
                        actived === category.id ? 'hover:bg-[#fbce07b5]' : 'hover:bg-[#E8EAEC]'
                    }`}
                >
                    {category.label}
                </div>
            ))}
        </div>
    );
}
