const ProductService = require("../product_service_no_di.js");
const ProductClient = require("../product_client.js");

// 가짜 mock 데이터를 사용하기 위하여 선언해줌 <나머지 모든 의존성은 mock 을 이용함>
jest.mock("../product_client");

// 단위 테스트는 모듈 간의 상호 작용을 테스트 하면 안됨.
// 딱 그 단위 하나만 테스트 해야함
// mock 남용 사례
describe("ProductService", () => {
  // 호출 시 mock 함수가 비동기적으로 배열을 리턴해줌.
  const fetchItems = jest.fn(async () => [
    {
      item: "Milk",
      available: true,
    },
    {
      item: "Banana",
      available: false,
    },
  ]);
  // mock 함수와 productClient를 연결해주는 작업
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });
  let productService;

  beforeEach(() => {
    // 네트워크 상태에 의존하는 코드는 좋지 않다!!!
    // -> mock 을 사용하여 해결할 수 있음

    // ProductService 안에서 ProductClient를 사용하니까
    // ProductClient의 fetchItems function도
    // 내부적으로 테스트가 이루어지게 됨.
    // client 안에서 함수가 실패하거나, 네트워크 에러이거나, 데이터를 받아오지 못할.. 등등의 경우에는
    // 서비스 테스트 코드는 당연히 실패하게 됨.

    // -> 환경적인 요인에 영향을 받지 않고 로직만 검증할 수 있게됨!!
    productService = new ProductService();

    // config 옵션 말고 모든 mock에 대해서 수동적으로 clear 해줌
    fetchItems.mockClear();
    ProductClient.mockClear();
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items).toEqual([
      {
        item: "Milk",
        available: true,
      },
    ]);
    expect(items.length).toBe(1);
  });

  // jest.config 에서 clearMock: true 옵션을 통하여
  // 하나의 테스트가 돌고 난 후 mock data를 초기화 해줌.
  it("test", async () => {
    const items = await productService.fetchAvailableItems();
    expect(fetchItems).toHaveBeenCalledTimes(1);
  });
});
