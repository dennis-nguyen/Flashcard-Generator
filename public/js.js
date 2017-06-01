let cardArray = [];
let cardCounter = 0;

let showCard = () => {
    if (cardArray[cardCounter].type == "basic") {
        showBasic();
    } else {
        showCloze();
    }
};

let showBasic = () => {
    $(".flashCard").text(cardArray[cardCounter].front);
};

let showCloze = () => {
    $(".flashCard").text(cardArray[cardCounter].partial);
};

let checkAnswer = () => {
    if (cardArray[cardCounter].type == "basic") {
        answerBasic();
    } else {
        answerCloze();
    }
};

let answerBasic = () => {
    $(".flashCard").text(cardArray[cardCounter].back);
    cardCounter++;
    setTimeout(gameStart, 3000);
    $(".answerInput").val("");
};

let answerCloze = () => {
    $(".flashCard").text(cardArray[cardCounter].full);
    cardCounter++;
    setTimeout(gameStart, 3000);
    $(".answerInput").val("");
};

let gameStart = () => {
    if (cardCounter == cardArray.length) {
        alert("no more cards left, restarting");
        cardCounter = 0;
        setTimeout(showCard, 3000);
    } else {
        showCard();
    }
};

let getData = () => {
    $.get("http://localhost:3000/data/", function (data, status) {
        // alert("Data: " + data + "\nStatus: " + status);
        cardArray = data;
    }).done(function () {
        gameStart();
    });
};
$(".submitBtn").on("click", function () {
    checkAnswer();
});

getData();