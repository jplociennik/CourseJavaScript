//zad 1

/*HTML, ten sam dla wszystkich - index.html
    <title>JS</title>
    <meta charset="UTF-8">
    <link href="styles.css" rel="stylesheet">

    <div id="list"></div>

    <script src="app.js"></script>
*/

const list = document.getElementById('list');
list.innerHTML = generateList();

function generateList()
{
    let html = '<ul>';
    for (let i = 1; i <= 10; i++)
    {
       html += `<li> Element nr ${i}\n</li>`
    }
    html += '</ul>';
    return html;
}

//zad 2

const list = document.getElementById('list');
list.innerHTML = generateList();

function generateList()
{
    let html = '<ul>';
    let i = 10;
    while(i >= 0)
    {
       html += `<li> Element nr ${i}\n</li>`
       i -= 2
    }
    html += '</ul>';
    return html;
}

//zad 3

generateList(8, 'list')

function generateList(count, selectorId)
{
    const list = document.getElementById(selectorId);

    let html = '<ul>';
    for (let i = 1; i <= count; i++)
    {
       html += `<li> Element nr ${i}\n</li>`
    }
    html += '</ul>';
    list.innerHTML = html;
}