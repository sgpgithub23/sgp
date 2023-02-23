export const mesPeriodico: {label: string, value: string}[] =  [
    {label: "Janeiro", value: "Janeiro"},
    {label: "Fevereiro", value: "Fevereiro"},
    {label: "Março", value: "Março"},
    {label: "Abril", value: "Abril"},
    {label: "Maio", value: "Maio"},
    {label: "Junho", value: "Junho"},
    {label: "Julho", value: "Julho"},
    {label: "Agosto", value: "Agosto"},
    {label: "Setembro", value: "Setembro"},
    {label: "Outubro", value: "Outubro"},
    {label: "Novembro", value: "Novembro"},
    {label: "Dezembro", value: "Dezembro"},
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
  


