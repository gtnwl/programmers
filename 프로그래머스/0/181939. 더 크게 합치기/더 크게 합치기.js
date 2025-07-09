function solution(a, b) {
    var answer = 0;
    let ab = Number(`${a}${b}`);
    let ba = Number(`${b}${a}`);
    return ab >= ba ? ab : ba;
}