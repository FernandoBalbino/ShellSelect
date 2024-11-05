import { data } from "../ferramentas/data"; // Ajuste o caminho conforme necessário

export async function GET(request) {
    return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' }
    });
}
