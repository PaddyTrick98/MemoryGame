var cards = [
  "../jpg/batman.jpg",
  "../jpg/joker.jpg",
  "../jpg/oliver.jpg",
  "../jpg/oliver.jpg",
  "../jpg/superman.jpeg",
  "../jpg/The-Flash.jpg",
  "../jpg/joker.jpg",
  "../jpg/wonder-woman.jpg",
  "../jpg/The-Flash.jpg",
  "../jpg/batman.jpg",
  "../jpg/superman.jpeg",
  "../jpg/wonder-woman.jpg"
]; // w tym miejscu wstawie grafiki kart w odpowiedniej kolejności

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

var one_visible = false;
var turn_counter = 0;
var index_visible_card;



function reveal_card(number) {
  //alert(number);

  let picture = "url(..jpg/" + cards[number] + ")";

  $("#card" + number).css("background-image", picture); // odsłanianie karty
    $("#card" + number).addClass("card_active");
    $("#card" + number).removeClass("card");


    if(one_visible == false){
        //pierwsza karta
        one_visible = true;
        index_visible_card = number;
    } else {
        //druga karta

        if(cards[index_visible_card] == cards[number]){
           // alert("Para!")

            setTimeout(function(){
                hide2Cards(number, index_visible_card)
            },750);

            

        } else {
            alert("Błąd!")
        }

        turn_counter++

        $('.score').html('Tura: '+ turn_counter);
        one_visible = false;        
    }



}

function hide2Cards(number1, number2){
    $('#card' + number1).css('opacity', '0');
    $('#card' + number2).css('opacity', '0');
}