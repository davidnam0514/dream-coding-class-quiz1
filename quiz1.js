// 카운터를 만들기
// 0이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할수있는 카운터를 만들기
// counter 클래스 만들기!

class Counter{
    #value;      // 외부로부터 접근을하지못하게 private로 만든다
    constructor(startValue){ //컨스트럭터에 초기값 매개변수를 지정
    if(isNaN(startValue) || startValue < 0){ // 0보다 작거나 숫자가 아닌값이 들어오면 0으로 초기화해준다.
        this.#value = 0;
    }
    else{
        this.#value = startValue;
    }
    
}
    get value() { //개터를 이용해 현재값을 읽기만 해준다
        return this.#value;
    }
    increment = () => { //증가함수
       this.#value++;
    }
}



const counter = new Counter('얍');
counter.increment();//1
counter.increment();//2
console.log(counter.value);