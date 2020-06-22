import { Model, DataTypes } from "sequelize";

export class User extends Model {
  public id!: number;
  public email!: string;
  public phone!: string;
  public password!: string;
  public firstName!: string;
  public lastName!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}
