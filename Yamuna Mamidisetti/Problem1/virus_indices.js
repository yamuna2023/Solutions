

// virusIndices Function 
const virusIndices=(p,v)=>{
    var indexes=[]
    for (let i=0 ;i<=p.length-v.length;i+=1){
    let count=0
    for (let j=0;j<=v.length-1;j++){
        if( ( p.substr(i,v.length)[j]==v[j])==false ){
            count+=1
        }   
    }
        if(count<=1){
    indexes.push(i)
    }
}

    if(indexes.length>0){
    console.log(indexes.join(" "))
}
    else{
    console.log("No Match!")
}
}

// Reading Inputs
const numOfInputs= prompt("")
const inputsArray = []
for(let inputs=0;inputs<numOfInputs;inputs++){
      const b=prompt("")
      inputsArray.push(b)
}

// virusIndices function call
for(let inputs=0;inputs<numOfInputs;inputs++){
    const str=inputsArray[inputs].split(" ")
    virusIndices(str[0],str[1])
}


