const Calculator = require("../calculator.js");

/** 비슷한 기능들 끼리 묶음 */
describe("Calculator", () => {
  /** caculator를 가리키는 3인칭 주어 */
  /** test를 사용해도 됨  */
  it("inits with 0", () => {
    /** 각 각의 테스트는 서로 독립적이여야 함
     * 다음 테스트에 영향을 미치면 안됨
     * 코드 중복을 제거하기 위하여
     * beforeEach를 사용할 수 있음.
     */
    const cal = new Calculator();
    expect(cal.value).toBe(0);
  });

  it("sets", () => {
    const cal = new Calculator();
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it("clear", () => {
    const cal = new Calculator();
    cal.set(0);
    expect(cal.value).toBe(0);
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
