let weather = require('weather-js');
let moment = require('moment');
let fs = require('fs');
var UserSearch = function (userName, zip){
	// this.userName = userName;
	// this.zip = zip;
	// this.date = Date.now();
	
	this.date = moment(Date.now()).format('ddd, MMM Do YYYY k:mm:ss');
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

module.exports = UserSearch;
