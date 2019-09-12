import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export interface ProjectProperties {
  visibility: 'public' | 'private';
}

export interface ProjectDocument extends ProjectProperties, mongoose.Document, ProjectMethods {}

export interface ProjectModel extends mongoose.Model<ProjectDocument>, ProjectMethods {}

const projectSchema = new Schema({
  visibility: { type: String },
});

class ProjectMethods extends mongoose.Model {
  public getLocation(n: number): [number, number] {
    return [n + 2.35, 48.78];
  }

  static async projectStatic(): Promise<string> {
    return Promise.resolve('Hello from static world!');
  }
}

export default mongoose.model<ProjectDocument, ProjectModel>('Project', projectSchema);
