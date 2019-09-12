import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { ProjectDocument } from './project0';
import Project from './project0';

export interface UserProperties {
  // I'm ok to copy attributes in here
  _project: ProjectDocument;
  email: string;
}

export interface UserDocument extends UserProperties, mongoose.Document {
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

userSchema.methods.summarize = async function (this: UserDocument): Promise<string> {
  // Testing model related methods with invalid signature
  const p: boolean = await Project.findById(null).exec();
  const u: boolean = this.findById(null);

  const something = await Project.projectStatic();
  const location: [number, number] = this._project.getLocation(10);

  return `One project lon=${location[0]} ; lat=${location[1]}\n${something}`;
};

export default mongoose.model<UserDocument, UserModel>('User', userSchema);
