let count = document.getElementById('count-el')
let xCount = 0
let TotalCount = document.getElementById('total-num')
let saveEl = document.getElementById('save-el')



function increment() {
    xCount++
    count.textContent = xCount
}

function Save() {
    let countStr = count.textContent + " | "
    
    saveEl.textContent += countStr
    count.textContent = 0
    xCount = 0
}


