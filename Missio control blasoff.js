function countdownTimer(){
      console.log("countdownTimer() started");
      var currTime = 50;
      document.getElementById("countDis").innerHTML = currTime + " sec";

      //50 sec display
      setTimeout(function(){
        console.log(currTime);
        currTime = currTime -5;
        document.getElementById("countDis").innerHTML = currTime + "  sec";
      }, 5000);

     
       //45 sec display
       setTimeout(function(){
        console.log(currTime);
        currTime = currTime -5;
        document.getElementById("countDis").innerHTML = currTime + " sec";
      }, 10000);


      //40 sec display
      setTimeout(function(){
        console.log(currTime);
        currTime = currTime -5;
        document.getElementById("countDis").innerHTML = currTime + "  sec";
      }, 15000);

      //35 sec display
      setTimeout(function(){
        console.log(currTime);
      currTime = currTime -5;
       document.getElementById("countDis").innerHTML = currTime + "  sec";
      }, 20000);

         //30 sec display
      setTimeout(function(){
        console.log(currTime);
        currTime = currTime -5;
        document.getElementById("countDis").innerHTML = currTime + "  sec";
      }, 25000);
 

        //25 sec display
      setTimeout(function(){
        console.log(currTime);
        currTime = currTime -5;
        document.getElementById("countDis").innerHTML = currTime + "  sec";
      }, 30000);
 
         //20 sec display
      setTimeout(function(){
        console.log(currTime);
        currTime = currTime -5;
        document.getElementById("countDis").innerHTML = currTime + " sec";
      }, 35000);

       //15 sec display
       setTimeout(function(){
        console.log(currTime);
        currTime = currTime -5;
        document.getElementById("countDis").innerHTML = currTime + " sec";
      }, 40000);

       //10 sec display
       setTimeout(function(){
        console.log(currTime);
        currTime = currTime -5;
        document.getElementById("countDis").innerHTML = currTime + " sec";
      }, 45000);
 

         //0 sec display
      setTimeout(function(){
        console.log(currTime);
        currTime = currTime -5;
        document.getElementById("countDis").innerHTML = currTime + "Blastoff";
      }, 50000);














}

function PlayCraps() {
    //trubleshooting PlayCraps() has started
     console.log("PlayCraps() started");

    var die1 = 0;
    var die2 = 0;

    die1 = Math.floor(6 * Math.random());
    die2 = Math.floor(6 * Math.random());

    console.log(die1);
    console.log(die2);

}