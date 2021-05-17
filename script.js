var rock_img = '\image\rock.png'
var paper_img = '\image\paper.png'
var scissors_img = '\image\scissors.png'
let game = 0;
let player_score= 0;
let computer_score = 0;
function play(id){

    player_img = id
    console.log(id)
    var Playerimg = document.getElementById('PlayerImage');
    var Computerimg = document.getElementById('ComputerImage');

    Playerimg.src = "image/" + id + '.png';

    //random computer
    computer_sel = Math.floor(Math.random() * 3) + 1;
    console.log(computer_sel);
    switch (computer_sel) {
        case 1:
          computer_img = '/image/rock.png';
          break;        
        case 2:
            computer_img = '/image/paper.png';
          break;
        case 3:
            computer_img = '/image/scissors.png';
          break;
      }
      Computerimg.src = computer_img
    switch(id){
        case 'Paper':
            if(computer_sel == 1){ //rock
                result = 'Player Win !'
                player_score += 1
                break;

            }else if (computer_sel==2){ //paper
                result = 'Draw'
                break;
            }else{ //sci
                result = 'Computer Win !'
                computer_score += 1
                break;
            }
        case 'Rock':
            if(computer_sel == 1){ //rock
                result = 'Draw'
                break;
            }else if (computer_sel == 2){ //paper
                result = 'Computer Win !'
                computer_score += 1
                break;
            }else{ //sci
                result = 'Player Win !'
                player_score += 1
                break;
            }
        case 'Scissors':
            if(computer_sel == 1){ //rock
                result = 'Computer Win !'
                computer_score += 1
                break;
            }else if (computer_sel==2){ //paper
                result = 'Player Win !'
                player_score += 1
                break;
            }else{ //sci
                result = 'Draw'
                break;
            }
    }
    console.log(result)


    //end game

    if (player_score > 4){
        player_score= 0;
        computer_score = 0;
        alert('Player Win');
    }else if (computer_score > 4){
        player_score= 0;
        computer_score = 0;
        alert('Computer Win');
        
    }
    document.getElementById("player_score").innerHTML = "Player score is : " + player_score;
    document.getElementById("computer_score").innerHTML ="Computer score is : " + computer_score;

    document.getElementById("result").innerHTML = result;
}
