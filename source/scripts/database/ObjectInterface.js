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
    this.database.ref(this.parentKey).child(this.key).update(data);
    return this;
  }
  delete(objectKey) {
    if (objectKey) { this.key = objectKey; }
    if (!this.key) {
      throw new Error('Object has not been saved to the database');
    }
    this.database.ref(this.parentKey).child(this.key).remove();
    return this;
  }
  fetch(objectKey) {
    if (objectKey) { this.key = objectKey; }
    if (!this.key) {
      throw new Error('Object has not been saved to the database');
    }
    this.database.ref(this.parentKey).child(objectKey).once('value', (snapshot) => {
      this.data = snapshot.val();
    });
    return this;
  }
}

export default ObjectInterface;

