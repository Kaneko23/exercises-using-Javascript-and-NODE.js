const prompt = require('prompt-sync')();

const ndesejado = prompt(`qual numero vc deseja?`)


for (let ndado1 = 1; ndado1 <= 6; ndado1++) {
   for (let ndado2 = 1; ndado2 <= 6;  ndado2++) {
        for (let ndado3 = 1; ndado3 <= 6; ndado3++) {   
            if((ndado1 + ndado2 + ndado3)== ndesejado){
            console.log(`${ndado1} • ${ndado2} • ${ndado3}`);
            }
        }
   }
    
}