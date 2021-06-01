const ul = document.querySelector("ul")
const input = document.querySelector("input")
const form = document.querySelector('form')

const api = async (queryString) => {
    return await fetch(`http://127.0.0.1:3333/${queryString}`)
    .then((data) => data.json());
}

async function load() {
    const res = await api();
    
    res.urls.map(url => addElement(url));
}

async function addUrl({ name, url }) {
    await api(`?name=${name}&url=${url}`);
}

async function removeUrl({ name, url }) {
    await api(`?name=${name}&url=${url}&del=1`);
}

load();

function addElement({ name, url }) {
    const li = document.createElement('li')
    const a = document.createElement("a")
    const trash = document.createElement("span")

    a.href = url
    a.innerHTML = name
    a.target = "_blank"

    trash.innerHTML = "x"
    trash.onclick = () => {
        if (confirm('Tem certeza que deseja deletar?')) {
            removeElement(trash)
            removeUrl({ name, url })
        }
    }

    li.append(a)
    li.append(trash)
    ul.append(li)
}

function removeElement(el) {
    el.parentNode.remove()
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    let { value } = input

    if (!value) 
        return alert('Preencha o campo')

    const [name, url] = value.split(",")

    if (!url) 
        return alert('formate o texto da maneira correta')

    if (!/^http/.test(url)) 
        return alert("Digite a url da maneira correta")

    await addUrl({ name, url })
    addElement({ name, url })

    input.value = ""
})