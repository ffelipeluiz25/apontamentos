import { Tarefa } from "./tarefas";
export class Apontamentos {
    public teamMember: string;
    public date: string;
    public workItens: Array<Tarefa> = new Array<Tarefa>();
    public dataFormatada: string;
    public diaDaSemana: string;
}