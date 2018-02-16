//JS code goes here
var turn =false;
var state = [];
var array=[];
var j=0;
var redCounter=0;
var greenCounter=0;


function reload(){
          for (var i = 0; i < state.length; i++) {
            document.getElementById(i).innerHTML = "";
          }
          for (var i = 0; i < state.length; i++) {
            state[i] = undefined;
          }
        //  event.target.style.backgroundColor= "White";
        }


function play(event,clicked_id){
  console.log(event);
  event.target.innerHTML= turn? "X":"O";
  turn=!turn;

  document.getElementById('ng').innerHTML = 'Game ON';
  state[clicked_id]=turn;

  console.log("id: "+clicked_id);
  for (var i = 0; i < 9; i++) {
    console.log("state: "+i+state[i]);
  }




    if( (state[0]&&state[1]&&state[2]== true)  )
    {
      greenCounter++;
      console.log("Green WIN");
      document.getElementById('G').innerHTML = greenCounter;
      document.getElementById('L1').innerHTML = redCounter;
      document.getElementById('ng').innerHTML = 'Payer 1 wins';
      setTimeout(reload,3000);

    }
    if( (state[3]&&state[4]&&state[5]== true)  )
    {
      greenCounter++;
      console.log("Green WIN");
      document.getElementById('G').innerHTML = greenCounter;
      document.getElementById('L1').innerHTML = redCounter;
      document.getElementById('ng').innerHTML = 'Payer 1 wins';
    }
    if( (state[6]&&state[7]&&state[8]== true) )
    {
      greenCounter++;
      console.log("Green WIN");
      document.getElementById('G').innerHTML = greenCounter;
      document.getElementById('ng').innerHTML = 'Payer 1 wins';
      document.getElementById('L1').innerHTML = redCounter;
    }
    if( (state[0]&&state[3]&&state[6]== true)  )
    {
      greenCounter++;
      console.log("Green WIN");
      document.getElementById('G').innerHTML = greenCounter;
      document.getElementById('ng').innerHTML = 'Payer 1 wins';
      document.getElementById('L1').innerHTML = redCounter;
    }
    if( (state[1]&&state[4]&&state[7]== true) )
    {
      greenCounter++;
      console.log("Green WIN");
      document.getElementById('G').innerHTML = greenCounter;
      document.getElementById('ng').innerHTML = 'Payer 1 wins';
      document.getElementById('L1').innerHTML = redCounter;
    }
    if( (state[2]&&state[5]&&state[8]== true) )
    {
      greenCounter++;
      console.log("Green WIN");
      document.getElementById('G').innerHTML = greenCounter;
      document.getElementById('ng').innerHTML = 'Payer 1 wins';
      document.getElementById('L1').innerHTML = redCounter;

    }
    if( (state[0]&&state[4]&&state[8]== true) )
    {
      greenCounter++;
      console.log("Green WIN");
      document.getElementById('G').innerHTML = greenCounter;
      document.getElementById('ng').innerHTML = 'Payer 1 wins';
      document.getElementById('L1').innerHTML = redCounter;

    }
    if( (state[2]&&state[4]&&state[6]== true) )
    {
      greenCounter++;
      console.log("Green WIN");
      document.getElementById('G').innerHTML = greenCounter;
      document.getElementById('ng').innerHTML = 'Payer 1 wins';
      document.getElementById('L1').innerHTML = redCounter;

    }

    //////////////////////////////////////////////////false

    if( state[0]==false && state[1]== false && state[2]== false  )
    {
      redCounter++;
      console.log("Red WIN");
      document.getElementById('R').innerHTML = redCounter;
      document.getElementById('ng').innerHTML = 'Payer 2 wins';
    }
    if( state[3]==false && state[4]==false && state[5]== false  )
    {
      redCounter++;
      console.log("Red WIN");
      document.getElementById('R').innerHTML = redCounter;
      document.getElementById('ng').innerHTML = 'Payer 2 wins';
    }
    if( state[6]==false && state[7]==false && state[8]== false )
    {
      redCounter++;
      console.log("Red WIN");
      document.getElementById('R').innerHTML = redCounter;
      document.getElementById('ng').innerHTML = 'Payer 2 wins';
    }
    if( state[0]==false && state[3]==false && state[6]== false )
    {
      redCounter++;
      console.log("Red WIN");
      document.getElementById('R').innerHTML = redCounter;
      document.getElementById('ng').innerHTML = 'Payer 2 wins';
    }
    if( state[1]==false &&state[4]==false &&state[7]== false )
    {
      redCounter++;
      console.log("Red WIN");
      document.getElementById('R').innerHTML = redCounter;
      document.getElementById('ng').innerHTML = 'Payer 2 wins';
    }
    if( state[2]==false && state[5]==false && state[8]== false )
    {
      redCounter++;
      console.log("Red WIN");
      document.getElementById('R').innerHTML = redCounter;
      document.getElementById('ng').innerHTML = 'Payer 2 wins';
    }
    if( state[0]==false && state[4]==false && state[8]== false )
    {
      redCounter++;
      console.log("Red WIN");
      document.getElementById('R').innerHTML = redCounter;
      document.getElementById('ng').innerHTML = 'Payer 2 wins';
    }
    if( state[2]==false && state[4]==false && state[6]== false )
    {
      redCounter++;
      console.log("Red WIN");
      document.getElementById('R').innerHTML = redCounter;
      document.getElementById('ng').innerHTML = 'Payer 2 wins';
    }

//   var x1 = document.getElementById().id;
//
//   console.log("YAO");
// console.log(x1);

    if(turn==0){
//  event.target.style.backgroundColor="red";
    }
    if(turn==1){
//event.target.style.backgroundColor="Green";
    }
    for (var i = 0; i < 9; i++) {
      console.log("state: "+i+state[i]);
    }

}


// var cell0 = window.document.getElementById("8");
//
// cell0.addEventListener('click',play);

