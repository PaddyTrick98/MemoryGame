var cards = [
  "../jpg/batman.jpg",
  "../jpg/cyborg.jpg",
  "../jpg/aquamen.jpg",
  "../jpg/superman.jpeg",
  "../jpg/The-Flash.jpg",
  "../jpg/wonder-woman.jpg"
]; // w tym miejscu wstawie grafiki kart w odpowiedniej kolejności

// funkcja, która dubluje tablice oraz sortuje ją w losowej kolejności
const shuffleArray = arr => [...arr, ...arr].sort(() => 0.5 - Math.random());
cards = shuffleArray(cards);

// Wywoływacz karty
var card0 = document.getElementById("card0");
var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");
var card5 = document.getElementById("card5");
var card6 = document.getElementById("card6");
var card7 = document.getElementById("card7");
var card8 = document.getElementById("card8");
var card9 = document.getElementById("card9");
var card10 = document.getElementById("card10");
var card11 = document.getElementById("card11");

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

let one_visible = false;
let turn_counter = 0;
let index_visible_card;
let lock = false; // na początku gry żadna z kart nie jest odkryta, dlatego blokada nie obowiązuje, dlatego "false".
let pairs = 6;

// Odsłanianie karty
function reveal_card(number) {
  let valueOpacity = $("#card" + number).css("opacity");

  if (valueOpacity != 0 && lock == false) {
    // jeżeli opacity będzie różne od 0, to wykona się kod poniżej. Zastosowałem to po to aby liczba tur nie powiększała się podczas klikania na ukryte karty.

    lock = true;

    let picture = "url(..jpg/" + cards[number] + ")";

    $("#card" + number).css("background-image", picture);
    $("#card" + number).addClass("card_active"); // dodaje klase "card_active" w której w css ustawiłem efekt odsłoniętej już karty
    $("#card" + number).removeClass("card"); // usuwam klasę "Card" po to by klasa "card_active" mogła ją zastąpić

    if (one_visible == false) {
      //pierwsza karta
      one_visible = true;
      index_visible_card = number;
      lock = false;
    } else {
      //druga karta

      if (
        cards[index_visible_card] == cards[number] &&
        index_visible_card != number
      ) {
        //warunek znalezienia kart
        // alert("Para!")

        setTimeout(function() {
          hide2Cards(number, index_visible_card);
        }, 750); // ukrywa odkryte karty

        document.getElementById("good_choice").play(); // dodaje efekt dźwiękowy na poprawne dobranie kart
      } else {
        document.getElementById("wrong_choice").play(); // dodaje efekt dźwiękowy na błędne dobranie kart

        setTimeout(function() {
          return2Cards(number, index_visible_card);
        }, 1000);
      }
      if (index_visible_card != number) {
        turn_counter++;
      }

      $(".score").html("Tura: " + turn_counter);
      one_visible = false;
    }
  }
}

function hide2Cards(number1, number2) {
  $("#card" + number1).css("opacity", "0"); //ukrywam widoczność karty, zamiast ją usuwać , po to aby struktura planszy po odkryciu kart się nie zepsuła
  $("#card" + number2).css("opacity", "0");

  pairs--;
  if (pairs == 0) {
    $(".board").html(
      "<h1 class='win_rund'>Wygrałeś! <br> Zrobiłeś to w " +
        turn_counter +
        " rund </h1>"
    );
    document.getElementById("win_game").play();
  }
  lock = false;
}

function return2Cards(number1, number2) {
  $("#card" + number1).css("background-image", "url(jpg/dc.jpg)");
  $("#card" + number1).addClass("card");
  $("#card" + number1).removeClass("card_active");

  $("#card" + number2).css("background-image", "url(jpg/dc.jpg)");
  $("#card" + number2).addClass("card");
  $("#card" + number2).removeClass("card_active");

  lock = false;
}
