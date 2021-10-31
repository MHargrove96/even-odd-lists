let usersWord = ""
let oddList = document.getElementById("odd")
let evenList = document.getElementById("even")

function updateWord(element) {
    usersWord = element.value
    console.log("element is "+element)
    console.log("userWord is "+usersWord)
}

function handleSubmit(newListItem) {
    let newListItem = document.createElement(`LI`)  
    newListItem.innerText = usersWord
    if(usersWord.length % 2 === 0) {
        evenList.appendChild(newListItem)
    } else {
        oddList.appendChild(newListItem)
    }
    usersWord = ""
    document.getElementById("even-odd-form").reset()
}





    // this line creates a new LI Element. We'll do this every 
    // time a word is submitted so this should stay the same 
    // this line sticks the user's word into the newly create
    // LI Element so we'll keep this the same, as well.
    // this line attaches/appends the element to the Odd List 
    // !!!THIS IS WHERE THE PROGRAM SHOULD DECIDE IF IT'S EVEN OR ODD!!!
    // puts word into even list 
    // puts word into the odd list 
    // these two lines will be the same