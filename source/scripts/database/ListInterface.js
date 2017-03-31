import FirebaseInterface from './FirebaseInterface'

class ListInterface extends FirebaseInterface {
  fetch() {
    this.database.ref(this.parentKey).once('value', (snapshot) => {
      this.data = snapshot.val();
    });
    return this;
  }
}

export default ListInterface;
