


function rand(){
 const s = parseInt(Math.random() * 3000)
   return s <= 0 ? Number(s + 1) : s 
}

function simulaPromise(msg,tempo){
 return new Promise((resolve,reject)=>{
    setTimeout(()=>{
     if(typeof msg !== 'string'){
        reject('CAI NO ERRO');
        return
     }
    resolve(msg + " Passei na promisse<br>" );
    return

    },tempo)
 })

}

const res = document.querySelector("#h1")

async function executa(){
  try{  
    const fase1 = await simulaPromise('fase 1', rand());
    res.innerHTML += fase1;

    const fase2 = await simulaPromise('fase 2', rand());
    res.innerHTML += fase2;;

    const fase3 = await simulaPromise('fase 3', rand());
    res.innerHTML += fase3;}
  catch(e) {
    console.log(e)
  }
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