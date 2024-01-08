let numeros: number[] = [2,3,1,4]

const tabuadaMultiplicacao = (lista:number[]): string =>{
  let resultado:string = '';
  for (const numero of lista) {
    for (let i = 0; i <= 10 ; i++) {
      resultado += `${numero} x ${i} = ${numero*i} \n`;
  
      if(i === 10){
        resultado += '--------------- \n'
      }
    }
  }
  return resultado;
}

console.log(tabuadaMultiplicacao(numeros));
