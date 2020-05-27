export const string = "Привет! Как дела?";

const vowels = ["у", "е", "ы", "а", "о", "э", "ё", "я", "и"];

const getVowels = (string) => {
  let extractedVowels = "";
  for (let i = 0; i < string.length; i++) {
    const currentLetter = string[i];

    if (vowels.indexOf(currentLetter) !== -1) {
      extractedVowels += currentLetter;
    }
  }

  return extractedVowels;
};

const getVowels2 = (string) => {
  let extractedVowels = "";
  for (let i = 0; i < string.length; i++) {
    const currentLetter = string[i];

    if (vowels.includes(currentLetter)) {
      extractedVowels += currentLetter;
    }
  }

  return extractedVowels;
};

const getVowels3 = (string) =>
  string
    .split("")
    .filter((letter) => vowels.includes(letter))
    .join("");

export const result = getVowels3(string);
