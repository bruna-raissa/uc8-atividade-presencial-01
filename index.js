let listaPecas=[]
let nomePeca='Peça Teste'
let pesoPeca=300
let podeCadastrar=true
if(pesoPeca<100){
    console.log('Não há possibilidade de cadastrar!')
    podeCadastrar=false
}
if (listaPecas.length>10){
    console.log('Limite de peças atingido!')
    podeCadastrar=false
}

 if (nomePecas.length>3){
        console.log('Tamanho de letras inferior ao permitido')
        podeCadastrar=false
    }
 

