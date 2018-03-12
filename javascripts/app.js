// Rover Object Goes Here
// ======================

// ======================

var rover = {
	direction : "N",
	position :[0,0], 
	comandos:[],
	x:0,
	y:0
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
	

	if (rover.direction == "E" /*&& rover.position<=[0,9]*/) {

	rover.x=rover.x+1;
	rover.position.splice(1,1,rover.x);
  	console.log ("moveForward was called and rover is in " + rover.position);

 	}

 	else if (rover.direction == "S" /*&& rover.position<=[0,9]*/) {

	rover.y=rover.y+1;
	rover.position.splice(0,1,rover.y);
  	console.log ("moveForward was called and rover is in " + rover.position);

 	}

 	else if (rover.direction == "W" /*&& rover.position<=[0,9]*/) {

	rover.x=rover.x-1;
	rover.position.splice(0,1,rover.x);
  	console.log ("moveForward was called and rover is in " + rover.position);

 	}
	else if (rover.direction == "N" /*&& rover.position>[0,0]*/) {

	rover.y=rover.y-1;
	rover.position.splice(0,1,rover.y);
  	console.log ("moveForward was called and rover is in " + rover.position);

 	}

 }

function commands(comandos){

	for(var i=0; i<comandos.length; i++){

		if(comandos[i]==="R"){

			turnRight(rover);

		}

		else if(comandos[i]==="L"){

			turnLeft(rover)
		}


		else if(comandos[i]==="F"){

			moveForward(rover)
		}

	

}
}

