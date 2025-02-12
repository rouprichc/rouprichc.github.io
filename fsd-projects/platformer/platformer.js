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
    // toggleGrid();


    // TODO 2 - Create Platforms

    p=createPlatform

    
   
    p(300, 630, 100, 10, "orange");
    p(500, 500, 100, 5, "orange");
    p(800, 400, 100, 5, "orange");
    p(1100, 300, 100, 5, "orange");
    p(900, 175, 100, 5, "orange");
    p(700, 175, 100, 5, "green");

    // TODO 3 - Create Collectables

    o=createCollectable
    o("key", 800, 350);
    o("key", 1100, 250);
    o("skull", 900, 125);

    
    // TODO 4 - Create Cannons

    l=createCannon
    createCannon("right", 200, 3000);
    //createCannon("right", 300, 2500);
    l("right", 440, 2100);
    l("right", 535, 4000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
