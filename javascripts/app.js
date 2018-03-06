// Rover Object Goes Here
// ======================

// ======================

var rover = {
	direction : "N"
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
    
};
 
}

function moveForward(rover){
  console.log("moveForward was called")
}

// switch(rover.direction){

// 	case(rover.direction==="N" )
// 	rover.direction="W";
// 	break;

// 	case(rover.direction==="W" && turnLeft===true || rover.direction==="E" && turnRight===true):
// 	rover.direction="S";
// 	break;

// 	case(rover.direction==="S" && turnLeft===true || rover.direction==="N" && turnRight===true):
// 	rover.direction="E";
// 	break;

// 	case(rover.direction==="E" && turnLeft===true || rover.direction==="W" && turnRight===true):
// 	rover.direction="N";
// 	break;

// }		