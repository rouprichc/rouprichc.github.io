$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms

    p=createPlatform

// i decided to completly rework my game 
   
    p(100, 550, 1400, 10, "red");
    p(0, 650, 100, 10, "red");
    p(0, 350, 1300, 10, "orange");
    p(1300, 455, 100, 10, "orange");
    p(100, 160, 1400, 10, "yellow");
    p(0, 256, 100, 10, "yellow");
    //p(100, 30, 1400, 10, "green");
    p(1200, 100, 10, 70, "yellow");


    // TODO 3 - Create Collectables

    //o=createCollectable
    //o("key", 800, 350);
    //o("key", 1100, 250);
    //o("skull", 900, 125);

    
    // TODO 4 - Create Cannons

    l=createCannon
    //createCannon("right", 200, 3000);
    //createCannon("right", 300, 2500);
     //l("right", 440, 2100);
    //l("right", 535, 4000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
