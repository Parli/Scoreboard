import FirebaseInterface from './FirebaseInterface'

class ObjectInterface extends FirebaseInterface {
  create(data) {
    this.data = data;
    this.key = this.database.ref(this.parentKey).push(data).key;
    return this;
  }
  update(data) {
    if (!this.key) {
      throw new Error('Object has not been saved to the database');
    }
    this.ref.update(data);
    return this;
  }
  delete(objectKey) {
    if (objectKey) { this.key = objectKey; }
    if (!this.key) {
      throw new Error('Object has not been saved to the database');
    }
    this.ref.remove();
    return this;
  }
  fetch(objectKey) {
    if (objectKey) { this.key = objectKey; }
    if (!this.key) {
      throw new Error('Object has not been saved to the database');
    }
    this.ref.once('value', (snapshot) => {
      this.data = snapshot.val();
    });
    return this;
  }
  get ref() {
    return this.database.ref(this.parentKey).child(this.key);
  }
}

export default ObjectInterface;

