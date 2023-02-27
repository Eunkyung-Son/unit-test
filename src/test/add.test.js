const add = require("../add.js");

test("", () => {
  expect(add(1, 2)).toBe(3);
});

/**
 *  해당하는 테스트 코드가 없다면 에러가 남
 *  test("", () => {
 *  expect(3).toBe(3);
 *  });
 * jest config -> collectCoverage -> false
 * 성공한 정보만 나오며, 테스트 커버리지는 나오지 않음
 */

/** package.json watchAll option => 작업하고 있는 파일이 변경될 때 마다 테스트 코드 실행 */
/** package.json watch option => 변경되지 않은 테스트 코드는 실행하지 않음 (git) */
