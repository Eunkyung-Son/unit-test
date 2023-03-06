const check = require("../check.js");

describe("check", () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });
  it("should call onSucess when predicate is true", () => {
    check(() => true, onSuccess, onFail);

    // onSuccess라는 목 함수 object에 있는 mock 이라는 데이터에 호출의 길이가(횟수가),
    // 한 번은 호출이 되어야 한다
    expect(onSuccess.mock.calls.length).toBe(1);
    expect(onSuccess).toHaveBeenCalledTimes(1);

    // calls 에 첫번째로 호출된 함수의 첫번째 인자는 yes가 되어야 한다
    expect(onSuccess.mock.calls[0][0]).toBe("yes");
    expect(onSuccess).toHaveBeenCalledWith("yes");

    expect(onFail.mock.calls.length).toBe(0);
    expect(onFail).toHaveBeenCalledTimes(0);
  });

  it("should call onFail when predicate is false", () => {
    check(() => false, onSuccess, onFail);

    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onFail).toHaveBeenCalledWith("no");
    expect(onSuccess).toHaveBeenCalledTimes(0);
  });
});
