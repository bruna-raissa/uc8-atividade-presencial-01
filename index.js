let listaPecas=[]
let nomePeca='Peça Teste'
let pesoPeca=300
let podeCadastrar=true
if(pesoPeca<100){
    console.log('Não há possibilidade de cadastrar peças inferiores a 100 gramas!')
    podeCadastrar=false
}
if (listaPecas.length>10){
    console.log('Limite de peças atingido!')
    podeCadastrar=false
}

 if (podeCadastrar){
     listaPecas.push(nomePeca)
        console.log('Cadastramento efetuado com sucesso')}
        else
        {
            console.log('Houve problemas para cadatrar a peça')
        }
        console.log('listando peças cadastradas.')
        for(let i=0;i<listaPecas.length;i++){
            console.log(listaPecas[i])
        }
    

