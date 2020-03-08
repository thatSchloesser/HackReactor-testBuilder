// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the duoPrefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
 
    var duoPrefix = cardNumber[0] + cardNumber[1]
    var triPrefix = cardNumber[0] + cardNumber[1] + cardNumber[2]
    var quadPrefix = cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3]

    var length = cardNumber.length

  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
 	if((duoPrefix === "38" || duoPrefix === "39" ) && length === 14){
 		return "Diner's Club"
 	}
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  else if((duoPrefix === "34" || duoPrefix === "37" ) && length === 15){
	return "American Express"
  }

  //Mastercard
  else if((duoPrefix === "51" 
  	|| duoPrefix === "52" 
  	|| duoPrefix === "53" 
  	|| duoPrefix === "54" 
  	|| duoPrefix === "55" 
  	) && length === 16){
  	return "MasterCard"
  }

  //Visa
  else if (cardNumber[0] === "4" 
  	&& (length === 13 
	  	|| length === 16 
	  	|| length === 19)){
	  return "Visa"
  }

  //Discover
  else if((quadPrefix === "6011" 
  	|| triPrefix === "644"
  	|| triPrefix === "645"
  	|| triPrefix === "646"
  	|| triPrefix === "647"
  	|| triPrefix === "648"
  	|| triPrefix === "649"
  	|| duoPrefix === "65"
  	) && (
  	length === 16 || length === 19)){
  		return "Discover"
  	}
  	
  	//Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  	//feels like busywork at this point...
  else if((quadPrefix === "5018" 
  	|| quadPrefix === "5020"
  	|| quadPrefix === "5038"
  	|| quadPrefix === "6304"
  	) && (
  	length === 12 || length === 13 || length === 14 
  	|| length === 15 || length === 16 || length === 17
  	|| length === 18 || length === 19)){
  		return "Maestro"
  	}


  else return ""

};

//unused 
var isEqual = function(first, second){
	if(first === second){
		return true
	} else return false
}


console.log(detectNetwork('38345678901234'))
console.log(detectNetwork('39345678901234'))
console.log(detectNetwork('373456789012345'))
console.log(detectNetwork('343456789012345'))

console.log(
detectNetwork('4123456789012'),
detectNetwork('4123456789012345'),
detectNetwork('4123456789012345678'),
detectNetwork('5112345678901234'),
detectNetwork('5212345678901234'),
detectNetwork('5312345678901234'),
detectNetwork('5412345678901234'),
detectNetwork('5512345678901234'))


//-----
detectNetwork("6011123456789123")
detectNetwork("6011123456789123123")


detectNetwork('')
detectNetwork('')
detectNetwork('')
detectNetwork('')
detectNetwork('')
