const cards = document.querySelectorAll(".kbd");
for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    card.addEventListener("click", function(){
        this.style.backgroundColor = 'green'
        const seat = card.querySelector("h1").innerText;
        const dataContainer = document.getElementById("row-one");
        const data = document.createElement("p")
        
        data.innerText = seat;
        dataContainer.appendChild(data);

        
    })
}


