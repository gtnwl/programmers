function solution(my_string, overwrite_string, s) {
    
    let firstWord = my_string.slice(0, s);
    my_string = my_string.substring(s);
    
    let lastWord = my_string.substring(overwrite_string.length);
    return firstWord + overwrite_string + lastWord;
    
    // const before = my_string.slice(0, s);
    // const after = my_string.slice(s + overwrite_string.length);
    // return before + overwrite_string + after;
}