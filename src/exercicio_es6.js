// 01 - Use o F1 para inicar um novo terminal
// 02 - instale o babel usando o comando "npm install --save-dev @babel/core @babel/cli"
// 03 - após a instalação vá no arquivo package,json e adicione este código acima de devDependencies:
// "scripts": {
//     "build": "babel src -d dist"
// },
// 04 - Crie a pasta src para que o comando build possa funcionar
// 05 - Instale o plugin do babel preset com o comando "npm install --save-dev @babel/preset-env"
// 07 - crie o arquivo de configiração do babel com o nome de "babel.config.json", dentro dele adicione o código do plugin:
// {
//     "presets": ["@babel/preset-env"]
// }

// Criação de objeto com os dados dos alunos:
const alunosAvaliadosEmFrontend = [
    { nome: 'Gian', nota: 5 },
    { nome: 'André', nota: 9 },
    { nome: 'Daniel', nota: 7 },
    { nome: 'Pedro', nota: 8 },
    { nome: 'Gizele', nota: 4 },
    { nome: 'Gabriel', nota: 6 },
    { nome: 'Helena', nota: 8 },
    { nome: 'Marcia', nota: 5 },
    { nome: 'Marcos', nota: 6 },
    { nome: 'Nina', nota: 5 }
];

// Função para apresentação dos alunos aprovados:
const relatorioDosAlunosAprovados = (alunosAvaliadosEmFrontend) =>
    alunosAvaliadosEmFrontend.filter(alunosAvaliadosEmFrontend => alunosAvaliadosEmFrontend.nota >= 6);

const alunosQuePassaram = relatorioDosAlunosAprovados(alunosAvaliadosEmFrontend);
console.log("Estes foram os alunos que PASSARAM em Frontend.");
console.log(alunosQuePassaram);

// Função para apresentação dos alunos reprovados:
const relatorioDosAlunosReprovados = (alunosAvaliadosEmFrontend) =>
    alunosAvaliadosEmFrontend.filter(alunosAvaliadosEmFrontend => alunosAvaliadosEmFrontend.nota <= 5);

const alunosQueReprovaram = relatorioDosAlunosReprovados(alunosAvaliadosEmFrontend);
console.log("Estes foram os alunos que REPROVARAM em Frontend.");
console.log(alunosQueReprovaram);