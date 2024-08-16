import Categoria from './Categoria';


export default interface Produto {
  data: string | number | Date;
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  categoria: Categoria | null;
}
