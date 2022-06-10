//  정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어보자.
// 직원들의 정보: 이름, 부서이름, 한달 근무시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원


class Employee{
    constructor(name, department, totalHour, payRate){
        this.name = name;
        this.department = department;
        this.totalHour =totalHour;
        this.payRate = payRate;
    }

    calculate = () => {
       return this.totalHour * this.payRate; 

    }
}

class PartTimer extends Employee{
    static PAY_RATE = 8000;
    constructor(name, department, totalHour){
        super(name, department, totalHour, PartTimer.PAY_RATE);
    }
    }


class FullTimer extends Employee{
    static PAY_RATE = 10000;
    constructor(name, department, totalHour){
        super(name, department, totalHour, FullTimer.PAY_RATE);

    }
}

// const jane = new Partimer('제인','server',100);
// console.log(jane.calculate()) ;

const jihye = new FullTimer('지혜', 'server', 30);
const lera = new PartTimer('발레리아', 'kitchen', 40);
console.log(jihye.calculate());
console.log(lera.calculate());