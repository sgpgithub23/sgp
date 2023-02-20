export const TiposPeriodicos = [
    {nome: "SAM"}, 
    {nome: "SLC"}
]

export const meses = [
    "Janeiro", 
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
]

export const periodoPeriodicos: number[] = []

const periodo = new Date().getFullYear() - 7

for(let i = new Date().getFullYear(); i >= periodo; i--){
	periodoPeriodicos.push(i)
}


