export const config = {
  development: {
    SRC: '../client',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/meant-stack-todo-dev'
  },

  production: {
    SRC: '../public',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/meant-stack-todo-prod'
  }
};

export interface ConfigI {
  SRC: string;
  MONGODB_URI: string;
}
