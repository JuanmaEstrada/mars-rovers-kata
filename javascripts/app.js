// Rover Object Goes Here
// ======================

// ======================

var rover = {
	direction : "N",
	position : [x, y]
}

function turnLeft(rover){
	switch(rover.direction){
	
		case "N" :
			rover.direction = "W";
			console.log("turnLeft was called! And Rover direction is " + rover.direction)
		break;

		case "W" :
			rover.direction = "S";
			console.log("turnLeft was called! And Rover direction is " + rover.direction)
		break;

		case "S" :
			rover.direction = "E";
			console.log("turnLeft was called! And Rover direction is " + rover.direction)
		break;

		case "E" :
			rover.direction = "N";
			console.log("turnLeft was called! And Rover direction is " + rover.direction)
		break;
	}
}

function turnRight(rover){
    switch(rover.direction){

    case "N" :
        rover.direction = "E";
        console.log("turnRight was called! And Rover direction is " + rover.direction)
    break;

    case "E" :
        rover.direction = "S";
        console.log("turnRight was called! And Rover direction is " + rover.direction)
    break;

    case "S" :
        rover.direction = "W";
        console.log("turnRight was called! And Rover direction is " + rover.direction)
    break;
    
    case "W" :
        rover.direction = "N";
        console.log("turnRight was called! And Rover direction is " + rover.direction)
    break;
    }
 }

function moveForward(rover){
	var x=0; 
	var y=0;

	if (rover.direction == "E" && y <= 9) {
		y=y+1;
	
  	console.log ("moveForward was called and rover is in " + rover.position);
 	}
 }


