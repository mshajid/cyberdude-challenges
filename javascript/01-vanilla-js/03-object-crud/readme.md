# Object (CRUD) (Javascript Challenge)
This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> **Task #1** : Create an Object About Your Self, and You Should Manipulate the Object as well (Create, Read, Update, Delete).
> 
>  

```js
// My If/Else Challenge Code Has Been Deployed Here. 

const shajidData = {
  names: {
    fullName: "Shajid Shafee",
    otherNames: ["Saji", "Kai", "Kei", "Mikazuki"],
  },
  livesIn: "Sri Lanka",
  aliveStatus: true,
  age: function (bornYear, currentYear) {
    let ageCalculator = currentYear - bornYear;
    let finalAge = ageCalculator;

    if (finalAge > 10 && finalAge < 20) {
      console.log(`${finalAge}, You're a kid.`);
    } else if (finalAge >= 20 && finalAge <= 30) {
      console.log(
        `${this.names.fullName} ${finalAge}, You're going to be an adult`
      );
    } else if (finalAge > 30 && finalAge <= 60) {
      console.log(`${this.names.fullName} ${finalAge}, You're getting old`);
    } else if (finalAge > 60 && finalAge <= 80) {
      console.log(
        `${this.names.fullName} ${finalAge}, Such a life experience.`
      );
    } else if (finalAge > 80 && finalAge <= 100) {
      console.warn(
        `${this.names.fullName} ${finalAge}, You're going to be a Zombie.`
      );
      console.error("T-VIRUS Expected");
    } else {
      console.log("Kindly, Enter your age properly.");
    }
    return;
  },
  contact: {
    email: "shajid2biz@xyz.com",
    phNumber: 119,
    website: "www.ShajidShafee.com",
  },
  favorites: {
    books: {
      book1: "Ideal Father",
      book2: "Shoe Dog",
      book3: "Courage is Calling",
      book4: "Think Like A Monk",
      book5: "The Hidden School",
      book6: "The First 20 Hours",
      book7: "The 1-Page Marketing Plan",
      book8: "Crushing It",
      book9: "Eloquent JavaScript",
    },
    movies: {
      movie1: "The Inception",
      movie2: "The Batman",
      movie3: "John Wick Chapter 4",
      movie4: "Thuppaki",
      movie5: "Soorarai Pottru",
      movie6: "Hacksaw Ridge",
      movie7: "LEO",
      movie8: "Me Before You",
      movie9: "Honor Among Thieves",
    },
    animes: {
      anime1: "Attack on Titan",
      anime2: "Iron Blooded Orphans",
      anime3: "Your Lies In April",
      anime4: "Death Note",
      anime5: "Naruto Shippuden",
      anime6: "Jujutsu Kaisen",
      anime7: "Bleach",
      anime8: "Your Name",
    },
    games: {
      game1: "Cyberpunk 2077",
      game2: "COD Warzone 2.0",
      game3: "Elden Ring",
      game4: "The Last of Us",
      game5: "God of War Ragnarok",
      game6: "Hollow Knight",
      game7: "Hades",
    },
  },
  myself: function () {
    console.log(
      `This is ${this.names.fullName}, and check the age function to know my age. and I like to play ${this.favorites.games.game1} and to watch ${this.favorites.animes.anime1} but unfortunately it's finished last week. Check myself as an Object if it's piqued your interests. I would like collab with y'all so don't forget to check this to reach me out ${this.contact.phNumber}`
    );
  },
};

// Strings, Boolean, Number, Array, Object -> Create / Read / Update / Delete

// TODO: Calculate Your Age (Enter Born Year, then Current Year)
// const ageData = shajidData.age(1925, 2023);
// const newp = shajidData.myself();

// //TODO: Deleting A Object Value

function delObj() {
  let deleteObjects = delete shajidData.names.otherNames;
  return deleteObjects;
}

// delObj() // To Delete The Object Property.

// TODO: Update New Nicknames to an Array.
let pushNewNicknames = shajidData.names.otherNames.push("chettiyar mapla"); // Your Nicknames Here

// TODO: Adding New Books/Movies/Animes/Games.. to Existing Object Collections.
let existingAnimes = shajidData.favorites.animes;
let newAnimesToList = { anime20: "Spy X Family" }; //! Updating New Anime to Anime Collection.
let newGamesToList = {};
let newMoviesToList = {};
let newBooksToList = { book10: "harryPotter" };

function addThisToCollection(anime, games, movies, books) {
  const updatingAnimes = Object.assign(shajidData.favorites.animes, anime);
  // console.log(updatingAnimes); // To Show The Current Lists

  const updatingGames = Object.assign(shajidData.favorites.games, games);
  //   console.log(updatingGames); // To Show The Current Lists

  const updatingMovies = Object.assign(shajidData.favorites.movies, movies);
  //   console.log(updatingMovies); // To Show The Current Lists

  const updatingBooks = Object.assign(shajidData.favorites.books, books);
  //   console.log(updatingBooks); // To Show The Current Lists
}

console.log(shajidData.favorites.books);

addThisToCollection(
  newAnimesToList,
  newGamesToList,
  newMoviesToList,
  newBooksToList
);

```

### Live link -> 
Deploy it and put the link here.


## Acknowledgement:
 - [@AnbuSelvan](https://github.com/anburocky3) | GitHub Profile.

## References:

  - I should give a big thanks to this [CyberDude JavaScript Playlist](https://www.youtube.com/playlist?list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa). Without this, I don't think I could write thise above whole code bymyself. 
