let numeros: number[] = [2]

const tabuadaMultiplicacao = (lista:number[]) =>{

  let tabuada = lista.map(numero =>{
    for (let i = 0; i <= 10 ; i++) {
      let casa:string = String(numero).concat(' x ',String(i),' = ',String(numero*i));
      console.log(casa);
      if(i >= 10){console.log('---------------')}
      }
  })
}
tabuadaMultiplicacao(numeros);
