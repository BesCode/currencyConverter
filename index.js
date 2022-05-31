const convert = document.querySelector(".convertBtn");
const fromConverter = document.querySelector("#fromConverter");
const fromInput = document.querySelector("#fromInput");
const toConverter = document.querySelector("#toConverter");
const output = document.querySelector("#toInput");
const container = document.querySelector(".container");
const errorContainer = document.querySelector(".errorContainer");
const removeIcon = document.querySelector(".removeIcon")

//eventListeners
errorContainer.classList.add("hidden")

convert.addEventListener("click", handleConvert)
removeIcon.addEventListener("click", removeIconHandler)

function handleConvert(){
    if(fromConverter.value === "dollars" && toConverter.value === "naira"){
        let calculation = fromInput.value * 500
        output.value = calculation
    }

    else if(fromConverter.value === "dollars" && toConverter.value === "pounds"){
        let calculation = fromInput.value * 0.80
        output.value = calculation
    }
    else if(fromConverter.value === "dollars" && toConverter.value === "euros"){
        let calculation = fromInput.value * 0.93
        output.value = calculation
    }

    else if(fromConverter.value === "dollars" && toConverter.value === "peso"){
        let calculation = fromInput.value * 19.63
        output.value = calculation
    }

    if(fromConverter.value === "naira" && toConverter.value === "dollars"){
        let calculation = fromInput.value / 500
        output.value = calculation
    }

    else if(fromConverter.value ==="naira" && toConverter.value === "euros"){
        let calculation = fromInput.value * 0.0022
        output.value = calculation
    }

    else if(fromConverter.value ==="naira" && toConverter.value === "pounds"){
        let calculation = fromInput.value * 0.0019
        output.value = calculation
    }

    else if(fromConverter.value ==="naira" && toConverter.value === "peso"){
        let calculation = fromInput.value * 0.047
        output.value = calculation
    }

    if(fromConverter. value ==="pounds" && toConverter.value ==="naira"){
        let calculation = fromInput.value / 0.0019
        output.value = calculation
    }

    else if(fromConverter. value ==="pounds" && toConverter.value ==="dollars"){
        let calculation = fromInput.value * 0.80
        output.value = calculation
    }

    else if(fromConverter. value ==="pounds" && toConverter.value ==="euros"){
        let calculation = fromInput.value * 1.18
        output.value = calculation
    }
    
    else if(fromConverter. value ==="pounds" && toConverter.value ==="peso"){
        let calculation = fromInput.value * 24.71
        output.value = calculation
    }

    if(fromConverter.value ==="euros" && toConverter.value ==="naira"){
        let calculation = fromInput.value / 0.0022
        output.value = calculation
    }

    else if(fromConverter.value ==="euros" && toConverter.value ==="dollars"){
        let calculation = fromInput.value / 0.93
        output.value = calculation
    }

    else if(fromConverter. value ==="euros" && toConverter.value ==="pounds"){
        let calculation = fromInput.value / 1.18
        output.value = calculation
    }
    
    else if(fromConverter. value ==="euros" && toConverter.value ==="peso"){
        let calculation = fromInput.value /0.047
        output.value = calculation
    }

    if(fromConverter.value === "peso" && toConverter.value === "naira"){
        let calculation = fromInput.value / 0.047
        output.value = calculation
    }

    else if(fromConverter. value ==="peso" && toConverter.value ==="dollars"){
        let calculation = fromInput.value  / 19.63
        output.value = calculation
    }

    else if(fromConverter. value ==="peso" && toConverter.value ==="pounds"){
        let calculation = fromInput.value / 24.71
        output.value = calculation
    }
    
    else if(fromConverter. value ==="peso" && toConverter.value ==="euro"){
        let calculation = fromInput.value * 0.047
        output.value = calculation
    }


    if(fromConverter.value == toConverter.value){
        errorContainer.classList.remove("hidden")
        
    }else { errorContainer.classList.add("hidden")}
    
}

function removeIconHandler(){
    errorContainer.classList.add("hidden")
}