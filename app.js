


function rand(){
 const s = parseInt(Math.random() * 3)
   return s <= 0 ? Number(s + 1) : s 
}

function simulaPromise(msg,tempo){
 return new Promise((resolve,reject)=>{
    setTimeout(()=>{
     if(typeof msg !== 'string'){
        reject('CAI NO ERRO');
        return
     }
    resolve(msg + " Passei na promisse");
    return

    },tempo)
 })

}

async function executa(){
    const fase1 = await simulaPromise('fase 1', rand());
    console.log(fase1)
}
executa()


// function media(n1,n2){
//     const media = (n1+n2)/2
//     if(media >= 7){
//         console.log(`Aluno com média:${media} aprovado`)
//     }else{
//         console.log(`Aluno com média:${media} reprovado`)
//     }
// }

// const aluno = media(7,8) 