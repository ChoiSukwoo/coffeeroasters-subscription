// 각 단어의 앞자리를 대문자로 바꾸는 함수
export const capitalizeFirstLetterInWords = (str: string) => {
  if (!str) return str;

  const words = str.split(' ');
  const capitalizedWords = words.map((word) => capitalizeFirstLetter(word));

  return capitalizedWords.join(' ');
};

// test 앞자리를 대문자로 바꾸는 함수
export const capitalizeFirstLetter = (str: string) => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// 각 글자의 앞자리를 소문자로 바꾸는 함수
export const decapitalizeFirstLetter = (str: string) => {
  if (!str) return str;
  return str.charAt(0).toLowerCase() + str.slice(1);
};
