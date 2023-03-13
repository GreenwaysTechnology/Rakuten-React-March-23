//create dom element using plain js and how to attach on to existing tree (index.html)

function createNode() {
    const Heading = document.createElement('h1')
    Heading.innerHTML = 'Hello React Node'
    const rootElement = document.getElementById('root')
    rootElement.appendChild(Heading)
}
createNode()