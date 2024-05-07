let cardArray = [ 
     { name: "ch-1", img: "img/1.png", }, 
       { name: "ch-1", img: "img/1.png", },   
     { name: "ch-2", img: "img/2.png", }, 
      { name: "ch-2", img: "img/2.png", },
     { name: "ch-3", img: "img/3.png", },  
     { name: "ch-3", img: "img/3.png", },
     { name: "ch-4", img: "img/4.png", }, 
       { name: "ch-4", img: "img/4.png", }, 
     { name: "ch-5", img: "img/5.png", }, 
      { name: "ch-5", img: "img/5.png", },
     { name: "ch-6", img: "img/6.png", },  
      { name: "ch-6", img: "img/6.png", }, 
     { name: "ch-7", img: "img/7.png", }, 
      { name: "ch-7", img: "img/7.png", },
     { name: "ch-8", img: "img/8.png", },
       { name: "ch-8", img: "img/8.png", },
     { name: "ch-9", img: "img/9.png", }, 
      { name: "ch-9", img: "img/9.png", },
     { name: "ch-10", img: "img/10.png", },
       { name: "ch-10", img: "img/10.png", },
     { name: "ch-11", img: "img/11.png", }, 
      { name: "ch-11", img: "img/11.png", },
     { name: "ch-12", img: "img/12.png", }, 
       { name: "ch-12", img: "img/12.png", } 
    ]; 

    //define variables and get DOM element
    
    let grid = document.querySelector(".grid");
    let audio = document.querySelector("audio")
    let source = document.querySelector("#source")
    let scoreBoard = document.querySelector(".scoreBoard"); 
    let popup = document.querySelector(".popup"); 
    let playAgain = document.querySelector(".playAgain"); 
    let clickBoard = document.querySelector(".clickBoard"); 
    let imgs; 
    let cardsId = []; 
    let cardsSelected = []; 
    let cardsWon = 0; 
    let clicks = 0;
    document.addEventListener("DOMContentLoaded", function () {
    //define functions 
    
    createBoard(grid, cardArray); 
    arrangeCard();
    playAgain.addEventListener("click", replay); 
    
    //add a click functions for images 
    
    imgs = document.querySelectorAll("img");
    Array.from(imgs).forEach(img => 
    img.addEventListener("click", flipCard)
    ) 
    });
    //createBoard function
    
    function createBoard(grid, array) { 
    popup.style.display = "none"; 
    array.forEach((arr, index) => { 
    let img = document.createElement("img"); 
    img.setAttribute("src", "img/back.png");
    img.setAttribute("data-id", index); 
    grid.appendChild(img); 
    })
    }
    
    // arrangeCard function
    
    function arrangeCard() { 
    cardArray.sort(() => 0.5 - Math.random())
    }
    
    // flip Card function
    
    function flipCard() { 
    let selected = this.dataset.id;
      let clicked =cardArray[selected].name
    cardsSelected.push(clicked); 
      
       source.src=`${clicked}.mp3`
      audio.load()
      audio.play()
     
      
      
    cardsId.push(selected); 
    this.classList.add("flip"); 
    this.setAttribute("src", cardArray[selected].img); 
    if (cardsId.length === 2) { 
    setTimeout(checkForMatch, 500);
    } 
    }
    // checkForMatch function
    
    function checkForMatch() { 
    let imgs = document.querySelectorAll("img"); 
    let firstCard = cardsId[0];
    let secondCard = cardsId[1];
    if (cardsSelected[0] === cardsSelected[1] && firstCard !== secondCard) { 

     
    cardsWon += 1; 
    scoreBoard.innerHTML = cardsWon; 
    source.src="right.mp3" //sound
    audio.load()
      audio.play()
    setTimeout(checkWon,500) 
    } else { 
    imgs[firstCard].setAttribute("src", "img/back.png");
    imgs[secondCard].setAttribute("src", "img/back.png"); /*alert("wrong, please try again");*/
      source.src="error.mp3" //sound
      audio.load()
      audio.play()
      imgs[firstCard].classList.remove("flip"); imgs[secondCard].classList.remove("flip"); 
    } 
    cardsSelected = []; 
    cardsId = []; 
    clicks += 1; 
    clickBoard.innerHTML = clicks; 
    }
    
    function checkWon() {
    if (cardsWon == cardArray.length / 2) {
      
      
    setTimeout(()=> popup.style.display = "grid" ,300); 
    source.src="tada.wav" //sound
    audio.load()
    audio.play()
    
    }
   
    }
    // The replay function
    
    function replay() { 
    arrangeCard(); 
    grid.innerHTML = "";
    createBoard(grid, cardArray);
    cardsWon = 0;
    clicks = 0; 
    clickBoard.innerHTML = 0; 
    scoreBoard.innerHTML = 0; 
    popup.style.display = "none"; 
    }

   