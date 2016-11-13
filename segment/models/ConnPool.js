var mysql  = require('mysql');
module.exports = (function(){
    var pool = mysql.createPool({
        host: '192.168.10.64',       //主机
        user: 'root',               //MySQL认证用户名 
        password: 'root',        //MySQL认证用户密码 
        database: 'test',
        port: '3306'                   //端口号 
    });
    pool.on('connection', function(connection) {
        connection.query('SET SESSION auto_increment_increment=1');
    });

    return function(){ //返回的唯一的一个pool 
        return pool;
    };
})();//一个立即执行的匿名函数 