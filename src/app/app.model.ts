export interface Dia {
  id: number;
  data: string;
  horaAbertura: string;
  horaFechamento: string;
  usuarioAbertura: Usuario;
  usuarioFechamento: Usuario;
  ativo: Ativo;
}

export enum StatusNome {
	"NÃO INICIADO",
	"EM ANDAMENTO",
	"FINALIZADO"
}


export interface Usuario {
  id: number;
  nome: string;
  login: string;  
}

export interface Ativo {
  id: number;
  nome: string;
}

export interface Ano {
  ano: number;  
}

export interface TotalProvento {
	total: number;
	anos: ProventoAno[];
}

export interface ProventoAno {
	ano: number;
	meses: ProventoMes[];
}

export interface ProventoMes {
	mes: number;
	total: number;
}

export interface Pregao {
  id: number;
  data: string;
	usuario: Usuario;
  comprasAVista: number;
  vendasAVista: number;
  valorOperacoes: number;
  valorLiquidoOperacoes: number;
  taxaLiquidacao: number;
  totalCblc: number;
  emolumentos: number;  
  taxaOperacional: number;
  impostos: number;
  outros: number;
  totalCustosDespesas: number;  
  dataLiquidoPara: string;
  valorLiquidoPara: number;
	
}

export interface MovimentacaoPregao {
  id: number;  
	pregao: Pregao;
	ativo: Ativo;
	tipoMovimentacao: TipoMovimentacao;
  quantidade: number;  
  preco: number;  
  valorOperacao: number;  
}

export interface MovimentacoesPorDia {
  dia: string;
  movimentacaoPorAtivo: ResumoPorAtivo[];
}

export interface ResumoPorAtivo {  
  valorOutrasTaxas: number;
  valorTaxaEmolumentos: number;
  valorTaxaLiquida: number;
  valorOperacaoTotal: number;
  ativoMovimentacao: MovimentacaoPorAtivo[];
}

export interface MovimentacaoPorAtivo {
	operacao: string;
	ativo: string;
  quantidade: number;
  preco: number;
  valorOperacao: number;
}

export interface TipoProvento {
  id: number;
  nome: string;
	sigla: string;
}

export interface TipoMovimentacao {
  id: number;
  nome: string;	
}

export interface Provento {
  id: number;
	tipoProvento: TipoProvento;
	usuario: Usuario;
	ativo: Ativo;
	valor: number;
	quantidadeCotas: number;
  data: string;
}

export interface Rotina {
  id: number;
  descricao: string;
}

export interface RotinaDia {
  id: number;
  horaInicio: string | null;
  horaFim: string | null;
  usuarioInicioRotina: Usuario | null;
  usuarioFimRotina: Usuario | null;
  rotina: Rotina;
  dia: Dia;
  status: StatusNome;
}
