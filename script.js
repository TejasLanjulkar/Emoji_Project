function searchEmoji() {
    let inputValue = document.querySelector("#search_field");

    // console.log(inputValue);
    displayResult(inputValue);
    
    // return false;

}


function displayResult(searchQuery = "") {

    let filteredData = emojiList.filter((e) => {
        if(e.description.indexOf(searchQuery) != -1) {
            return true;
        }
            
        if(e.tags.some(elem=>elem.startsWith(searchQuery))) {
            return true;
        }

        if(e.aliases.some(elem=>elem.startsWith(searchQuery))){
            return true;
        }

        // if(e.category.some(elem => elem.startsWith(searchQuery))) 
        //     return true;
    })

    // console.log(filteredData);

    let parent = document.querySelector("#search_result_container");
    // console.log(parent);
    parent.innerHTML = "";

    filteredData.forEach((e) => {  

    let new_row = document.createElement("tr");
    let new_emoji = document.createElement("td");
    let new_aliases = document.createElement("td");
    let new_desc = document.createElement("td");

    new_emoji.innerText = e.emoji;
    new_aliases.innerText = e.aliases;
    new_desc.innerText = e.description;

    new_row.appendChild(new_emoji);
    new_row.appendChild(new_aliases);
    new_row.appendChild(new_desc);
    
    parent.appendChild(new_row);
    })
}

// console.log(emojiList);

document.getElementById("search_field").addEventListener("keyup", searchEmoji);

window.onload = () => displayResult();