const h1 = document.querySelector('#h1')

fetch('pessoas.json')
  .then(res => res.json())
  .then(dados => {
    const dadosString = JSON.stringify(dados, null, 2);
    console.log(dadosString);

    h1.innerHTML = dadosString.replace(/"/g, '')
    // Faça o que for necessário com a dadosString aqui
  })
  .catch(erro => {
    console.error('Ocorreu um erro:', erro);
  });



// function rand(){
//  const s = parseInt(Math.random() * 3000)
//    return s <= 0 ? Number(s + 1) : s 
// }

// function simulaPromise(msg,tempo){
//  return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//      if(typeof msg !== 'string'){
//         reject('CAI NO ERRO');
//         return
//      }
//     resolve(msg + " Passei na promisse<br>" );
//     return

//     },tempo)
//  })

// }

// const res = document.querySelector("#h1")

// async function executa(){
//   try{  
//     const fase1 = await simulaPromise('fase 1', rand());
//     res.innerHTML += fase1;

//     const fase2 = await simulaPromise('fase 2', rand());
//     res.innerHTML += fase2;;

//     const fase3 = await simulaPromise('fase 3', rand());
//     res.innerHTML += fase3;}
//   catch(e) {
//     console.log(e)
//   }
// } 
// executa()


// // function media(n1,n2){
// //     const media = (n1+n2)/2
// //     if(media >= 7){
// //         console.log(`Aluno com média:${media} aprovado`)
// //     }else{
// //         console.log(`Aluno com média:${media} reprovado`)
// //     }
// // }

// // const aluno = media(7,8) 