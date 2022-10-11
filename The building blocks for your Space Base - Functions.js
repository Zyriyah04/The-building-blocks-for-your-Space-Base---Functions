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
    //variable dice 1 rolls
    var die2 = 0;
     //variable dice 2 rolls
    die1 = Math.ceil(6 * Math.random());
    //dice 1 roll number
    die2 = Math.ceil(6 * Math.random());
    //dice 2 roll number
    console.log(die1);
    //dice 1 console log
    console.log(die2);
    // dice 2 console log
    document.getElementById("die1Res").innethtml = "The result for die1 is: " + die1;
    // dice 1 result
    document.getElementById("die2Res").innethtml =  "The result for die2 is: " + die2;
    //dice 2 result


}