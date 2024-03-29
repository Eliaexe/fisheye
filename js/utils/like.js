class Like{
    getNumbers(items){
        let like = items.map(item => item.likes)
        let box = document.getElementById("box")
        let likes = document.createElement("span")
        let prices  = document.createElement("span")
        let likeSum = like.reduce((partial_sum, a) => partial_sum + a, 0);
        likes.innerHTML = likeSum
        prices.id = "prices"
        likes.id = "likes"
        box.insertAdjacentElement("afterbegin", prices )
        box.insertAdjacentElement("afterbegin", likes)
        box.innerHTML +='<i class="fas fa-heart" aria-label="likes"></i>'
        box.attributes[3].value = likeSum + 'likes in total,'
    }

    price(data){
        document.getElementById("prices").innerHTML
        const id = window.location.search.split('id=')[1];
        let photographer = data.photographers.filter(i => i.id == id)
        document.getElementById("prices").innerHTML += (photographer[0].price) + "€/Jour"
        document.getElementById("box").attributes[3].value += (photographer[0].price) + 'euros par jour'
    }

    clickLike(){
        let heart = document.querySelectorAll(".heart-btn")
        let card = document.getElementById("likes")
        heart.forEach(e => {
            e.addEventListener("click", () => {
                if(e.classList.contains("clicked")){
                    e.classList.replace("fas", "far");
                    e.classList.remove("clicked");
                    e.previousElementSibling.innerText = +e.previousElementSibling.innerText -1
                    card.innerText = +card.innerText - 1;                    
                } else {
                    e.classList.add("clicked");
                    e.classList.replace("far", "fas");
                    e.previousElementSibling.innerText = +e.previousElementSibling.innerText +1;
                    card.innerText = +card.innerText + 1;
                }
            })
        });
    }
}