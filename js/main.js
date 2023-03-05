// Елементи поля
const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const totalPriseElement = document.querySelector('#total-price');

// Радіокнопки
const radioButtonType = document.querySelectorAll('input[name="type"]');
const radioButtonBuilding = document.querySelectorAll('input[name="building"]');
const radioButtonRadio = document.querySelectorAll('input[name="rooms"]');

// Check-Boxes
const checkCeling = document.querySelectorAll('input[name="ceiling"]');
const checkWalls = document.querySelectorAll('input[name="walls"]');
const checkFloor = document.querySelectorAll('input[name="floor"]');

// Всі inputs
const inputs = document.querySelectorAll('input');


// Знаходимо базовий прайс
const basePriseText = document.querySelector('#base-prise');
// Конвертуємо текстовий прайс (рядок) в числовий
const basePrise = parseInt (basePriseText.textContent, 10);


// Зв'язування Range з текстовим полем
// Прослуховування подій input
squareRange.addEventListener('input', function(){
    squareInput.value = squareRange.value;
});
// Прослуховування подій range-input
squareInput.addEventListener('input', function(){
    squareRange.value = squareInput.value
});


// Створюємо функцію в якій робимо розрахунок загальної вартості ремонту
function calculate () {
    let totalPrise = basePrise * parseInt(squareInput.value, 10);

    // проходимо значення радіо-кнопок radioButtonType
    for (const itemType of radioButtonType) {
        if (itemType.checked === true) {
            totalPrise = totalPrise * parseFloat(itemType.value);
        }
    };

    // проходимо значення радіо-кнопок radioButtonBuilding
    for (const itemBuilding of radioButtonBuilding) {
        if (itemBuilding.checked === true) {
            totalPrise = totalPrise * parseFloat(itemBuilding.value);
        }
    };

    // проходимо значення радіо-кнопок radioButtonRadio
    for (const itemRadio of radioButtonRadio) {
        if (itemRadio.checked === true) {
            totalPrise = totalPrise * parseFloat(itemRadio.value);
        }
    };

    // Натяжна стеля
    for (const itemCeling of checkCeling) {
        if (itemCeling.checked === true) {
            let totalCeling = parseFloat(itemCeling.value * squareInput.value);
            totalPrise = totalPrise + parseFloat(itemCeling.value * squareInput.value);
        }
    };

    // Фарбування стін
    for (const itemWalls of checkWalls) {
        if (itemWalls.checked === true) {
            let totalWalls = parseFloat(itemWalls.value * squareInput.value);
            totalPrise = totalPrise + parseFloat(itemWalls.value * squareInput.value);
        }
    };

    // Тепла підлога
    for (const itemFloor of checkFloor) {
        if (itemFloor.checked === true) {
            let totalFloor = parseFloat(itemFloor.value * squareInput.value);
            totalPrise = totalPrise + parseFloat(itemFloor.value * squareInput.value);
        }
    };

    // застосовуємо форматтер для числа, щоб воно легше читалося
    const formatter = new Intl.NumberFormat('ua');
    totalPriseElement.textContent = formatter.format(totalPrise); //вивід загальної вартості ремонту на сторінку з візуальним форматуванням
};

calculate ();

// Проходимо всю колекцію інпутів на зміну значення в кожній з них і запускаємо функцію прорахунку загальної вартості
for (const item of inputs) {
    item.addEventListener('input', function(){
        calculate ();
    })
    
}