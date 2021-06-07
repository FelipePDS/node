<h1 align="center"><img width="75px" src="https://github.com/FelipePDS/node/blob/main/.github/images/nodejs.png" alt="Node.js"></h1>

<p align="center">
    <a href="https://github.com/FelipePDS/node/blob/main/LICENSE"><img src="https://img.shields.io/github/license/FelipePDS/node?style=for-the-badge"></a> 
    <img src="https://img.shields.io/github/last-commit/FelipePDS/node?style=for-the-badge"> 
    <img src="https://img.shields.io/static/v1?label=node&message=v12.18.0&color=339933&style=for-the-badge&logo=node.js&logoColor=white"> 
</p>

<img src=".github/images/server.png" />

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
<p>To understand <a href="https://nodejs.org/">Node.js</a> it is very important to know about Javascript. Knowing this, it is easy to understand that Javascript is compiled by browsers to make it work, as is the case with Chrome that has "at its heart" the "little engine" V8, which compiles the Javascript code to execute all its commands on the machine anyone. However, today it is no longer necessary to depend on browsers to execute Javascript, because with Node.js it is possible to compile Javascript directly on the machine of the person who had it (development environment), providing many resources and with a functioning that allows to perform things in the Backend that makes it more unique :sunglasses:. With this functioning in a separate browser environment, it is possible to create servers, APIs and much more involving Node.js.</p>
<p>Its operation is explained below, saying more how Javascript reads the code and what it influences on the quality of the code result...</p>

<h2 id="how-it-works">1.1 How It Works</h2>
<p>The compilation of Node.js works asynchronously, that is, it reads all the code "at once", that is, it does not block with each block of code, it can read them all very quickly, but when there is a block of code with a set time to execute, it does not wait for you to proceed to read the rest of the code, and when the time needed to execute it runs out, it executes without problems. A very basic example of this...<br> In Javascript we have the function setInterval(), where the code block executed as its first parameter will execute after a certain time in milliseconds which is indicated as the second parameter in the function, as a result of the following example we see that the first code block executes after the given time (milliseconds) in the second parameter of the setInterval function, and even if that code block is coming before the other code block marked as a function named secondBlock(), it ends up being executed only afterwards with the message returned in the console , as it is determined to run after a certain time:</p>

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

// Result returned on the console:
// This is the Second Block
// This is the First Block
```

<p>As we can see, the second block of code executed first, since the first code was determined to be executed after 3000 milliseconds in setInterval</p>
<p>With this information in hand, it is good to see what <kbd><a href="">callback</a></kbd> is in Javascript and also to train your practice to have a good understanding.</p>
<p>To make this asynchronous operation that Javascript has more clear, let's go to a classic example to explain this:</p>
<p>Imagine how the service of a waiter works to take and take orders (called commands) from customers to the kitchen. He will basically go to the table of a customer who arrived, will take his orders, and take the command to the kitchen, continuously he will do this with other customers who have not yet been served, regardless of the order of the other customer not yet have arrived at his table. So the waiter does NOT need an order from a customer to be ready for him to deliver it and thus proceed to serve another customer, he just goes on serving other customers while the orders are being placed in the kitchen and when any order is ready, he finishes what you are doing at the moment and will take the order to the table of the customer who requested it.</p>
<p>This explains in a more simplified way what was said above, that is, a single thread, which can be used, for example, in the request of a Database, where a user makes a request that is necessary to consult the Database of application, calling an <kbd><a href="">Asynchronous</a></kbd> function that will have a specified process to do something when the database query processing is finished, that is, so when that Asynchronous function is performed, a callback will be added to a list of functions to be executed , so it will be executed by doing what has been specified to it. So thanks to this, it is possible to receive several threads at the same time, that is, while the user sends a request that it is necessary to consult the database as explained above, he can carry out other things, without being interrupted (a process called a non-blocking single thread).</p>

<h2 id="features">1.2 Advantages</h2>
<p>Its great advantage in relation to its operation is the intense sending and receiving of data with the server made in Node.js, gaining a great speed and more performed performance, that is, a non-blocking thread</p>
<p>Node.js also has a great advantage in relation to development, as it offers a multitude of resources and mini libraries that use it, this supply occurs through the <a href="https://www.npmjs.com/">NPM</a> (Node Package Manager), which basically manages packages in Node.js to facilitate in some developments, using only the terminal, it is possible to import for the development of some project, a multitude of packages that it stores, as a mini framework that facilitates the development in Node.js, which is Express:</p>

```bash
$ npm install express
```

<p>When executing this command with Node.js on your machine, it will create a prototyped Express project developed in Node.js, with a development package of it called node_modules, with the modules and configurations to develop the project in Node.js</p>

<p>All of this makes it possible to have a much cleaner, smaller and more structured code...</p>

<h2 id="its-use">1.3 Its Use</h2>
<p>Node.js has been widely used in the programming world since its creation in 2009, due to the simple fact that it offers a working solution that fits very well for many situations such as <b>API creation</b> or <b>Backend development</b>, always accompanied with queries. , requisitions and Promises coming from the Database mainly.</p>
<p>All of this as said, drew the attention of many companies, who used it, such as Netflix, Uber, Linkedin, Nasa, PayPal and more...</p>

<br>

<h1 id="how-to-use-node">2. HOW TO USE NODE.JS</h1>
<p>To use Node.js, you only need Node.js itself and a code editor, in which case <a href="https://code.visualstudio.com/">Visual Studio Code</a> is highly recommended, because with it you can run many things, such as Node.js itself, or use the terminal to add packages to the project with NPM</p>

<h2 id="install-node">2.1 Install :floppy_disk:</h2>
<p>To install Node.js correctly, it is important to follow the step-by-step to make it possible to use NPM on your machine, which will make your projects much more practical and better.</p>
<p>1. Download → <kbd><a href="https://nodejs.org/en/download/">Node.js</a></kbd></p>
<p>2. Open the downloaded file for your installation</p>
<p>3. When following the installation steps in the setup, it is important to leave the inclusion of NPM checked</p>
<p>When finished, give the <code>node --version</code> and <code>npm --version</code> command on the terminal to verify that they have been installed correctly</p>

<h2 id="small-node-application">2.2 Running a small application in Node.js :game_die:</h2>
<p>The main functionality of Node.js is to work with <a href="https://github.com/FelipePDS/node/tree/main/01_modules">Modules</a> and <a href="https://github.com/FelipePDS/node/tree/main/02_http">HTTP</a>.</p>
<p>See the <a href="https://www.youtube.com/watch?v=QfcozcbDhNM&list=PLAW7Bip9qIebPp4STtLYyLNkgYFEkDmCl&index=1&t=199s">Rocketseat Node.js Masterclass</a></p>

<br>

<h1 id="applications-with-node">3. APPLICATIONS WITH NODE.JS :computer:</h1>
<p>Here I leave some small projects done in Node.js to practice, if you want to see them or want to use them as an idea to develop something and practice, I leave them to <a href="#how-to-clone-the-exercises">clone</a>.</p>

<h2 id="getting-started-with-node">3.1 Getting Started With Node.js (study topics)</h2>
<p>The simplest way to understand Node.js, as well as many things in programming, is to practice, taking the resources it offers and manipulating them to see how it works...</p>

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
        <td><kbd><a href="https://github.com/FelipePDS/node/tree/main/02_http">01_modules</a></kbd></td>
        <td>Learning about node.js module imports and exports feature</td>
    </tr>
    <tr align="center">
        <td><kbd><a href="https://github.com/FelipePDS/node/tree/main/02_http">02_http</a></kbd></td>
        <td>Creating server with node.js http</td>
    </tr>
    <tr align="center">
        <td><kbd><a href="https://github.com/FelipePDS/node/tree/main/03_jobsCalc">03_jobsCalc</a></kbd></td>
        <td>Starting rocketseat discover project to practice node.js</td>
    </tr>
</table>

<br>

<p>Now is to practice Node.js and become a master using it... :laughing:</p>
<img width="700px" src="http://clubedosgeeks.com.br/wp-content/uploads/2016/01/dormrm.gif" alt="GIF Programming">

<h1 id="references">4. REFERENCES :anchor:</h1>

<ul>
    <li><a href="https://app.rocketseat.com.br/discover">Rocketseat Discover</a></li>
    <li><a href="https://www.youtube.com/watch?v=DiXbJL3iWVs&list=PLAW7Bip9qIebPp4STtLYyLNkgYFEkDmCl&index=2&t=2566s">Rocketseat - Video</a></li>
    <li><a href="https://www.youtube.com/watch?v=vYekSMBCCiM&t=1s">Código Fonte TV - Video</a></li>
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