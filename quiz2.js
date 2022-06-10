//  정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어보자.
// 직원들의 정보: 이름, 부서이름, 한달 근무시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원


class Employee{
    constructor(name, department, totalHour, payRate){ // 직원들의 정보와, 페이레이트!! 이걸까먹었다.
        this.name = name;
        this.department = department;
        this.totalHour =totalHour;
        this.payRate = payRate;   // 그대로 찍어와주고
    }

    calculate = () => {
       return this.totalHour * this.payRate; // 이것을위해 페이레이트가 필요했다. 

    }
}

class PartTimer extends Employee{
    static PAY_RATE = 8000; // 매개변수에 숫자는 보기좋지않고, 코드를볼때 뭔지찾기 힘드므로, static변수를 이용하여 페이레이트를 할당한다.
    constructor(name, department, totalHour){ // 직원들의 정보가 담긴건 3개고, 그밑에 슈퍼로 4개값을 상속해준다.
        super(name, department, totalHour, PartTimer.PAY_RATE);//static변수는 클래스.스태틱변수 로 표기해준다. 왜인지는 공부해보자. 
    }
    }


class FullTimer extends Employee{
    static PAY_RATE = 10000;
    constructor(name, department, totalHour){
        super(name, department, totalHour, FullTimer.PAY_RATE);

    }
}



const jihye = new FullTimer('지혜', 'server', 30);
const lera = new PartTimer('발레리아', 'kitchen', 40);
console.log(jihye.calculate());
console.log(lera.calculate());