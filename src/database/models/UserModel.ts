import { Model, DataTypes } from "sequelize";

class UserModel extends Model {
  id: number;
  name: string;
  password: string;
  admin: boolean;

  public static init(sequelize: any) {
    super.init.call(
      this,
      {
        username: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        admin: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
      },
      {
        sequelize,
        tableName: "users",
      }
    );

    this.sync();

    return this;
  }
}

export default UserModel;
