const function1=(string)=>{
    for(let i=0; i<string.length;i++){
        if(string[i]===string[i+1]){
            console.log(`${string[i]}:${i},${string[i+1]}:${i+1}`);
        }
    }
};
 

function1('abbcc');
