const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const Review = sequelize.define('Review', {
    productId:{
        type : DataTypes.INTEGER,
        allowNull : false ,
        references :{
            model : 'products',
            key: ' id',
            onDelete : 'CASCADE',
            onUpdate : 'CASCADE'
        }
    },
    userId:{
        type : DataTypes.INTEGER,
        allowNull : false,
        references :{
            model:'users',
            key : 'id',
            onDelete : 'CASCADE',
            onUpdate : 'CASCADE',
        },
        unique : 'compositeIndex',
    },
    rating :{
        type : DataTypes.FLOAT,
        allowNull : false,
        validate : { min :0, max : 5, isFloat: true},
        unique : 'conpositeIndex',
    },
    comment :{
        type : DataTypes.TEXT,
        allowNull : true ,
        validate :{ notEmpty : true},
        defaultValue : null,
    },
    ReviewValue:{
        type : DataTypes.ENUM('positive', 'neutral', 'negative'),
        allowNull : true,
        validate :{
            isIn :[['positive' , 'neutral' , 'negative']],
        },
        defaultValue : 'positive'
    }
},{
    timestamps : false,
    tableName : 'reviews'
});

module.exports = Review;