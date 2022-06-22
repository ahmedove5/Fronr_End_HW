

// first question

const friends = ["Melissa", "Marc", "Andrew", "Nick"];

friends.forEach(function(friend) {
  console.log("I have a friend named " + friend.toUpperCase());
});



// second question

const number = [1, 5, 8]

  const numberssquare = number.map(num => num ** 2);
  console.log(numberssquare)


//   third question
const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];
array=instructors.map(names=>names + " is awesome") 
console.log(array)


// fourth question
const nums = [25, 6, 8, 3]
let evenNumbers = 0;
nums.reduce((num1, num2) => {
  if (num1 % 2 == 0 || num2 % 2 == 0) {
    evenNumbers++;
  }
});

console.log(evenNumbers); 

// fifth question
const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
jesrks= people.filter(element=> element.includes("jerks"))
console.log(jesrks)

// sixth question
let averagefunction = (a, b) => a * b;
const averag = (array) => {
  let cont = 0;
  let sum = 0;
  array.forEach((element) => {
    cont++, (sum += element);
  });
  return sum / cont;
};
console.log(averag([8, 2, 2, 4]));


//seventh question
const reverse =(word => word.split("").reverse().join(""));
console.log(reverse("caterpillar"));


//eighth question
const movie = {
    name: "Puff the Magic Dragon",
    duration : 30,
    stars : ["Puff", "Jackie", "LivingSneezes"],

    informationmovie : function() {
        return (`${this.name}   lasts for  ${this.duration} minutes stars ${this.stars}`)
      }
  };

  console.log(movie.informationmovie())


// lab books

  var books = [
    {
     title: 'book1',
     author: 'name1',
     alreadyRead: true
    },
    {
      title: 'book 2',
      author: 'name2',
      alreadyRead: true
    },
    {
      title: 'book3',
      author: 'name3',
      alreadyRead: false
    },
    {
      title: 'book4',
      author: 'name4',
      alreadyRead: false
    }
    ];
  
  for (var i = 0; i < books.length;  i++) {
    var book = books[i];
    var bookInfo = book.title + " by " + book.author;
    if(book.alreadyRead) {
      console.log('You already read ' + bookInfo);
    } else {
      console.log('You still need to read ' + bookInfo);
    }
    
  }
