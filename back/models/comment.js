module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {  // comments 생성
    //id가 기본적으로 들어있다
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci'   //이모티콘
  });
  Comment.associate = (db) => {
    db.Comment.belongsTo(db.Post);
    db.Comment.belongsTo(db.User);
  };
  return Comment;
}