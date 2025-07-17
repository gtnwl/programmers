function solution(num_list) {
    const sum = num_list.reduce((acc, curr) => acc + curr, 0);
    const times = num_list.reduce((acc,curr)=> acc* curr,1)
 
    
      return times < sum * sum ? 1 : 0;
}