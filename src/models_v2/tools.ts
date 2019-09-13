import { Schema } from 'mongoose';

export function bindMethodsToSchema(schema: Schema, myClass, type: 'methods' | 'statics') {
  const entity = new myClass();

  for (const methodsName of Object.getOwnPropertyNames(Object.getPrototypeOf(entity))) {
    const method = entity[methodsName];
    if (method instanceof Function && method !== myClass) {
      console.log(`> adding ${type} "${methodsName}"`);
      schema[type][methodsName] = method;
    }
  }

  if (type === 'statics') {
    Object.keys(entity).forEach((key) => {
      console.log(`> adding statics constant "${key}"`);
      schema.statics[key] = entity[key];
    });
  }
}
