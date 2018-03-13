// Rover Object Goes Here
// ======================

// ======================

var rover = {
	direction : "N",
	position :[0,0],
	objectX:2,
	objectY:1,
	x:0,
	y:0,
	cont:0,
	traveLog:[],
	history:[]
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
	
	if (rover.direction == "E" && rover.x<=8 && rover.x>=0 ) {

	rover.traveLog.push(rover.position);//Historial de movientos pero no funciona bien
	

	rover.x=rover.x+1;
	rover.position.splice(1,1,rover.x );
  	console.log ("moveForward was called and rover is in " + rover.position);
  	console.log ("History for rover " + rover.traveLog);

 	}

 	else if (rover.direction == "S" && rover.y<=8 && rover.y>=0) {

	rover.traveLog.push(rover.position);
	rover.y=rover.y+1;
	rover.position.splice(0,1,rover.y);
  	console.log ("moveForward was called and rover is in " + rover.position);

 	}

 	else if (rover.direction == "W" && rover.x<=8 && rover.x>0) {

 	rover.traveLog.push(rover.position);
	rover.x=rover.x-1;
	rover.position.splice(0,1,rover.x);
  	console.log ("moveForward was called and rover is in " + rover.position);

 	}
	else if (rover.direction == "N" && rover.y<=8 && rover.y>0) {

	rover.traveLog.push(rover.position);
	rover.y=rover.y-1;
	rover.position.splice(0,1,rover.y);
  	console.log ("moveForward was called and rover is in " + rover.position);

 	}

 	else if (rover.x<=8 || rover.y<=8 || rover.x>0 || rover.x>0) {

  	console.log ("You have reached the limits of the map or have you hit an object"+ rover.position);

 	}

 }

 function backWard(rover){
	
		

	if (rover.direction == "E" && rover.x<=8 && rover.x>0) {

	rover.x=rover.x-1;
	rover.position.splice(1,1,rover.x);
  	console.log ("moveForward was called and rover is in " + rover.position);

 	}

 	else if (rover.direction == "S" && rover.y<=8 && rover.y>0) {

	rover.y=rover.y-1;
	rover.position.splice(0,1,rover.y);
  	console.log ("moveForward was called and rover is in " + rover.position);

 	}

 	else if (rover.direction == "W" && rover.x<=8 && rover.x>0) {

	rover.x=rover.x+1;
	rover.position.splice(0,1,rover.x);
  	console.log ("moveForward was called and rover is in " + rover.position);

 	}
	else if (rover.direction == "N" && rover.y<=8 && rover.y>0) {

	rover.y=rover.y+1;
	rover.position.splice(0,1,rover.y);
  	console.log ("moveForward was called and rover is in " + rover.position);

 	}

 	else if (rover.x<=8 || rover.y<=8 && rover.x>=0 && rover.y>=0) {

  	console.log ("You have reached the limits of the map or have you hit an object"+rover.position);

 	}

 }

function commands(comandos){

	for(var i=0; i<comandos.length; i++){

		if(comandos[i]==="R" || comandos[i]==="r"){

			turnRight(rover);

		}

		else if(comandos[i]==="L" || comandos[i]==="l" ){

			turnLeft(rover)
		}


		else if(comandos[i]==="F" || comandos[i]==="f"){

			moveForward(rover)
		}

		else if(comandos[i]==="B" || comandos[i]==="b"){

			backWard(rover)
		}
		else if(comandos[i]!="B" || comandos[i]!="L" || comandos[i]!="R"  || comandos[i]!="F" ){

			console.log("Has introducido un caracter incorrecto pruebe de nuevo.");
		}


	

	}
}

