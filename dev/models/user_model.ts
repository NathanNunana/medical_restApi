import { Model, DataTypes } from "sequelize";
import _ = require("lodash");
export class User extends Model {
  public id!: number;
  public email!: string;
  public phone!: string;
  public password!: string;
  public firstName!: string;
  public lastName!: string;
  public createdAt!: Date;
  public updatedAt!: Date;

  static _listNotNull(values: any[]): boolean {
    for (let i = 0; i < values.length; i++) {
      const val = values[i];
      if (!val) {
        return false;
      }
      if (typeof val === "string" && val.trim() == "") {
        return false;
      }
    }
    return true;
  }
  static async validateRaw(user: User): Promise<boolean> {
    const arr = _.toArray(user);
    console.log(arr);
    if (this._listNotNull(arr)) {
      return true;
    } else {
      throw new Error("Validation failed");
    }
  }
}
