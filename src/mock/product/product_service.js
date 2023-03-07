class ProductService {
  // class 내부에서 스스로의 의존을 결정하고, 정의하고, 만들어서 사용하는 것은
  // dependency injection 원칙에 어긋난다.
  // 필요한 것을 내부적으로 직접 만들어서 사용하는 것이 아니라, 외부에서 받아와야 한다.

  // 의존성의 역전 개념
  constructor(ProductClient) {
    this.productClient = ProductClient;
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
