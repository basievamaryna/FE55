// JavaScript Document

let car={
	name : 'Masda',
	speed : 0,
	consumption: false,
	engine: 2.0,
	transmission: {
		 fiveStk: 5,
		 fourStk: 4,
		 sixStk: 6,
		 consumption: false
		},
	start : function( ){
		this.consumption = true;
		this.speed = 10;
		this.transmission.consumption = true; 
		}
	};
	
	