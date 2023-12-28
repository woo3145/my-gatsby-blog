---
title: '밀러-라빈 소수 판별법 알고리즘[c++]'
description: ''
date: '2023-12-29'
banner:
  src: '../../images/thumbnails/7_thumbnail.png'
  alt: 'algorithm_thumbnail'
  caption: 'DALL·E 3'
categories:
  - 'Algorithm'
keywords:
  - '정수론'
---

밀러-라빈 알고리즘은 주어진 숫자가 소수인지를 판별하는 확률적 테. 이 알고리즘은 특히 큰 숫자에 대해 효과적이며, 시간복잡도는 O(k\*log n^2)이다.

## 기본 원리

밀러 라빈 소수 판별법을 이해하기 위해선 다음 내용을 알아야 한다.

#### 1. 페르마의 소정리

p가 소수이고 a가 정수라고 했을때 다음 식이 성립한다.

$$
a^p\equiv a (\bmod\ p) \qquad\qquad\qquad \\
a^{p-1}\equiv 1 (\bmod\ p) \quad \text{if } a\%p \neq 0
$$

#### 2. 소수와 이차방정식의 해

소수의 유일한 약수가 1과 자기 자신 뿐이라는 속성에 근거

$$
x^2 \equiv 1  (\bmod\ p) \text{이면, } \\
x \equiv 1 (\bmod\ p) \quad \text{or }  \quad x \equiv -1 (\bmod\ p) \text{이다. }
$$

##### 증명

$$
x^2 \equiv 1  (\bmod\ p). \\
x^2 - 1 \equiv 0 (\bmod\ p). \\
(x - 1)(x + 1) \equiv 0 (\bmod\ p). \\
x - 1 \equiv 0 (\bmod\ p) \text{ or } x + 1 \equiv 0 (\bmod\ p). \\
x \equiv 1 (\bmod\ p) \quad \text{or} \quad x \equiv -1 (\bmod\ p). \\
$$

### 구현

0. 사용자 지정 타입 설정

```cpp
#define lint unsigned long long
```

1. 모듈러 거듭제곱

- _연산에서 2^64-1 _ 2^64-1 까지 올 수 있기 때문에 \_\_int128_t 타입으로 형변환을 하지않으면 연산 오버플로가 나게된다.

```cpp

lint modPow(lint base, lint exp, lint mod) {
    lint ret = 1;
    base = base % mod;
    while(exp) {
        if(exp & 1) ret = ((__int128_t)ret * base) % mod;
        base = ((__int128_t)base * base) % mod;
        exp >>= 1;
    }
    return ret;
}
```

2. 밀러-라빈 테스트

- p-1을 d로 정의하고 2로 나누면서 d가 홀수까지 나눠졌을때(d\*2^r) 페르마의 정리가 성립하는지 확인하는 함수이다.
- 소수의 성질에 따라 나누는 도중 나머지가 -1일때만 소수일 확률이 있다고 판단한다. (1이면 다음 결과(seed^(d-1))의 나머지가 1 or -1이 되어야 하기때문에 넘어감)

```cpp
// true: 합성수
// false: 소수일 가능성
bool miller_rabin(lint num, lint seed) {
  if (num % seed == 0) return true;
  lint d = num - 1;
  while (1) {
    lint tmp = modPow(seed, d, num);
    if (d & 1)
      return (tmp != 1 && tmp != num - 1);
    else if (tmp == num - 1)
      return 0;
    d >>= 1;
  }
  return true;
}
```

3. 소수 판별

- 1과 짝수는 조건문으로 전처리시켜주고 2일때만 소수로 판단한다.
- seeds: 판별할 수 n의 크기가 작을 경우, 작은 수의 a에 대해서만 검사해보면 결정론적으로 소수를 판별할 수 있다는 것이 알려져 있다.
  - n < 4,759,123,141 일 경우(2^32 정도) : {2, 7, 61}
  - n < 3,317,044,064,679,887,385,961,981(2^81 정도) : {... 41} 까지의 소수

```cpp
#include <vector>

bool isPrime(lint n) {
  if (n < 2 || (n % 2 == 0)) return (n == 2);
  vector<lint> seeds({2, 7, 61});

  for(auto& seed : seeds) {
    if (n == seed) return 1;
    if (miller_rabin(n, seed)) return 0;
  }
  return 1;
}
```
