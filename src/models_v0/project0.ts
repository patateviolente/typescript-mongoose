import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export interface ProjectProperties {
  visibility: 'public' | 'private';
}

export interface ProjectDocument extends ProjectProperties, mongoose.Document {
  getLocation(n: number): [number, number];
}

export interface ProjectModel extends mongoose.Model<ProjectDocument> {
  projectStatic(): Promise<string>;
}

const projectSchema = new Schema({
  visibility: { type: String },
});

projectSchema.methods.getLocation = function (n: number): [number, number] {
  return [n + 2.35, 48.78];
};

projectSchema.statics.projectStatic = function (): Promise<string> {
  return Promise.resolve('Hello from static world!');
};

export default mongoose.model<ProjectDocument, ProjectModel>('Project', projectSchema);
