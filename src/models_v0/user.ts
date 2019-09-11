import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { ProjectDocument } from './project';
import Project from './project';

export interface UserProperties {
}

export interface UserDocument extends UserProperties, mongoose.Document {
  // Document related element in here
  // I'm ok to copy attributes in here
  _project: ProjectDocument,
  email: string,

  // ...But I can't maintain hundreds of methods :/
  summarize(): Promise<string>;
}

export interface UserModel extends mongoose.Model<UserDocument> {
  // Static prototypes in there
}

const userSchema = new Schema({
  _project: { type: Schema.Types.ObjectId, ref: 'Project' },
  email: { type: String, unique: true },
});

userSchema.methods.summarize = async function (): Promise<string> {
  const something = Project.projectStatic();
  const location: Error = this._project.getLocation({});

  return `One project lon=${location[0]} ; lat=${location[2]}\n${something}`;
};

export default mongoose.model<UserDocument, UserModel>('User', userSchema);
