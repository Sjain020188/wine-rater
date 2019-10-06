import firebase from "@firebase/app";
import "@firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

class FirebaseService {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.database = firebase.database();
    this.storeWineToFirebase = this.storeWineToFirebase.bind(this);
    this.all_wines = this.all_wines.bind(this);
    this.wine = this.wine.bind(this);
    this.snapshotToArray = this.snapshotToArray.bind(this);
  }

  storeWineToFirebase(
    name,
    type,
    year,
    wineCountry,
    wineGrape,
    wineRegion,
    sanderRating,
    ineRating,
    fitsTo
  ) {
    // TODO: GET LAST ID
    this.database
      .ref("wines/")
      .push({
        name: name,
        type: type,
        year: year,
        wineCountry: wineCountry,
        wineGrape: wineGrape,
        wineRegion: wineRegion,
        sanderRating: sanderRating,
        ineRating: ineRating,
        fitsTo: fitsTo,
      })
      .then(response => {
        this.wine(response.key);
        alert("WRITE SUCCSESSFUL");
      })
      .catch(error => alert("Write failed" + error));
  }

  all_wines() {
    return this.database.ref("wines").once("value");
  }

  wine(uid) {
    let wine;
    this.database.ref(`wines`).once("value", snapshot => {
      console.log(snapshot.val()[uid]);
      wine = snapshot.val()[uid];
    });
    return wine;
  }

  // TODO: APPLY?

  snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;

      returnArr.push(item);
    });

    return returnArr;
  }
}

export default FirebaseService;
