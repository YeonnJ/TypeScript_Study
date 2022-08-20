interface Product {
  id?: number;
  name?: string;
  price?: number;
}

//상품목록을 불러오는 API함수
function fetchProducts(): Promise<Product[]> {
  //...
}

//특정 상품 상세페이지에서 불러올때 필요한 정보들
// function displayProductDetail(shoppingListItem: {
//   id: number;
//   name: string;
//   price: number;
// }) {
//   //...
// }

type ShoppingListItem = Pick<Product, "id" | "name">;
function displayProductDetail(shoppingListItem: ShoppingListItem) {
  //...
}
