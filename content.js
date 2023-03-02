var Fahrenheit = function CtoF(Celsius) {
  return (Celsius*1.8)+32;
};

Fahrenheit = CtoF(10);
console.log(Fahrenheit);

const mando = [
  {
    "title": "The Mandalorian",
    "director": "Dave Filoni",
    "rating": 8.7
  },
  {
    "title": "The Child",
    "director": "Rick Famuyiwa",
    "rating": 8.6
  },
  {
    "title": "The Sin",
    "director": "Deborah Chow",
    "rating": 9.0
  },
  {
    "title": "Sanctuary",
    "director": "Bryce Dallas Howard",
    "rating": 7.8
  },
  {
    "title": "The Gunslinger",
    "director": "Dave Filoni",
    "rating": 7.6
  },
  {
    "title": "The Prisoner",
    "director": "Rick Famuyiwa",
    "rating": 8.3
  },
  {
    "title": "The Reckoning",
    "director": "Deborah Chow",
    "rating": 9.1
  },
  {
    "title": "Redemption",
    "director": "Taika Waititi",
    "rating": 9.3
  },
  {
    "title": "The Marshal",
    "director": "Jon Favreau",
    "rating": 8.9
  },
  {
    "title": "The Passenger",
    "director": "Peyton Reed",
    "rating": 7.9
  },
  {
    "title": "The Heiress",
    "director": "Bryce Dallas Howard",
    "rating": 8.8
  },
  {
    "title": "The Siege",
    "director": "Carl Weathers",
    "rating": 8.4
  },
  {
    "title": "The Jedi",
    "director": "Dave Filoni",
    "rating": 9.4
  },
  {
    "title": "The Tragedy",
    "director": "Robert Rodriguez",
    "rating": 9.2
  },
  {
    "title": "The Believer",
    "director": "Rick Famuyiwa",
    "rating": 9.0
  },
  {
    "title": "The Rescue",
    "director": "Peyton Reed",
    "rating": 9.8
  }
]

for ( i = 0 ; i < mando.length ; i++ ) {
  const sortedMando = mando.sort((a, b) => b.rating - a.rating);
  console.log(mando[i].title)
  console.log(mando[i].director)
  console.log(mando[i].rating)
  console.log();
}

for ( i = 0 ; i < mando.length ; i++ ) {
  console.log(mando[i].director);
}

for ( i = 0 ; i < mando.length ; i++ ) {
  if (mando[i].director == "Bryce Dallas Howard") {
    console.log(mando[i].title);
  }
}