function solution(date1, date2) {
    return (Number)(date1.join('')) - (Number)(date2.join('')) < 0 ? 1 : 0;
}