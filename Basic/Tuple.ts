// Tuple => array를 생성
// 1. 최소한의 길이를 가져야하며
// 2. 특정위치에 특정타입이 있어야한다.

const array: readonly [string, number, boolean] = ["hi", 1, true];

//typescript의 보호장치를 비활성화하려면 any를 사용할 것

const anyA: any[] = [1, 2, 3, 4];
const anyB: any = true;

anyA + anyB;
