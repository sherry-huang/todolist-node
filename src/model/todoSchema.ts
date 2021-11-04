const Sequelize = require('sequelize'); 

const sequelize = new Sequelize("mariadb://user1:foxconnn@10.62.164.217:3306/sherry", {
    // user1:foxconnn
    // mariadb://user1:foxconnn@10.62.164.229:3306/sherry
    // mariadb://root:foxconn@10.62.163.46:3366/sherry
    dialectOptions: {
        useUTC: false, // for reading from database
        timezone: 'Etc/GMT0',
    },
    timezone: 'Etc/GMT0', // for writing to database
});

const DataTypes = Sequelize.DataTypes;
const todo = sequelize.define('todo', {
    uid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    done: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    create: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    tableName: 'todo',
    timestamps: false,
    freezeTableName: true,
});

export default todo;