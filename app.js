const {Sequelize,DataTypes} = require('sequelize')
const sequelize = new Sequelize('task2','root','Nasa@432000',{host: 'localhost', dialect: 'mysql'},)

// sequelize.authenticate()
// .then(()=>{
//     console.log('connectin established successfully')
// })
// .catch((error)=>{
//     console.log('unable to connect: ',error);
// })

const user = sequelize.define('user',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    age:{
        type: DataTypes.INTEGER,
        defaultValue: 18,
        allowNull: false
    }
});
// user.sync();
//user.create({name:'jon',email:'samd@mail.com',age:25})
// .then(()=>{
//     console.log('success');
// })
// .catch((err)=>{
//     console.log('moonji: ',err);
// })
//method 1

// user.findAll({where : { email:'samd@mail.com'}}).then(function(users){
//     users.forEach(function(user){
//         console.log(user.dataValues.id,user.dataValues.name)
//     })
// })

//method 2
user.findByPk(1).then(user=>{
    console.log(user.dataValues.id, user.dataValues.name)
})