// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
    var prefix = cardNumber[0] + cardNumber[1]


  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
 	if((prefix === "38" || prefix === "39" )&& cardNumber.length === 14){
 		return "Diner's Club"
 	}
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  else if((prefix === "34" || prefix === "37" )&& cardNumber.length === 15){
	return "American Express"
  }

  else if((prefix === "51" || prefix === "52" || prefix === "53" 
  	|| prefix === "54" || prefix ==="55" ) && cardNumber.length === 16){
  	return "MasterCard"
  }
  else if (cardNumber[0] === "4" && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)){
  	return "Visa"
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


detectNetwork('')
detectNetwork('')
detectNetwork('')
detectNetwork('')
detectNetwork('')
