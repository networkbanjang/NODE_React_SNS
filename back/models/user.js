module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {  // users 생성
    //id가 기본적으로 들어있다
    email: {
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: true,        //고유한 값
    },
    nickname: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(140),
      allowNull: false,
    },
  }, {
    // sequelize, //ID 넣어주기
    // underscored: true,   // created_At,update_At
    // timestamps: true,  //createdAt , updateAt
    // paranoid: true, //deleteAt
    // modelName: 'User', //User  자바 스크립트에서 쓰는 이름
    // tableName: 'users', //Users 테이블에서 쓰는 이름
    charset: 'utf8',
    charset: 'utf8',
    collate: 'utf8_general_ci'   //한글저장
  });
  User.associate = (db) => { 
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, {through : 'Like', as: 'Liked'});
    db.User.belongsToMany(db.User,{through : 'Follow', as :'Followers',foreignKey: 'FollowingId'});
    db.User.belongsToMany(db.User,{through : 'Follow', as :'Followings',foreignKey:'FollowerId'});
  };
  return User;
}