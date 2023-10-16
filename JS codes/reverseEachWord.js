// reverses each word of a string

function reverseWords(str) {
  let word;

  let lines = str.split("\n");
  for (let i = 0; i < lines.length; i++) {
    let words = lines[i].split(" ");

    for (let j = 0; j < words.length; j++) {
      word = words[j].split("").reverse().join("");
      process.stdout.write(word + " ");
    }
  }
}

let s = "reverse each word";
reverseWords(s);
