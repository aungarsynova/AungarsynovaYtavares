(() => {
  console.log('memory game script fired!');

  //array to store images on card. I temporarily used numbers, but we will add images later when the game is somehow decent
  //JavaScript variables are containers for storing data values. Imagine that element/data value is a jam, and variable is a jar. We store our jam in the jar//
  var memory_array = ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6'];
  var memory_card_id = [];
  var memory_value = [];
  var cards_flipped = 0;

  //this function is supposed to shuffle cards when player starts a new game or refreshes the page//
  function shuffle(array) {

  //this function will be called every time the game starts again.
    cards_flipped = 0;


  }
