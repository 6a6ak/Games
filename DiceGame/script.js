let DiceTotal = 0
let choice = 0
let counter = 0
let images = [
  'img/one.png',
  'img/two.png',
  'img/three.png',
  'img/four.png',
  'img/five.png',
  'img/six.png',
]
let dice = document.querySelectorAll('img')

//defines some constant and more
let grid = document.querySelector('.grid')
let popup = document.querySelector('.popup')
let board = document.querySelector('.board')
let main = document.querySelector('.main')
let btn=document.querySelector('.btn')
popup.style.display = 'none'
btn.style.display = 'none'
//choices for start the game
function six() {
  choice = 6
  document.getElementById('six').style.backgroundImage =
    'radial-gradient(#000, #1a1a1a, #000)'
  document.getElementById('six').style.color = '#fff'
  document.getElementById('seven').style.backgroundImage =
    'radial-gradient(#fff, #fff, #fff)'
  document.getElementById('seven').style.color = '#000'
  document.getElementById('eight').style.backgroundImage =
    'radial-gradient(#fff, #fff, #fff)'
  document.getElementById('eight').style.color = '#000'
  document.getElementById('nine').style.backgroundImage =
    'radial-gradient(#fff, #fff, #fff)'
  document.getElementById('nine').style.color = '#000'
  document.getElementById('select').innerHTML = 'Your choice is  ' + choice
  document.body.style.color = '#fb8b24'

 
}
function seven() {
  choice = 7
  document.getElementById('six').style.backgroundImage =
    'radial-gradient(#fff, #fff, #fff)'
  document.getElementById('six').style.color = '#000'
  document.getElementById('seven').style.backgroundImage =
    'radial-gradient(#000, #1a1a1a, #000)'
  document.getElementById('seven').style.color = '#fff'
  document.getElementById('eight').style.backgroundImage =
    'radial-gradient(#fff, #fff, #fff)'
  document.getElementById('eight').style.color = '#000'
  document.getElementById('nine').style.backgroundImage =
    'radial-gradient(#fff, #fff, #fff)'
  document.getElementById('nine').style.color = '#000'
  document.getElementById('select').innerHTML = 'Your choice is  ' + choice
  document.body.style.color = '#fb8b24'
}
function eight() {
  choice = 8
  document.getElementById('six').style.backgroundImage =
    'radial-gradient(#fff, #fff, #fff)'
  document.getElementById('six').style.color = '#000'
  document.getElementById('seven').style.backgroundImage =
    'radial-gradient(#fff, #fff, #fff)'
  document.getElementById('seven').style.color = '#000'
  document.getElementById('eight').style.backgroundImage =
    'radial-gradient(#000, #1a1a1a, #000)'
  document.getElementById('eight').style.color = '#fff'
  document.getElementById('nine').style.backgroundImage =
    'radial-gradient(#fff, #fff, #fff)'
  document.getElementById('nine').style.color = '#000'
  document.getElementById('select').innerHTML = 'Your choice is  ' + choice
  document.body.style.color = '#fb8b24'
}
function nine() {
  choice = 9
  document.getElementById('six').style.backgroundImage =
    'radial-gradient(#fff, #fff, #fff)'
  document.getElementById('six').style.color = '#000'
  document.getElementById('seven').style.backgroundImage =
    'radial-gradient(#fff, #fff, #fff)'
  document.getElementById('seven').style.color = '#000'
  document.getElementById('eight').style.backgroundImage =
    'radial-gradient(#fff, #fff, #fff)'
  document.getElementById('eight').style.color = '#000'
  document.getElementById('nine').style.backgroundImage =
    'radial-gradient(#000, #1a1a1a, #000)'
  document.getElementById('nine').style.color = '#fff'
  document.getElementById('select').innerHTML = 'Your choice is  ' + choice
  document.body.style.color = '#fb8b24'
}

//end of the choice
//roll function
function roll() {
  counter=counter+1
  let audio = new Audio('sound/dice.mp3')
audio.play() 

  if ((choice == 6) | (choice == 7) | (choice == 8) | (choice == 9)) {
    dice.forEach(function (die) {
      die.classList.add('shake')
    })
    setTimeout(function () {
      dice.forEach(function (die) {
        die.classList.remove('shake')
      })
      let dieOneValue = Math.floor(Math.random() * 6)
      let dieTwoValue = Math.floor(Math.random() * 6)

      //console.log(dieOneValue,dieTwoValue);
      document.querySelector('#die-1').setAttribute('src', images[dieOneValue])
      document.querySelector('#die-2').setAttribute('src', images[dieTwoValue])
      document.querySelector('#total').innerHTML =
        'Your roll is  ' + (dieOneValue + 1 + (dieTwoValue + 1))

      var sum = dieOneValue + 1 + (dieTwoValue + 1)
      var temp = sum

      DiceTotal = temp + DiceTotal
      document.getElementById('DiceTotal').innerHTML =
        'Your total score is  ' + DiceTotal

      console.log(choice, sum)
      if (sum == choice) {
        board.style.display = 'none'
        setTimeout(() => (main.style.display = 'none'), 3000)
        setTimeout(() => (popup.style.display = 'grid'), 3000)
        btn.style.display = "grid" ; 
        document.getElementById('Result0').innerHTML =
        'Your Rolled  ' +counter+' times.'+'<br>'
        document.getElementById('Result1').innerHTML =
          'Your last Roll was  ' +sum+'<br>'
        document.getElementById('Result2').innerHTML =
          'Your total score is  ' + DiceTotal + '<br>'
        document.getElementById('Result3').innerHTML = 'GAME OVER!!!' + '<br>';
        document.getElementById('Result4').innerHTML = "<a href='index.php'>Try again</a>"
      }
      if (DiceTotal > 230) {
        document.write(
          "<center><div  style='color:red;font-size:60px; border: 2px solid black;width:400px; padding:50px;margin-top:120px; ' > Your current Score is " +
            sum +
            '<br>Your total score is ' +
            DiceTotal +
            '<br>' +
            "you win!</div><br><br><a href='index.php'>Try again</a> </center>",
        )
      }
    }, 1000)
  } else {
    alert('Please choose a number between 6 to 9')
  }
}
