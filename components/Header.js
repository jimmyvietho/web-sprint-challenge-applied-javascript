// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const headerDiv = document.createElement("div")
    headerDiv.classList.add("header")

    const dateSpan = document.createElement("span")
    dateSpan.classList.add("date")
    dateSpan.textContent = "MARCH 28, 2020"

    const headerOne = document.createElement("h1")
    headerOne.textContent = "Lambda Times"

    const tempSpan = document.createElement("span")
    tempSpan.classList.add("temp")
    tempSpan.textContent = "98°"

    

    headerDiv.append(dateSpan, headerOne, tempSpan)
    return headerDiv
}

document.querySelector(".header-container").append(Header())