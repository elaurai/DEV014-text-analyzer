const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let count = 0;
    if (text.trim() !== "") {
      const words = text.trim().split(" ");
      count = words.length;
    }
    return count;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.

    let characterCount = 0;
    for (let i = 0; i < text.length; i++) {
      characterCount++;
    }
    return characterCount;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.

    let textNoSpace = "";

    for (let i = 0; i < text.length; i++) {
      if (text[i] !== " " && text[i] !== "," && text[i] !== ".") {
        textNoSpace += text[i];
      }
    } 
    return textNoSpace.length;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    
    const countWords = analyzer.getWordCount(text);
    let countCharacter = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== " ") {
        countCharacter++;
      }
    }
    return parseFloat((countCharacter/countWords).toFixed(2));
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(" ");
    let count = 0;
    for (let i = 0; i < words.length; i++) {
      let temp = words[i];
      if(temp[temp.length-1] ==='.'){
        temp=temp.slice(0, -1)
      }
      if (!isNaN(parseFloat(temp)) && !isNaN(Number(temp))) {

        count++;
      }
    }

    return count;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(" ");
    let sum = 0;
    for (let i = 0; i < words.length; i++) {
      let temp = words[i];
      if(temp[temp.length-1] ==='.'){
        temp=temp.slice(0, -1)
      }
      if (!isNaN(parseFloat(temp)) && !isNaN(Number(temp))) {
        const array_num = parseFloat(words[i]);
        sum = array_num + sum;
      }
    }
    return sum;
  },
};

export default analyzer;
