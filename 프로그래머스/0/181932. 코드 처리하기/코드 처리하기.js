function solution(code) {
    let answer = ""
    let mode = 0;
    
    for(let i = 0; i < code.length; i++){
        if(code[i] === '1'){
            mode = 1 -mode
        }else{
            if (mode ===0 && i % 2 === 0){
                answer += code[i];
            }else if(mode === 1 && i % 2 ===1){
                answer += code[i]
            }
        }
    }
    
    return answer || "EMPTY";
}