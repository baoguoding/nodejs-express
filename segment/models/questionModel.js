var connPool = require("./ConnPool");
module.exports={
    ask:function(req,res){
        loginbean = req.session.loginbean;
        pool = connPool();
        //从pool中获取连接(异步,取到后回调)
        pool.getConnection(function(err,conn){
            var userAddSql = 'insert into question (typeid,title,content,uid,createtime) values(?,?,?,?,current_timestamp)';
            var param = [req.body['typeid'],req.body['title'],req.body['content'],loginbean.id];
            conn.query(userAddSql,param,function(err,rs){
                if(err){
                    //console.log('insert err:',err.message);
                    //res.send("数据库错误,错误原因:"+err.message);
                    return;
                }
                //res.send('提问成功');
                res.redirect('../');
            })
            conn.release();
        });
    }
}