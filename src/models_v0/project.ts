import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export interface ProjectProperties {
  visibility: 'public' | 'private',
}

export interface ProjectDocument extends ProjectProperties, mongoose.Document {
  projectMethod(a: number): string;
}

export interface ProjectModel extends mongoose.Model<ProjectDocument> {
  projectStatic(): number;
}

const projectSchema = new Schema({
  visibility: { type: String },
});

projectSchema.methods.projectMethod = function (a: number): number  {
  return a + 10;
};

projectSchema.statics.projectStatic = function () {
  return 20;
};

export default mongoose.model<ProjectDocument, ProjectModel>('Project', projectSchema);
