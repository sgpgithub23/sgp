export const mesPeriodico: {label: string, value: number}[] =  [
    {label: "Janeiro", value: 1},
    {label: "Fevereiro", value: 2},
    {label: "Março", value: 3},
    {label: "Abril", value: 4},
    {label: "Maio", value: 5},
    {label: "Junho", value: 6},
    {label: "Julho", value: 7},
    {label: "Agosto", value: 8},
    {label: "Setembro", value: 9},
    {label: "Outubro", value: 10},
    {label: "Novembro", value: 11},
    {label: "Dezembro", value: 12},
]

export const anoPeriodico: {label: string, value: string}[] = []

for (var i = new Date().getFullYear(); i >= 2016  ; i--)  {
    anoPeriodico.push({
        label: String(i),
        value: String(i)
    })
}


export const dropdownValuesTipoPeriodico = [
    {label: "SLC", value: "SLC"},
    {label: "SAM", value: "SAM"},
  ]
  


