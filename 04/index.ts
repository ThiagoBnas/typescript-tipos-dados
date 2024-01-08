const produto:{
  produto: string,
  lote: number,
  ano: number,
  qtd: number
}[]=[    {
  produto: 'CPU Quad Core 3.0GHZ',
  lote: 321,
  ano: 2022,
  qtd: 3
},    {
  produto: 'CPU Dual Core 3.0GHZ',
  lote: 321,
  ano: 2022,
  qtd: 2
},    {
  produto: 'CPU Octa Core 3.0GHZ',
  lote: 321,
  ano: 2022,
  qtd: 4
}]
const etiquetas = (lista:{  produto: string,  lote: number,  ano: number,  qtd: number}[]): string[] => {
  let retorno:string[]=[];
  let tags = lista.map(tag=>{
    for (let i = 0; i < tag.qtd; i++) {
      retorno.push(`${tag.lote}-${tag.ano}-${(String(tag.qtd-i)).padStart(3,'0')}`);
    }  
  })
  return retorno;
}
console.log(etiquetas(produto));
