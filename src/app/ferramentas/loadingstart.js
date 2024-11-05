export default function ToolsLoading() {
    return (
        <div className="p-8">
            {/* Category Filters */}
            <div className="flex justify-center gap-3 mb-10">
                {["Populares", "Geradores", "Produtos", "Gerenciar Etiquetas", "Controle de Avarias", "Vencimento"].map((category, index) => (
                    <div
                        key={index}
                        className={`h-10 w-28 rounded-full animate-pulse ${
                            index === 0 ? "bg-yellow-400" : "bg-gray-100"
                        }`}
                    ></div>
                ))}
            </div>

            {/* Tool Cards */}
            <div className="grid gap-6 lg:grid-cols-4 sm:grid-cols-2 px-8">
                {Array(4).fill("").map((_, index) => (
                    <div key={index} className="flex flex-col items-center bg-white rounded-xl shadow p-4 animate-pulse">
                        <div className="bg-gray-300 w-full h-40 rounded-md mb-4"></div> {/* Placeholder para imagem */}
                        <div className="bg-gray-300 h-6 w-3/4 rounded mb-2"></div> {/* Placeholder para título */}
                        <div className="bg-gray-200 h-4 w-2/3 rounded"></div> {/* Placeholder para descrição */}
                    </div>
                ))}
            </div>
        </div>
    );
}
