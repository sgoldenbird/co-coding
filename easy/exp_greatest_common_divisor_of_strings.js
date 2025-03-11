const gcdOfStrings = function (str1, str2) {
  // 두 문자열을 합쳤을 때 순서가 달라진다면, 공통 패턴이 없으므로 ""를 반환합니다.
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  // 두 수의 최대공약수를 구하는 헬퍼 함수 (유클리드 알고리즘: 유클리드 호제법(Euclidean Algorithm))
  const gcd = (a, b) => {
    return b === 0 ? a : gcd(b, a % b);
  };

  // 두 문자열 길이의 최대공약수를 구합니다.
  const gcdLength = gcd(str1.length, str2.length);

  // str1의 처음 gcdLength만큼의 부분문자열을 반환합니다.
  return str1.substring(0, gcdLength);
};
