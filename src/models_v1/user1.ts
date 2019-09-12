import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { ProjectDocument } from './project1';
import Project from './project1';

export interface UserProperties {
  _project: ProjectDocument;
  email: string;
}

// NEW No more methods in there :)
export interface UserDocument extends UserProperties, mongoose.Document, UserMethods {}

// NEW No more statics in there :)
export interface UserModel extends mongoose.Model<UserDocument> {}

const userSchema = new Schema({
  _project: { type: Schema.Types.ObjectId, ref: 'Project' },
  email: { type: String, unique: true },
});

class UserMethods {
  // NEW methods are in class
  public async summarize(this: UserDocument): Promise<string> {
    // Testing model related methods with invalid signature
    const func1: boolean = await Project.findById(null).exec();
    const func2: boolean = await this.save();
    const email: boolean = this.email;
    const func3: boolean = await this.find().exec();

    const something = await Project.projectStatic();
    const location: [number, number] = this._project.getLocation(10);

    return `One project lon=${location[0]} ; lat=${location[1]}\n${something}`;
  }
}

export default mongoose.model<UserDocument, UserModel>('User', userSchema);
