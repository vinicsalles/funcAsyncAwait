function funcao01(){
    return new Promise((qualquer)=>{
        setTimeout(() =>{
            qualquer("test")
        },2000)
    })
}

async function funcao02(){
    console.log("Ola Sejam Bem-Vindos")
    console.log('Inicio do Teste')
    const result = await funcao01()
    console.log(result)
}

funcao02()