let fs = require('fs');
module.exports.displayAdminLog(){
	fs.readFile('log.txt', 'utf8', (error,data) => {
		if(error){
			throw error;
		}
		else{
			console.log(data);
		}
	})
}


