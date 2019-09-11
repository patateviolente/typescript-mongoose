import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export interface ProjectProperties {
  visibility: 'public' | 'private',
}

export interface ProjectDocument extends ProjectProperties, mongoose.Document {
  getLocation(a: number): [number, number];
}

export interface ProjectModel extends mongoose.Model<ProjectDocument> {
  projectStatic(): string;
}

const projectSchema = new Schema({
  visibility: { type: String },
});

projectSchema.methods.getLocation = function (a: number): [number, number] {
  return [a + 2.35, 48.78];
};

projectSchema.statics.projectStatic = function (): string {
  return 'Hello from static world!';
};

export default mongoose.model<ProjectDocument, ProjectModel>('Project', projectSchema);
