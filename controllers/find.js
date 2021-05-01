const {Users} = require('../models');

module.exports={
    show:async(req,res)=>{
        const results = await Users.findAll({
            attributes:['id', 'nome', 'email']
        });

        //console.log(results);
        res.write(results);
    },
    view:async(req,res)=>{
        const results=await Users.findAll({
            attributes:['id', 'nome', 'email']
        });

        res.render('index', {data:results})
    }
}