const usuarios: { nome: string; idade: number; status: boolean }[] = [
	{
		nome: "Guido",
		idade: 32,
		status: true,
	},
	{
		nome: "Dani",
		idade: 30,
		status: true,
	},
	{
		nome: "João",
		idade: 40,
		status: false,
	},
	{
		nome: "Guilherme",
		idade: 29,
		status: true,
	},
	{
		nome: "Ana",
		idade: 18,
		status: false,
	},
	{
		nome: "José",
		idade: 28,
		status: false,
	},
];

const filtroProNome = (
	lista: {
		nome: string, 
		idade: number, 
		status: boolean
	}[],	
	nomeUsuario: string
	): { nome: string, 
		idade: number, 
		status: boolean }[] => {
let colecao = lista.filter(elemento=>{
	return elemento.nome.toLowerCase().includes(nomeUsuario.toLowerCase());
});

return colecao;
}

console.log(filtroProNome(usuarios,'jo'))