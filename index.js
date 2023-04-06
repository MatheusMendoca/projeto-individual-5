import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const properties = [];

function readProperties() {
  rl.question('Digite uma propriedade de CSS (ou SAIR para finalizar): ', function(property) {
    if (property.toUpperCase() === 'SAIR') {
      const sortedProperties = properties.sort();
      console.log(sortedProperties.join('\n'));
      rl.close();
      return;
    }

    properties.push(property);
    readProperties();
  });
}

readProperties();

readProperties();