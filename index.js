let N=5;
let str="madam";
let n_str="";
    for(let i=N;i>0;i--){
      n_str=n_str+str[i-1];
    }
    if(n_str==str){
        console.log("Yes");
    }
    else{
        console.log("No");
    }