class Car3 {
  public name: string = "car";
  static wheels = 4;
  // private name: string = "car"; 으로 하면 자식 클래스에서 사용 못함
  // #name: string = "car"; 도 마찬가지!
  // protected name: string = "car"; 으로 하면 자식 클래스에서 사용 가능
  // protected는 자식 클래스 내부에서 참조할 수 있으나 클래스 인스턴스로는 참조할 수 없다.

  // color: string; 대신 public이나 readonly
  // ES6에서는 접근제한자를 지원하지 않았지만 TS에선 지원한다!
  constructor(public color: string) {
    // constructor(readonly color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
    // console.log(this.wheels1); 에러
    console.log(Car3.wheels); // static으로 선언된 정적 멤버변수나 메서드는 this를 쓰지않고 클래스 명을 적어줌
  }
}

const bmw = new Car3("red");

// 접근 제한자(Access modifier) - public, private, protected
class Bmw1 extends Car3 {
  constructor(color: string) {
    super(color);
  }
  showName() {
    console.log(super.name);
  }
}

// public - 자식클래스, 클래스 인스턴스 모두 접근 가능
// protected - 자식클래스에서만 접근 가능
// private - 해당 클래스 내부에서만 접근 가능

// 추상 클래스
abstract class Car4 {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
  }
  abstract doSomething(): void; // 추상클래스 내부의 추상 메서드는 반드시 상속받은 쪽에서 구현을 해줘야 한다
  // 추상화 : 프로퍼티나 메서드의 이름만 선언해주고 구체적인 기능은 상속 받는 쪽에서 구현해줌
  // 추상클래스를 상속받은 객체들이 모두 이 메서드를 가지고 있겠지만 구현은 가지각색 일 수도 있다 이말~
}
// const car = new Car4("red"); new를 이용해선 사용할 수 없다. 상속으로만 가능
// class Bmw extends Car
