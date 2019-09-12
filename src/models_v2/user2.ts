import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { ProjectDocument } from './project2';
import Project from './project2';

export interface UserProperties {
  _project: ProjectDocument;
  email: string;
}

export interface UserDocument extends UserProperties, mongoose.Document, UserMethods {}

export interface UserModel extends mongoose.Model<UserDocument> {}

const userSchema = new Schema({
  _project: { type: Schema.Types.ObjectId, ref: 'Project' },
  email: { type: String, unique: true },
});

class UserMethods extends mongoose.Model {
  public async summarize(this: UserDocument): Promise<string> {
    // Testing model related methods with invalid signature
    const p: boolean = await Project.findById(null).exec();
    const u: boolean = this.findById(null).exec();

    const something = await Project.projectStatic();
    const location: [number, number] = this._project.getLocation(10);

    return `One project lon=${location[0]} ; lat=${location[1]}\n${something}`;
  }
}

export default mongoose.model<UserDocument, UserModel>('User', userSchema);
