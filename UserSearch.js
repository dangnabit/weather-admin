let weather = require('weather-js');
let fs = require('fs');
module.exports.UserSearch = function (userName, zip){
	// this.userName = userName;
	// this.zip = zip;
	// this.date = Date.now();
	
	this.date = Date.now();
	this.info = {'userName': userName, 'zip': zip , 'date': this.date};
	this.getWeather = function() {
		weather.find({search: zip, degreeType: 'F'}, (err,data) =>{
			if(err){
				console.error(err);
			}
			else{
				console.log(JSON.stringify(data,null,2));
				fs.appendFile('log.txt', JSON.stringify(this.info, null, 2), (err) => {
					if(err){
						throw err;
					}
				});
			}
		})
	}
	
	return this;

}