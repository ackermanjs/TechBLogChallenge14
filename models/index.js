const User = require("./User");
const Posting = require("./Posting");
const Commenting = require("./Commenting")

User.hasMany(Posting, {
    foreignKey: 'user_id'
});

Posting.belongsTo(user, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Commenting.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Commenting.belongsTo(Posting, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

User.hasMany(Commenting, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Posting.hasMany(Commenting,{
    foreignKey: 'user_id'
});

module.exports = { User, Posting, Commenting };