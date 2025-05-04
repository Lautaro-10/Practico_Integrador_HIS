var mysql = require('mysql');
var connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '',
database: 'his_hospital',
port: 3306
});
connection.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("Conection exitosa");
    }
})
connection.end();