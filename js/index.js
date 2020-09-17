
let postB = document.getElementById('postButton')
let clearB = document.getElementById('clearButton')
let markB = document.getElementById('markButton')
let deleteB = document.getElementById('deleteButton')

postB.addEventListener("click", postList)
clearB.addEventListener("click", clearList)
markB.addEventListener("click", markList)
deleteB.addEventListener("click", deleteList)

function postList(event) {
    event.preventDefault()
    let textList = document.getElementById('nameList').value
    
    if (textList != ''){
        console.log(textList)
        let list = document.getElementById('todoList')
        
        let currentList = list.innerHTML
        list.innerHTML = currentList + `<input type="checkbox"> ${textList} <br>`
    }
}

function clearList(e) {
    e.preventDefault()

    let list = document.getElementsByTagName('input')

    for(let i = 0; i < list.length; i++){
        list[i].checked = false
    }
}

function markList(e) {
    e.preventDefault()

    let list = document.getElementsByTagName('input')

    for(let i = 0; i < list.length; i++){
        list[i].checked = true
    }
}

function deleteList(e) {
    e.preventDefault()

    let list = document.getElementById('todoList')

    list.innerHTML = ``

}