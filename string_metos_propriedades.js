var mensagem = 'A arte de programar';

// Tamanho da string
 var tamanho = mensagem.length;
 console.log(tamanho)


 // Onde inicia uma palavra na frase
 indice = mensagem.indexOf('programar');
 console.log(indice);

 // Ultima ocorrência de uma palavra
 indice = mensagem.lastIndexOf('a');
 console.log('Última ocorrencia de "a"', indice);


 // Recuperando uma substring
 var novaString = mensagem.substring(2,6);
 //console.log(novaString);


 // A função slice tambem retorno substrings
 var novaString = mensagem.slice(2, 6);
 //console.log(novaString);


 // Usando slice() para deslizar sobre a string de tràz para frente
 novaString = mensagem.slice(-9, -1);
 //console.log(novaString);

 novaString = mensagem.substr(-12,12);
 console.log(novaString);

 var s = 'Seja bem vindo <nome>';
 console.log(s.replace('<nome>', 'Jones'))

 console.log(s.toUpperCase());
 console.log(s.toLowerCase());

 //Concatenando strings
 console.log('Olá'.concat(' Jones ', 'Quito ', 'o bonito'));

 console.log(s.charAt(9));