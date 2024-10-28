function randomColor() {
    let str = "0123456789abcdef";
    let colorStr = "#";

    for(let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.randomColor * str.length);
        colorStr += str[randomIndex];

        return colorStr;
    }
}


//keyup event is handled here
function searchEmoji(){
    let inputValue = document.getElementById("search_field").value;
    // console.log(inputValue);
    displayResult(inputValue);
    // return false;
}


//displaying the emojis from here
function displayResult(searchQuery= ""){

    //filtering the emojis with filter on the basis of tags, aliases, desc
    let filteredData = emojiList.filter((e)=>{
        if(e.description.indexOf(searchQuery) != -1){
            return true;
        }

        if(e.tags.some(elem=>elem.startsWith(searchQuery))){
            return true;
        }

        if(e.aliases.some(elem=>elem.startsWith(searchQuery))){
            return true;
        }
    })

    console.log(filteredData);

    // MINE start

    // let container = document.querySelector("#search_result_container");
    // let box = document.querySelector("#box");

    // parent.innerHTML = "";

    // filteredData.forEach((e) => {
    //     let new_emoji = document.createElement("div");
    //     let new_aliases = document.createElement("div");
    //     let new_desc = document.createElement("div");
    //     let new_category = document.createElement("div");

    //     new_emoji.innerText = e.emoji;
    //     new_aliases.innerText = e.aliases;
    //     new_desc.innerText = e.description;
    //     new_category.innerText = e.category;
        
    //     box.appendChild("new_emoji");
    //     box.appendChild("new_category");
    //     box.appendChild("new_desc");
    //     box.appendChild("new_aliases");

        // container.appendChild("box");


//     })

// }

    // console.log(emojiList);

//keyup event is applied here
// document.getElementById("search_field").addEventListener("keyup", searchEmoji)

// //first time to show all the emojis
// window.onload = () => displayResult();




    // MINE end

    // where we need to append the tr
    let parent = document.getElementById("search_result_container");
//     console.log(parent);

//     // so that the previous data got removed
    parent.innerHTML = "";

//     // showing the filtered data 
    filteredData.forEach((e)=>{

//         //making the elements in js 
        let new_row = document.createElement("tr");
        let new_emoji = document.createElement("td");
        let new_aliases = document.createElement("td");
        let new_desc = document.createElement("td");


        //giving the innerText to elements
        new_emoji.innerText = e.emoji;
        new_aliases.innerText = e.aliases;
        new_desc.innerText = e.description;

        // new_row.classList.add("box");
        new_emoji.classList.add("emoji");
        new_desc.classList.add("desc");
        new_aliases.classList.add("aliases");

        // console.log(new_emoji,new_aliases,new_desc);


        //appending those tds to the tr
        new_row.appendChild(new_emoji);
        new_row.appendChild(new_aliases);
        new_row.appendChild(new_desc);

        //appending the tr to parent (tbody)
        parent.appendChild(new_row);
    })
}

// console.log(emojiList);

// // keyup event is applied here
document.getElementById("search_field").addEventListener("keyup", searchEmoji)

// // first time to show all the emojis
window.onload = () => displayResult();