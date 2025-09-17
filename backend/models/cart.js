const {DataTypes} = require('sequelize');
const sequelize = require('../config/db')

const Cart = sequelize.define('Cart' , {
    id:{
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false 
    },
    userId:{
        type : DataTypes.INTEGER,
        allowNull : false,
        references :{
            model : 'users',
            key : 'id',
            onDelete : 'CASCADE',
            onUpdate : 'CASCADE'
        },
        required : true
    },
    items :[
        {
            productId:{
                type : DataTypes.INTEGER,
                allowNull : false,
                references :{
                    model : 'products',
                    key : 'id',
                    onDelete : 'CASCADE',
                    onUpdate : 'CASCADE'
                }
            },
            quantity :{
                type : DataTypes.INTEGER,
                allowNull : false,
                validate :{min : 1},
                dafaultValue : 1
            },

        }
    ]
})


module.exports = Cart