export interface Fornecedor {
    nome: string;
    logo: string;
    estado: string;
    custo_kWh: number;
    limite_minimo_kWh: number;
    numero_total_clientes: number;
    avaliacao_media: number;
}
