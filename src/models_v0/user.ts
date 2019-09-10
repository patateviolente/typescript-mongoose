import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { ProjectDocument } from './project';
import Project from './project';

export interface UserProperties {
  _project: ProjectDocument,
  email: string,
}

export interface UserDocument extends UserProperties, mongoose.Document {
  // Imagine you have to copy prototypes of 100 methods in there :/
  userMethod1(start: number): number,
}

export interface UserModel extends mongoose.Model<UserDocument> {}

const userSchema = new Schema({
  _project: { type: Schema.Types.ObjectId, ref: 'Project' },
  email: { type: String, unique: true },
});

userSchema.methods.userMethod1 = function (start: number): number {
  const init = Project.projectStatic();

  const u = this._project.projectMethod(init + start);

  return u;
};

export default mongoose.model<UserDocument, UserModel>('User', userSchema);
