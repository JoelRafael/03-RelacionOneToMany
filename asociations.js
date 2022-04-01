const User = require ('./Models/User')
const Addres = require ('./Models/Address')
const Post = require ('./Models/Post')

User.hasOne(Addres)
Addres.belongsTo(User);


//Uno a muchos 
//Usuario va a tener muchos post
User.hasMany(Post, {as:"publicaciones", foreignKey:"autorId"})
Post.belongsTo(User, {as:"autor"})