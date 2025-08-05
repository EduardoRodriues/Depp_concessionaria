export interface VeiculosPaginationDTO<T> {
    data: T[];
    paginaAtual: number;
    totalPaginas: number;
    totalItens: number;
}