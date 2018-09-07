let cards = [
  "../jpg/batman.jpg",
  "../jpg/cyborg.jpg",
  "../jpg/aquamen.jpg",
  "../jpg/superman.jpeg",
  "../jpg/The-Flash.jpg",
  "../jpg/wonder-woman.jpg"
];

// funkcja, która dubluje tablice oraz sortuje ją w losowej kolejności
const shuffleArray = arr => [...arr, ...arr].sort(() => 0.5 - Math.random());
cards = shuffleArray(cards);

// Wywoływacz karty
let card0 = document.getElementById("card0");
let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 = document.getElementById("card4");
let card5 = document.getElementById("card5");
let card6 = document.getElementById("card6");
let card7 = document.getElementById("card7");
let card8 = document.getElementById("card8");
let card9 = document.getElementById("card9");
let card10 = document.getElementById("card10");
let card11 = document.getElementById("card11");

card0.addEventListener("click", function() {
  reveal_card(0);
});
card1.addEventListener("click", function() {
  reveal_card(1);
});
card2.addEventListener("click", function() {
  reveal_card(2);
});
card3.addEventListener("click", function() {
  reveal_card(3);
});
card4.addEventListener("click", function() {
  reveal_card(4);
});
card5.addEventListener("click", function() {
  reveal_card(5);
});
card6.addEventListener("click", function() {
  reveal_card(6);
});
card7.addEventListener("click", function() {
  reveal_card(7);
});
card8.addEventListener("click", function() {
  reveal_card(8);
});
card9.addEventListener("click", function() {
  reveal_card(9);
});
card10.addEventListener("click", function() {
  reveal_card(10);
});
card11.addEventListener("click", function() {
  reveal_card(11);
});

// jeżeli będzie na true, to oznacza że pierwsza karta jest już odsłonięta
let one_visible = false;

// index widocznej pierwszej karty
let turn_counter = 0;

// index widocznej pierwszej karty
let visible_card;

// na początku gry żadna z kart nie jest odkryta, dlatego blokada nie obowiązuje, dlatego "false".
let lock = false;

let pairs = 6;

// Odsłanianie karty
function reveal_card(number) {
  let valueOpacity = $("#card" + number).css("opacity");

  // jeżeli opacity będzie różne od 0, to wykona się kod poniżej.
  //Zastosowałem to po to aby liczba tur nie powiększała się podczas klikania na ukryte karty.
  if (valueOpacity != 0 && lock == false) {
    lock = true; //włączenie blokady

    let picture = "url(..jpg/" + cards[number] + ")";

    $("#card" + number).css("background-image", picture); // odsłanianie każdej karty
    $("#card" + number).addClass("card_active"); // dodaje klase "card_active" w której w css ustawiłem efekt odsłoniętej już karty
    $("#card" + number).removeClass("card"); // usuwam klasę "Card" po to by klasa "card_active" mogła ją zastąpić

    if (one_visible == false) {
      //pierwsza karta
      one_visible = true;
      visible_card = number;
      lock = false; //zdjęcie blokady
    } else {
      //druga karta

      if (cards[visible_card] == cards[number] && visible_card != number) {
        //warunek znalezienia kart

        setTimeout(function() {
          hide2Cards(number, visible_card);
        }, 750); // ukrywa odkryte karty

        // dodaje efekt dźwiękowy na poprawne dobranie kart
        document.getElementById("good_choice").play();
      } else {
        // dodaje efekt dźwiękowy na błędne dobranie kart
        document.getElementById("wrong_choice").play();

        //powrót karty do początkowej pozycji
        setTimeout(function() {
          return2Cards(number, visible_card);
        }, 1000);
      }

      // turn_counter jest po to w if, aby nie zaliczała się tura po drugim kliknięciu tej samej karty
      if (visible_card != number) {
        turn_counter++;
      }

      $(".score").html("Round: " + turn_counter);
      one_visible = false;
    }
  }
}

function hide2Cards(number1, number2) {
  //ukrywam widoczność karty, zamiast ją usuwać , po to aby struktura planszy po odkryciu kart się nie zepsuła
  $("#card" + number1).css("opacity", "0");
  $("#card" + number2).css("opacity", "0");

  pairs--;
  if (pairs == 0) {
    $(".board").html(
      "<h1 class='win_rund'>You won! <br> You did it in " +
        turn_counter +
        " rounds </h1>"
    );
    document.getElementById("win_game").play();
  }

  // zdejmowanie blokady
  lock = false;
}

//powrót karty do pozycji początkowej
function return2Cards(number1, number2) {
  $("#card" + number1).css("background-image", "url(jpg/dc.jpg)");
  $("#card" + number1).addClass("card");
  $("#card" + number1).removeClass("card_active");

  $("#card" + number2).css("background-image", "url(jpg/dc.jpg)");
  $("#card" + number2).addClass("card");
  $("#card" + number2).removeClass("card_active");

  //zdejmowanie blokady
  lock = false;
}
