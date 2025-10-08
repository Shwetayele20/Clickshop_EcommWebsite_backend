const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const Order = sequelize.define('Order' , {
    userId:{
        type : DataTypes.INTEGER,
        allowNull : false,
        references:{
            model :'users',
            key : 'id',
            onDelete : 'CASCADE',
            onUpdate : 'CASCADE'
        },
    },
    cartId:{
        type : DataTypes.INTEGER,
        allowNull : false,
        references: {
            model : 'carts',
            key : 'id',
            onDelete :'CASCADE',
            onUpdate :'CASCADE'
        }
    },
    cartItem:{
        type: DataTypes.JSON,
        allowNull: false,

    //     [
    //     {
    //         productId :{
    //             type : DataTypes.INTEGER,
    //             references :{
    //                 model :'products',
    //                 key :'id',
    //                 onDelete :'CASCADE',
    //                 onUpdate :'CASCADE'
    //             }
    //         },
    //         title:{
    //             type : DataTypes.STRING(150),
    //             allowNull : false,
    //             validate :{notEmpty : true},
    //         },
    //         price:{
    //             type : DataTypes.FLOAT,
    //             allowNull : false,
    //             validate :{ notEmpty : true},
    //         },
    //         quantity :{
    //             type : DataTypes.INTEGER,
    //             allowNull : false,
    //             validate : {min: 1},
    //             defaultValue : 1,
    //         }
    //     }
    // ]
    },
    
    addressInfo :{
        type: DataTypes.JSON,
        allowNull:false,
    //     [
    //     {
    //         addressId :{
    //             type : DataTypes.INTEGER,
    //             references :{
    //                 model: 'addresses',
    //                 key:'id',
    //                 onDelete : 'CASCADE',
    //                 onUpdate : ' CASCADE'
    //             }
    //         },
    //         street:{
    //             type : DataTypes.STRING(150),
    //             allowNull : false,
    //             validate : {notEmpty : true}
    //         },
    //         city :{
    //             type : DataTypes.STRING(100),
    //             allowNull : false,
    //             validate :{notEmpty:true}
    //         },
    //         pincode :{
    //             type : DataTypes.INTEGER(6),
    //             allowNull : false,
    //             validate :{ notEmpty : true , isNumeric : true , len :[6,6]}
    //         },
    //         country :{
    //             type : DataTypes.STRING(100),
    //             allowNull: false,
    //             validate :{ notEmpty: true}
    //         },
    //         phone_no :{
    //             type : DataTypes.INTEGER(10),
    //             allowNull : false,
    //             validate :{ notEmpty : true, isNumeric : true , len :[10,10]}
    //         },  
    //     }
    // ]
    },
    orderStatus :{
        type : DataTypes.STRING,
        allowNull: false 
    },
    paymentMethod:{
        type : DataTypes.STRING,
        allowNull:false
    },
    paymentStatus :{
        type: DataTypes.STRING,
        allowNull: false
    },
    totalAmount:{
        type : DataTypes.INTEGER,
        allowNull: false
    },
    orderDate:{
        type: DataTypes.DATE,
        allowNull : false
    },
    orderUpdateDate:{
        type : DataTypes.DATE,
        allowNull : false
    },
    paymentId:{
        type : DataTypes.INTEGER,
        allowNull : null ,
        validate : {notEmpty: true}
    },
    payerId :{
        type : DataTypes.INTEGER,
        allowNull : false ,
        validate : { notEmpty : true}
    }
})
module.exports = Order ;