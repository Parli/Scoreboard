class FirebaseInterface {
  constructor(database) {
    this.database = database;
    this.data = {};
    return this;
  }
  create() {
    throw new Error('FirebaseInterface "create" method not implemented');
  }
  update() {
    throw new Error('FirebaseInterface "update" method not implemented');
  }
  delete() {
    throw new Error('FirebaseInterface "delete" method not implemented');
  }
  fetch() {
    throw new Error('FirebaseInterface "fetch" method not implemented');
  }
  get parentKey() {
    throw new Error('FirebaseInterface "parentKey" property is not defined');
  }
}

export default FirebaseInterface;
