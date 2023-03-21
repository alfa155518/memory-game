
let controlButton = document.querySelector(".control-buttons ");
let staRt = document.querySelector(".control-buttons span");
let naMe = document.querySelector(".info-container .name span")
let  containerBlock = document.querySelector(".container-block")

function tiMer() {
    let time = document.createElement("div")
    time.className="time"
    time.innerHTML = 50
    
    document.body.appendChild(time)
    let counTer = setInterval(() => {
        time.innerHTML -=1
        if (time.innerHTML === "10") {
            time.classList.add("eph")
        }
        if (time.innerHTML === "0") {
        clearInterval(counTer)
        containerBlock.remove()
        containerBlock.classList.add("failed")
        let end = document.createElement("div")
        end.className = "end-game"
        end.innerHTML = "You Failed"
        document.body.appendChild(end)
        document.getElementById("failed").play()
        }
    }, 1000);
    }

staRt.onclick = function() {
    let message = prompt("Enter Your Name")
    if (message == "" || message == null) {
        naMe.innerHTML = "Unknown"
    } else {
        naMe.innerHTML = message
                }
    controlButton.remove()
    tiMer()
}

let duration = 1000;

let blocksContainer = document.querySelector(".container-block")

let blocks = Array.from(blocksContainer.children)



let orderRange = [...Array(blocks.length).keys()]
shuffle(orderRange)
blocks.forEach((block, index) => {
    block.style.order = orderRange[index];
    block.addEventListener("click", e => {
        flippedBlock(block)
    })
});
function flippedBlock(selectedBlock) {

    selectedBlock.classList.add("is-flipped");

    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains(`is-flipped`))

    if(allFlippedBlocks.length == 2) {
        noClicking()
        checking(allFlippedBlocks[0], allFlippedBlocks[1])
    }
}

function noClicking() {
    blocksContainer.classList.add("no-click")
    setTimeout(() => {
        blocksContainer.classList.remove("no-click")
    }, duration);
}
let Finch = document.createElement("div")
Finch.innerHTML = "Well Done"
let triesElement = document.querySelector(`.tries span`)
function checking(firstElement, secondElement) {
    if(firstElement.dataset.technology === secondElement.dataset.technology) {
        firstElement.classList.remove(`is-flipped`)
        secondElement.classList.remove(`is-flipped`)
        firstElement.classList.add(`has-checked`)
        secondElement.classList.add(`has-checked`)
        document.getElementById("succes").play()
    } else {
        triesElement.innerHTML= parseInt(++triesElement.innerHTML);
        setTimeout(() => {
            firstElement.classList.remove(`is-flipped`)
            secondElement.classList.remove(`is-flipped`)
        }, duration)
        document.getElementById("failed").play()
    }
    if(triesElement.innerHTML == "10") {
        containerBlock.classList.add("failed")
        let end = document.createElement("div")
        end.className = "end-game"
        end.innerHTML = "You Failed"
        document.body.appendChild(end)
        document.getElementById("failed").play()
    }
}



function shuffle(array) {
    // Settings VArs 
    let current = array.length, 
    temp,
    random;
    
    while (current > 0) {
        // Get Random Number 
        random = Math.floor(Math.random() * current)

        // Decrease Length By One 
        current--
        

            temp= array[current]
            array[current]= array[random]
            array[random] = temp
        
    }
    return array;
}


