export function getErrorMessage(codigo: number) {
    switch(codigo) {
        case 1:     
            return "Nenhum ACTION encontrado para Logos Clientes Empresas";
        case 2: 
            return "Nenhum ACTION encontrado para Periódicos Degustação";
        case 3: 
            return "Nenhum ACTION encontrado para Tmas Cursos e Treinamentos";
        case 4: 
            return "Nenhum ACTION encontrado para Página Link Land Page MBA";
        case 5: 
            return "Nenhum ACTION encontrado para Agenda Turmas";
        case 6: 
            return "Nenhum MODEL encontrado";
        case 7: 
            return "Erro de Conexão de Banco de Dados";
        case 8: 
            return "Erro de Execução retorno de API";
        case 9: 
            return "Não há registros ativos para Logos Clientes Empresas";
        case 10: 
            return "Não há registros ativos de Temas/Objetivos/Especificação Cursos e Treinamentos";
        case 11: 
            return "Dados não encontrados - Temas/Objetivos/Especificação Cursos e Treinamentos";
        case 12: 
            return "Não há registros de Agenda de Turmas";
        case 13: 
            return "Dados não encontrados de Agenda de Turma";
        case 14: 
            return "Tipo de Periódico Incorreto. Aceitável somente SLC ou SAM";
        case 15: 
            return "Ano do Periódico incorreto. Aceitável somente de 2018 em diante";
        case 16: 
            return "Mês do Periódico incorreto. Aceitável somente de 1 a 12";
        case 17: 
            return "Não há registros ativos de Periódicos de Degustação";
        case 18: 
            return "Dados não encontrados de Periódicos de Degustação";       
        default: 
            return "Erro ao executar ação"
    }
}