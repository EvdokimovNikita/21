let cards = [
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10
];

let cards_playable = cards.slice();

function shuffle(array) {
    array.sort(function () {
        return Math.random() - 0.5
    });
}

shuffle(cards_playable);

function getCard() {
    return cards_playable.shift();
}

// Подсчёт суммы карт
let cards_of_user_sum = 0;
let cards_of_dealers_sum = 0;

cards_of_user_sum += getCard();
cards_of_user_sum += getCard();

cards_of_dealers_sum += getCard();
cards_of_dealers_sum += getCard();

// Вопрос юзеру - хочет ли карту
function askUser() {
    return window.prompt(
        'Сумма ваших карт = '
        + cards_of_user_sum
        + '\n Хотите взять ещё?'
    );
}

function dealerTurn() {
    while (true) {
        // проверка для добора диллера
        if (cards_of_user_sum >= cards_of_dealers_sum) {
            cards_of_dealers_sum += getCard(); // берёт карту
            console.log(cards_of_dealers_sum);
        } else {
            console.log(cards_of_dealers_sum);
            break;
        }

        // проверят сумму диллера, больше ли 21
        if (cards_of_dealers_sum > 21) {
            console.log("LOOSER");
            break;
        }
    }
}

while (true) {
    // Проверить решение пользователя
    if (askUser() === "+") {
        cards_of_user_sum += getCard(); // берёт карту
        console.log(cards_of_user_sum);
    } else {
        console.log(cards_of_user_sum);

        // набирает дилер
        dealerTurn();
        break;
    }

    // проверят сумму пользователя, больше ли 21
    if (cards_of_user_sum > 21) {
        console.log("LOOSER");
        break;
    } else if (cards_of_user_sum === 21) {
        console.log('CHAMPION');
    }
}

if (cards_of_user_sum < cards_of_dealers_sum && cards_of_dealers_sum < 22 || cards_of_user_sum > 21) {
    console.log("Дилер Вин");
} else if (cards_of_user_sum === cards_of_dealers_sum) {
    console.log("Победила дружба");
} else {
    console.log("Выиграл юзер");
}
