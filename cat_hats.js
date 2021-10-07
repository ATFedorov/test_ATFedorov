let main = document.querySelector('main');
let hatsLink = document.querySelector('.hats-link');
let products = [
    {
        title: "Шапка \"Особенная\"",
        img_src: "files/hat_1.jpg",
        img_alt: "Шерстяная шапка №1",
        description: "Для себя любимой.",
        price: "Цена: 4000 руб."
    },
    {
        title: "Шапка \"Лютая стужа\"",
        img_src: "files/hat_2.jpg",
        img_alt: "Шерстяная шапка №2",
        description: "Согреет в самые сильные морозы.",
        price: "Цена: 6000 руб."
    },
    {
        title: "Шапка \"Спелая вишня\"",
        img_src: "files/hat_3.jpg",
        img_alt: "Шерстяная шапка №3",
        description: "Для тех, кто созрел.",
        price: "Цена: 5000 руб."
    },
    {
        title: "Шапка \"Рождество\"",
        img_src: "files/hat_4.jpg",
        img_alt: "Шерстяная шапка №4",
        description: "Станет хорошим подарком на рождество родным.",
        price: "Цена: 3000 руб."
    }
];

hatsLink.onclick = function() {
    main.innerHTML = "";

    let cancel = document.createElement('a');
    cancel.href = "index.html";
    cancel.innerHTML = "<p>На главную</p>";
    main.append(cancel);

    let heading = document.createElement('h2');
    heading.textContent = "Шерстяные шапки";
    main.append(heading);

    for (let product of products) {
        let card = document.createElement('div');
        card.classList.add("product");

        let title = document.createElement('h3');
        title.textContent = product.title;
        card.append(title);

        let body = document.createElement('p');
        let img = document.createElement('img');
        img.src = product.img_src;
        img.height = 200;
        img.alt = product.img_alt;
        body.append(img);
        body.append(product.description);
        card.append(body);

        let price = document.createElement('p');
        price.textContent = product.price;
        card.append(price);

        main.append(card);
    }
}
