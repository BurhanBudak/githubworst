let tab = '';
console.log('x\tx^2\tx^3');
for(let x =1;x<=12;x++){
    tab += x +'\t'+ Math.pow(x,2) +'\t'+ Math.pow(x,3)+'\n';
}
console.log(tab);