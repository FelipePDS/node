<h1 align="center"><img width="75px" src="https://github.com/FelipePDS/node/blob/main/.github/images/nodejs.png" alt="Node.js"></h1>

<p align="center">
    <a href="https://github.com/FelipePDS/node/blob/main/LICENSE"><img src="https://img.shields.io/github/license/FelipePDS/node?style=for-the-badge"></a> 
    <img src="https://img.shields.io/github/last-commit/FelipePDS/node?style=for-the-badge"> 
    <img src="https://img.shields.io/static/v1?label=node&message=v12.18.0&color=339933&style=for-the-badge&logo=node.js&logoColor=white"> 
</p>

<!-- IMAGE -->

<h1>ABOUT :page_with_curl:</h1>

<p>Here I show a brief explanation about Node.js, where I leave a list of exercises and small applications made in Node.js to practice :blush:</p>

<br>

<h1>SUMMARY :clipboard:</h1>

<ul>
    <li><a href="#whats-the-node">1. WHAT'S THE NODE.JS</a></li>
    <ul>
        <li><a href="#how-it-works">1.1 How It Works</a></li>
        <li><a href="#features">1.2 Features</a></li>
        <li><a href="#its-use">1.3 Its Use</a></li>
    </ul>
    <li><a href="#how-to-use-node">2. HOW TO USE NODE.JS</a></li>
    <ul>
        <li><a href="#install-node">2.1 Install :floppy_disk:</a></li>
        <li><a href="#small-node-application">2.2 Running a small application in Node.js :game_die:</a></li>
    </ul>
    <li><a href="#applications-with-node">3. APPLICATIONS WITH NODE :computer:</a></li>
    <ul>
        <li><a href="#getting-started-with-node">3.1 Getting Started With Node.js (study topics)</a></li>
        <li><a href="#exercises-to-perform-to-practice-the-node">3.2 Exercises To Practice The Node.js :pencil2:</a></li>
        <ul>
            <li><a href="#how-to-clone-the-exercises">3.2.1 How To Clone The Exercises :open_file_folder:</a></li>
            <li><a href="#exercises-list">3.2.2 Exercises List</a></li>
        </ul>
    </ul>
    <li><a href="#references">4. REFERENCES :anchor:</a></li>
    <li><a href="#author">5. AUTHOR :bust_in_silhouette:</a></li>
</ul>

<br>

<h1 id="whats-the-node">1. WHAT'S THE NODE.JS</h1>
<p>Para entender o <a href="https://nodejs.org/">Node.js</a> é muito importante saber sobre Javascript. Sabendo disso fica fácil entender que o Javascript é compilado pelos navegadores para que ele funcione, como é o caso do Chrome que tem "no seu coração" o "motorzinho" V8, que compila o código Javascript para executar todos os seus comandos na máquina de qualquer pessoa. Porém hoje não é mais necessário depender dos navegadores para executar o Javascript, pois com o Node.js é possível compilar o Javascript direto na máquina da pessoa que tive-lo (ambiente de desenvolvimento), fornecendo muitos recursos e com um funcionamento que permite realizar coisas no Backend que o torna mais único :sunglasses:. Com esse funcionamento em um ambiente separado do navegador, é possível criar servidores, APIs e muito mais envolvendo o Node.js.</p>
<p>Seu funcionamento é explicado a seguir, dizendo mais a forma do Javascript ler o código e o que isso influencia na qualidade do resultado do código...</p>

<h2 id="how-it-works">1.1 How It Works</h2>
<p>O compilamento do Node.js funciona de forma assíncrona, isso é, ele lê todo o código "de uma vez só", ou seja, ele não bloqueia com cada bloco de código, ele consegue ler todos muito rapidamente, porém quando há um bloco de código com um tempo determinado para executar, ele não o aguarda para avançar para a leitura do resto do código, e quando o tempo necessário para o executar acaba, ele o executa sem problemas. Um exemplo bem básico disso...<br> No Javascript temos a função setInterval(), onde o bloco de código executado como primeiro parâmetro dela vai executar após um determinado tempo em milisegundos que é indicado como segundo parâmetro na função, no resultado do seguinte exemplo vemos que o primeiro bloco de código executa após o determinado tempo (milisegundos) no segundo parâmetro da função setInterval, e mesmo que esse bloco de código esteja vindo antes do outro bloco de código marcado como uma função nomeada de secondBlock(), ele acaba sendo executado apenas depois com a mensagem retornada no console, pois ele está determinado para executar após o determinado tempo:</p>

```javascript
function firstBlock() {
    setTimeout(() => {
        console.log("This is the First Block");
    }, 3000);
}

function secondBlock() {
    console.log("This is the Second Block");
}

firstBlock();
secondBlock();

// Resultado retornado no console:
// This is the Second Block
// This is the First Block
```

<p>Como podemos ver, o segundo bloco de código executou primeiro, pois o primeiro cógido foi determinado a ser executado após os 3000 milisegundos no setInterval</p>
<p>Com essas informações em mãos, é bom ver o que é <kbd><a href="">callback</a></kbd> no Javascript e também treinar a sua prática para ter um bom entendimento.</p>
<p>Para ficar mais claro esse funcionamento assíncrono que o Javascript tem, vamos a um exemplo clássico para explicar isso:</p>
<p>Imagine como funciona o serviço de um garçom para pegar e levar os pedidos (chamados de comandas) dos clientes para a cozinha. Ele basicamente vai ir até a mesa de um cliente que chegou, vai anotar os seus pedidos, e levar a comanda para a cozinha, continuamente ele vai fazendo isso com outros clientes que ainda não foram atendidos, isso independentemente do pedido do outro cliente ainda não ter chegado na mesa dele. Então o garçom NÃO precisa que um pedido de um cliente esteja pronto para que ele entregue-o e assim prosseguir para atender algum outro cliente, ele apenas vai atendendo outros clientes enquanto os pedidos estão sendo realizados na cozinha e quando algum pedido fica pronto, ele termina o que está fazendo no momento e vai levar o pedido para a mesa do cliente que requisitou aquilo.</p>
<p>Isso explica de forma mais simplificada o que foi dito lá cima, isso é, uma single thread, que pode ser usada por exemplo, na requisição de um Banco de Dados, onde um usuário faz uma requisição que é necessária consultar o Banco de Dados da aplicação, chamando uma função <kbd><a href="">Assíncrona</a></kbd> que vai ter um processo especificado para que realize algo quando o processamento da consulta do banco de dados acabar, ou seja, assim quando essa função Assíncrona for realizada, uma callback será adicionada a uma lista de funções a serem executadas, assim ela será executada realizando o que foi especificado a ela. Então graças a isso, é possível receber diversas threads ao mesmo tempo, ou seja, enquanto o usuário manda uma requisição que é necessária consultar o banco de dados como explicado a cima, ele pode ir realizando outras coisas, sem que seja interrompido (um processo chamado de thread única não bloquante).</p>

<h2 id="features">1.2 Advantages</h2>
<p>A sua grande vantagem em relação ao seu funcionamento é o envio e recebimento intenso de dados com o servidor feito em Node.js, ganhando uma grande velocidade e execução mais performada, ou seja, uma thread não bloquante</p>
<p>O Node.js também tem uma grande vantagem em relação ao desenvolvimento, pois ele oferece uma infinidade de recursos e mini bibliotecas que o utiliza, esse forncecimento ocorre através do <a href="https://www.npmjs.com/">NPM</a> (Node Package Manager), que basicamente gerencia pacotes em Node.js para facilitar em alguns desenvolvimentos, utilizando apenas o terminal, é possível importar para o desenvolvimento de algum projeto, uma infinidade de pacotes que ele armazena, como um mini framework que facilita o desenvolvimento em Node.js, que é o Express:</p>

```bash
$ npm install express
```

<p>Ao executar esse comando com o Node.js na sua máquina, ele criará um projeto prototipado do Express desenvolvido em Node.js, com um pacote de desenvolvimento dele chamdo node_modules, havendo os módulos e configurações para desenvolver o projeto em Node.js</p>

<p>Tudo isso possibilita ter um código muito mais limpo, menor e mais estruturado...</p>

<h2 id="its-use">1.3 Its Use</h2>
<p>O Node.js tem sido muito recorrido no mundo da programação desde sua criação em 2009, pelo simples fato de ele oferecer uma solução de funcionamento que se encaixa muito bem para muitas situações como na <b>criação de API</b> ou no <b>desenvolvimento Backend</b>, sempre acompanhado com consultas, requisições e Promises vindas do Banco de Dados principalmente.</p>
<p>Tudo isso como dito, chamou a atenção de muitas empresas, que o usou, como a Netflix, Uber, Linkedin, Nasa, PayPal e muito mais...</p>

<br>

<h1 id="how-to-use-node">2. HOW TO USE NODE.JS</h1>
<p>Para utilizar o Node.js, é necessário apenas o próprio Node.js e um editor de código, que no caso é muito recomendado o <a href="https://code.visualstudio.com/">Visual Studio Code</a>, pois com ele é possível executar muitas coisas, como o próprio Node.js, ou utilizar o terminal para ir adicionando pacotes ao projeto com o NPM</p>

<h2 id="install-node">2.1 Install :floppy_disk:</h2>
<p>Para instalar o Node.js de forma correta, é importante seguir o passo a passo para que seja possível o uso do NPM em sua máquina, o que vai tornar seus projetos muito mais práticos e melhores.</p>
<p>1. Baixe → <kbd><a href="https://nodejs.org/en/download/">Node.js</a></kbd></p>
<p>2. Abra o arquivo baixado para sua intalação</p>
<p>3. Ao seguir as etapas de instação no setup, é importante deixar marcado a inclusão do NPM</p>
<p>Quando terminado, dê o comando <code>node --version</code> e <code>npm --version</code> no terminal para verificar se eles foram instalados corretamente</p>

<h2 id="small-node-application">2.2 Running a small application in Node.js :game_die:</h2>

<br>

<h1 id="applications-with-node">3. APPLICATIONS WITH NODE.JS :computer:</h1>
<p>Aqui deixo alguns mini-projetos feito em Node.js para praticar, caso queira vê-los ou queira utilizá-los como ideia para desenvolver algo e praticar, deixo-os para <a href="#how-to-clone-the-exercises">clonar</a>.</p>

<h2 id="getting-started-with-node">3.1 Getting Started With Node.js (study topics)</h2>
<p>A forma mais símples de entender o Node.js assim como muitas coisas na programação, é praticando, pegando os recursos que ele oferece e os manipulando para ver seu funcionamento...</p>

<h2 id="exercises-to-perform-to-practice-the-node">3.2 Exercises To Practice The Node.js :pencil2:</h2>

<p>Click on the exercises and small projects to view their objectives and resolutions, and if you want to clone them, there is an explanation on.</p>

<h3 id="how-to-clone-the-exercises">3.2.1 How To Clone The Exercises :open_file_folder:</h3>

<p>If you want to clone one of the exercises (subdirectories), just have <kbd><a href="https://git-scm.com/downloads">git bash</a></kbd> on your computer to give the following commands</p>

```bash
# Create a folder with the name of the exercise and enter it
$ mkdir name-dir && cd name-dir

# Start a git repository to access the repository
$ git init

# Crawl the repositorie
$ git remote add -f origin https://github.com/FelipePDS/node

# Active sparse checkout
$ git config core.sparseCheckout true

# Create a file in the path: .git/node/sparse-checkout
# And insert the name of the subdirectory you want to clone
$ echo 'nameOfTheSubdirectory' >> .git/node/sparse-checkout

# Pull the subdirectory
$ git pull origin main
```

<blockquote>Font: <a href="https://terminalroot.com.br/2019/09/como-clonar-somente-um-subdiretorio-com-git-ou-svn.html">terminalroot.com.br</a></blockquote>

<p>If you want to clone the entire project: <code>$ git clone https://github.com/FelipePDS/node.git</code></p>

<h3 id="exercises-list">3.2.2 Exercises List</h3>

<table>
    <tr align="center">
      <th>EXERCISE</th>
      <th>DESCRIPTION</th>
    </tr>
    <tr align="center">
        <td><kbd><a href="">Exercise</a></kbd></td>
        <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</td>
    </tr>
    <tr align="center">
        <td><kbd><a href="">Exercise</a></kbd></td>
        <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</td>
    </tr>
    <tr align="center">
        <td><kbd><a href="">Exercise</a></kbd></td>
        <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</td>
    </tr>
</table>

<br>

<p>Agora é praticar Node.js e se tornar um mestre utilizando-o... :laughing:</p>
<img width="700px" src="http://clubedosgeeks.com.br/wp-content/uploads/2016/01/dormrm.gif" alt="GIF Programming">

<h1 id="references">4. REFERENCES :anchor:</h1>

<ul>
    <li><a href="https://app.rocketseat.com.br/discover">Rocketseat Discover</a></li>
    <li>Materials:</li>
    <ul>
        <li><a href="https://nodejs.org/">Node.js</a></li>
        <li>Code Editor: <a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
        <li>Terminal: <a href="https://git-scm.com/downloads">Gitbash</a></li>
        <li>Package Manager: <a href="https://yarnpkg.com/">Yarn</a></li>
    </ul>
</ul>

<br>

<h1 id="author">5. AUTHOR :bust_in_silhouette:</h1>

<p align="center"><img width="100px" src="https://avatars.githubusercontent.com/u/64941387?s=400&u=a9c0d7a657b0b0b644d41cd88966e0a89d0a67a6&v=4"/></p>
<p align="center">This repository was made by<br><a href="https://felipepds.github.io/felipepds-resume/">FelipePDS</a> :heart:</p>
<p align="center">
    <a href="https://www.linkedin.com/in/felipe-p-da-silva-a55b891ba/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BiErPy3g7Q1KGOaD%2BsGw%2Fpg%3D%3D"><img src="https://img.shields.io/static/v1?label=+&message=Felipe+P.+Da+Silva&color=0A66C2&style=flat&logo=linkedin&logoColor=white"/></a> 
    <a href="https://twitter.com/FelipePintoDaS1"><img src="https://img.shields.io/static/v1?label=+&message=@FelipePintoDaS1&color=1DA1F2&style=flat&logo=twitter&logoColor=white"/></a> 
    <img src="https://img.shields.io/static/v1?label=+&message=felipepdasilva66@gmail.com&color=EA4335&style=flat&logo=gmail&logoColor=white"/>
</p>
<p align="center"><a href="https://github.com/FelipePDS/node/blob/main/LICENSE">MIT License</a> &bull; &copy; FelipePDS</p>