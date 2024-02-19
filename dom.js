const seats = document.querySelectorAll(".kbd");
let remains = 8;
for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];
    seat.addEventListener("click", function(){
        this.style.backgroundColor = 'green';
        
    })
    
}



