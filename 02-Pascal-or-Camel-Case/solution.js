function solve() {
  let input = (document.getElementById('text').value).toLowerCase();
  let currentCase = document.getElementById('naming-convention').value;

  let words = input.split(' ');
  let result = '';

  if(currentCase === "Camel Case") {
    result += words[0];
    for (let i = 1; i < words.length; i++) {
      result += words[i][0].toUpperCase() + words[i].slice(1);
    }

  } else if (currentCase === "Pascal Case") {
    
    for (let i = 0; i < words.length; i++) {
      result += words[i][0].toUpperCase() + words[i].slice(1);
    }
    
  } else {
    result = "Error!";
  }

  let output = document.getElementById('result');
  output.textContent = result;
}