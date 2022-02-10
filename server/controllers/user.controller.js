//import model to fill out queries! 
const User = require('../models/user.model');

//create and export all CRUD methods from built in mongoose library here! 
//!--------------------------------FIND ALL---------------
module.exports.findAll = (req, res) =>{
    User.find()
    .then(allUsers => res.json({allUsers: allUsers}))
    .catch( err => res.json({message: "something went wrong at your FINDALL controller", error:err}))
}

//! you can sort your data!!!! https://mongoosejs.com/docs/api/query.html
// .sort("firstName") AT THE END OF YOUR Author.find() will sort in order!!!!
//could link specific controller to a route. 

//!-------------------------------FIND ONE---------------
//requires a way to id, in this case using the ID but must specify! If you did findbyID just put req.params.id
module.exports.FindOne =(req, res) =>{
    User.findOne({_id: req.params.id})
        .then(oneUser => res.json({oneUser: oneUser}))
        .catch(err => res.json({ message: "something went wrong at your FINDONE controller", error:err}))
}

//!------------------------------CREATE ONE---------------
//requires raw JSON body as input**
//in catch() we respond back with res.status(400).json(err) that gives us an object we can loop over in React! 
//will see this any time you need to validate data! Create and Update!! 
module.exports.createNew =(req, res) =>{
    User.create(req.body)
        .then(newUser => res.json({newUser: newUser}))
        .catch(err => {
            res.status(400).json(err)
        })
}

//!------------------------------Update ONE---------------
//because this is findbyID do not have to specify {id: _id}!!!
//needs an ID to retrieve one, also takes in raw JSON body, does not run validators like create does on default have to specify. 
module.exports.updateOne =(req, res) =>{
    User.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators: true})
        .then( updateUser => res.json({updateUser: updateUser}))
        .catch(err => res.status(400).json(err))
}

//!------------------------------DELETE ONE---------------
module.exports.deleteOne =(req, res) =>{
    User.deleteOne({_id: req.params.id})
        .then(deleted => res.json({deleted: deleted}))
        .catch(err => res.json({ message: "something went wrong at your DELETE controller", error:err}))
}