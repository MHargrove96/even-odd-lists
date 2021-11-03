console.clear()


let usersWord = ""
let oddList = document.getElementById("odd")
let evenList = document.getElementById("even")
let newListItem = document.createElement(`li`)

function updateWord(element) {
    usersWord = element.value
    console.log(element)
    console.log(usersWord)
}
console.log(evenList)
console.log(oddList)

function handleSubmit() {
    console.log(newListItem)
    newListItem.innerText = usersWord
    if(usersWord.length % 2 === 0) {
        evenList.appendChild(newListItem)
    } else {
        oddList.appendChild(newListItem)
    }
    usersWord = ""
    document.getElementById("even-odd-form").reset()
}