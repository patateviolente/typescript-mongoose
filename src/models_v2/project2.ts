import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { UserModel } from './user2';
import { bindMethodsToSchema } from './tools';

let Project: ProjectModel;

export interface ProjectProperties {
  visibility: 'public' | 'private';
}

export interface ProjectDocument
  extends ProjectProperties, mongoose.Document, ProjectMethods {}

export interface ProjectModel
  extends mongoose.Model<ProjectDocument>, ProjectMethods, ProjectStatics {}

const projectSchema = new Schema({
  visibility: { type: String },
});

class ProjectMethods extends mongoose.Model {
  public getLocation(n: number): [number, number] {
    return [n + 2.35, 48.78];
  }
}

class ProjectStatics {
  async projectStatic(): Promise<string> {
    return Promise.resolve('Hello from static world!');
  }
}

bindMethodsToSchema(projectSchema, ProjectMethods, 'methods');
bindMethodsToSchema(projectSchema, ProjectStatics, 'statics');

Project = mongoose.model<ProjectDocument, ProjectModel>('Project', projectSchema);
export default Project;
