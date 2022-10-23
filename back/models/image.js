module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {  // Images 생성
    //id가 기본적으로 들어있다
    src: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci'   //한글저장
  });
  Image.associate = (db) => { 
    db.Image.belongsTo(db.Post);
  };
  return Image;
}