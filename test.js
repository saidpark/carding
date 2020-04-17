function serialGenerator() {

var chars = ('0123456789'),

	myBin = document.getElementById('bin'),

	serialLenght = 9,
	
	randSerial = '',
	
	randomNumb;
	
	for (i = 0; i <= serialLenght; i++) {
	
	randomNumb = Math.floor(Math.random() * chars.length);
	
	randSerial += chars.substring(randomNumb, randomNumb + 1);
	
	}	

var chars = ('0123456789'),

	myBin = document.getElementById('bin'),

	serialLenght = 9,
	
	randSerialA = '',
	
	randomNumb;
	
	for (i = 0; i <= serialLenght; i++) {
	
	randomNumb = Math.floor(Math.random() * chars.length);
	
	randSerialA += chars.substring(randomNumb, randomNumb + 1);
	
	}
	
	var chars = ('0123456789'),
	
	myBin = document.getElementById('bin'),

	serialLenght = 9,
	
	randSerialB = '',
	
	randomNumb;
	
	for (i = 0; i <= serialLenght; i++) {
	
	randomNumb = Math.floor(Math.random() * chars.length);
	
	randSerialB += chars.substring(randomNumb, randomNumb + 1);
	
	}
	
	var chars = ('0123456789'),
		
	myBin = document.getElementById('bin'),

	serialLenght = 9,
	
	randSerialC = '',
	
	randomNumb;
	
	for (i = 0; i <= serialLenght; i++) {
	
	randomNumb = Math.floor(Math.random() * chars.length);
	
	randSerialC += chars.substring(randomNumb, randomNumb + 1);
	
	}
	
	var chars = ('0123456789'),
	
	myBin = document.getElementById('bin'),

	serialLenght = 9,
	
	randSerialD = '',
	
	randomNumb;
	
	for (i = 0; i <= serialLenght; i++) {
	
	randomNumb = Math.floor(Math.random() * chars.length);
	
	randSerialD += chars.substring(randomNumb, randomNumb + 1);
	
	}
	
document.getElementById('source').innerHTML = "How much credit card do you want ? " + "<br>" + "<br>" + myBin.value + randSerial;
document.getElementById('source1').innerHTML = "<br> " + myBin.value + randSerialA;
document.getElementById('source2').innerHTML = "<br> " + myBin.value + randSerialB;
document.getElementById('source3').innerHTML = "<br> " + myBin.value + randSerialC;
document.getElementById('source4').innerHTML = "<br> " + myBin.value + randSerialD;
}

//*************inpute placeholder onfocus ***********************************

 myBin = document.getElementById('bin');
	
	myBin.onfocus = function () { 
	
	this.setAttribute('data-place', this.getAttribute('placeholder'));
	this.setAttribute('placeholder', '');
	}
	
	myBin.onblur = function () {
	this.setAttribute('placeholder', this.getAttribute('data-place'));
	this.setAttribute('data-place', '');
	}