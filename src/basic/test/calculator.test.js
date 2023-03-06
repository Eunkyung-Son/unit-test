const Calculator = require("../calculator.js");

/** 비슷한 기능들 끼리 묶음 */
describe("Calculator", () => {
  /** 각 각의 테스트는 서로 독립적이여야 함
   * 다음 테스트에 영향을 미치면 안됨
   * 코드 중복을 제거하기 위하여
   * beforeEach를 사용할 수 있음.
   */
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });
  /** caculator를 가리키는 3인칭 주어 */
  /** test를 사용해도 됨  */
  it("inits with 0", () => {
    expect(cal.value).toBe(0);
  });

  it("sets", () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it("clear", () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it("add", () => {
    cal.set(1);
    cal.add(2);
    expect(cal.value).toBe(3);
  });
  /** 커버리지 보완하기 위한 코드 */
  it("add should throw an error if value is greater than 100", () => {
    // 에러를 예상하는 코드, 에러를 던짐
    expect(() => {
      cal.add(101);
    }).toThrow("Value can not be greater than 100");
  });

  it("substract", () => {
    cal.set(10);
    cal.subtract(10);
    expect(cal.value).toBe(0);
  });

  it("multiplies", () => {
    cal.set(10);
    cal.multiply(10);
    expect(cal.value).toBe(100);
  });

  // divides의 여러가지 상황
  // 서로 연관 있는 테스트를 divides로 묶음
  describe("divides", () => {
    it("'0 / 0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it("'1 / 0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it("'4 / 4 === 1", () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});

// test("set", () => {
//   expect(3).toBe(3);
// });

// test("clear", () => {
//   expect(0).toBe(0);
// });

// test("add", () => {
//   expect(101).toBe(101);
//   expect(100).toBe(100);
//   expect(3).toBe(3);
//   expect(3).toThrow(Error);
// });

// test("subtract", () => {
//   expect(subtract(101)).toBe(-101);
// });
