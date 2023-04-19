const cardNumberDisplay = document.querySelector(".card-num-disp")
const cardHolderDisplay = document.querySelector(".cardholder-name-disp")
const monthDisplay = document.querySelector(".month-disp")
const yearDisplay = document.querySelector(".year-disp")
const cvcDisplay = document.querySelector(".card-cvc-disp")
const formPage = document.querySelector(".form-section")
const submitBtn = document.getElementById("submit")
const nameFeedback  = document.querySelector(".name-feedback")
const numberFeedback  = document.querySelector(".number-feedback")
const dateFeedback  = document.querySelector(".date-feedback")
const cvcFeedback  = document.querySelector(".cvc-feedback")
const completePage = document.querySelector(".complete")



formPage.addEventListener("keyup", e => {
    const{name,value}= e.target 

    if(name == "name"){
        cardHolderDisplay.textContent = value.toUpperCase()
        nameFeedback.textContent = ""
        nameFeedback.classList.remove("err-msg")

        if(!value){
            cardHolderDisplay.textContent= "JANE APPLESEED"
            const msg = "Can't be blank"
            nameFeedback.textContent = msg
            nameFeedback.classList.add("err-msg")
        }

    }

    if(name == "number"){
        const number = value
        const newArray = [number.slice(0,4), number.slice(4,8) , number.slice(8,12) , number.slice(12,16)]
        const joined = newArray.join(" ")
        cardNumberDisplay.textContent = joined

        if(!Number(value)){
            const msg = "Wrong format , numbers only!"
            numberFeedback.textContent = msg
            numberFeedback.classList.add("err-msg")
        }

        if(!value){
            cardNumberDisplay.textContent= "0000 0000 0000 0000"
            const msg = "Can't be blank"
            numberFeedback.textContent = msg
            numberFeedback.classList.add("err-msg")
        }
        
        if(value.length > 16){
            const msg = "Characters cannot be less or more than 16"
            numberFeedback.textContent = msg
            numberFeedback.classList.add("err-msg")
        }

        if(value.length === 16){
            numberFeedback.textContent = ""
            numberFeedback.classList.remove("err-msg")
        }
    }
   

    if(name == "month"){
        monthDisplay.textContent = value

        if(!value){
            monthDisplay.textContent= "00"
            const msg = "Can't be blank"
            dateFeedback.textContent = msg
            dateFeedback.classList.add("err-msg")
        }
        
        if(value > 12){
            const msg = "Invalid month"
            dateFeedback.textContent = msg
            dateFeedback.classList.add("err-msg")
        }
        
        if(value.length > 2){
            const msg = "Not a valid value for month"
            dateFeedback.textContent = msg
            dateFeedback.classList.add("err-msg")
        }
        
        if(value.length > 2){
            const msg = "Not a valid value for month"
            dateFeedback.textContent = msg
            dateFeedback.classList.add("err-msg")
        }


        if(value.length == 1){
            monthDisplay.textContent = `0${value}`
            dateFeedback.textContent = " "
            dateFeedback.classList.remove("err-msg")
        }
    }

    if(name == "year"){
        yearDisplay.textContent = value
        const date = new Date()
        const year = String(date.getFullYear()).split("").slice(2,4).join("")

        if(!value){
            yearDisplay.textContent= "00"
            const msg = "Can't be blank"
            dateFeedback.textContent = msg
            dateFeedback.classList.add("err-msg")
        }
        if(value.length > 2){
            const msg = "Not a valid value for year"
            dateFeedback.textContent = msg
            dateFeedback.classList.add("err-msg")
        }

        if(value.length == 2){
            dateFeedback.textContent = ""
            dateFeedback.classList.remove("err-msg")
        }

        if(value < Number(year)){
            const msg = "year cannot be earlier"
            dateFeedback.textContent = msg
            dateFeedback.classList.add("err-msg")
        }
    }


    if(name == "cvc"){
        cvcDisplay.textContent = value
        if(!value){
            cvcDisplay.textContent ="000"
            console.log("please provide a value")
        }

        if(value.length > 3){
            const msg = "Characters cannot be more than three"
            cvcFeedback.textContent = msg
            cvcFeedback.classList.add("err-msg")
        }
        if(value.length == 3){
            cvcFeedback.textContent = ""
            cvcFeedback.classList.remove("err-msg")
        }
    }

})


submitBtn.addEventListener("click",e =>{
        e.preventDefault()
        console.log("submitting...")
        completePage.style.display = "block"
        formPage.style.display = "none"
})




