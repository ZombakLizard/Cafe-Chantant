const input = document.getElementById("protocol");
const button = document.getElementById("confirm");
const glass = document.querySelector(".glass");
const terminal = document.getElementById("terminal");
const output = document.getElementById("output");
const rain = document.getElementById("rain");

const protocol = `Протокол K051C принят.

Протокол K051C принят. Пожалуйста, определите тип угрозы и соблюдайте инструкции 

· I — можно игнорировать.
· II — надо закрыть.
· III — надо спрятать.
· IV — надо уйти.
· V — надо спасаться.

🌧️ K051C(I) — Легкий дождь 

· Признак: Капли не ощутимы
· Действие:
1. Проверить, что Самиздат застёгнута и все содержимое. 

 ☔️ K051C(II) — Умеренный дождь 

· Признак: Капли отчётливо слышны, но нет потоков воды.
· Действие:
1. Спрятать Самиздат в основное отделение. 
2. Проверить все содержимое Самиздат. 
3. Одеть дождевик 

☔️ K051C(III) — Сильный дождь 

· Признак: Вода течёт по одежде, трудно идти, ветер раскачивает. 
· Действие: 
1. Переместить Самиздат в герметичный мешок.
2. Проверить все содержимое Самиздат. 
3. Спрятать кабель питания Самиздат на левой лямке. 
4. Одеть дождевик 
5. Постараться найти укрытие 

(Все проверки проводить на ощупь)

⛈️ K051C(IV) — Ливень 

· Признак: Вода льёт стеной, видимость плохая, молнии рядом, можно захлебнутся 
· Действие: 
1. Искать укрытие
2. Переместить Самиздат в герметичный мешок. 
3. Проверить все содержимое Самиздат. 
4. Спрятать кабель питания Самиздат на левой лямке. 
5. Проверить порты в отсеке N3.
6. Одеть дождевик 

(Все проверки проводить на ощупь)

⛈️ K051C(V) — Экстремальный ливень

· Признак: Вода заливает всё вокруг, опасно находиться на улице. Молнии бьют рядом. Уровень воды стремительно поднимается
· Действие: 
1. Искать укрытие
2. Переместить Самиздат в герметичный мешок. 
3. Проверить все содержимое Самиздат. 
4. Спрятать кабель питания Самиздат на левой лямке. 
5. Проверить порты в отсеке N3.
6. Спрятать все модули внутрь дрейдла. 
7. Одеть дождевик 

(Все проверки проводить на ощупь)
`;

button.addEventListener("click", checkProtocol);

input.addEventListener("keydown", e => {

    if (e.key === "Enter") {

        checkProtocol();

    }

});

function checkProtocol() {

    if (input.value.trim().toUpperCase() === "K051C") {

        activate();

    } else {

        input.animate([
            { transform: "translateX(-8px)" },
            { transform: "translateX(8px)" },
            { transform: "translateX(-8px)" },
            { transform: "translateX(0)" }
        ], {
            duration: 350
        });

    }

}

function activate() {

    document.body.classList.add("protocol");

    createRain();

    glass.animate([
        { opacity: 1, transform: "translateY(0px)" },
        { opacity: 0, transform: "translateY(-20px)" }
    ], {
        duration: 700,
        fill: "forwards"
    });

    setTimeout(() => {

        glass.style.display = "none";

        terminal.style.display = "block";

        terminal.style.animation = "fade .8s";

        typeWriter(protocol);

    }, 700);

}

function typeWriter(text) {

    output.textContent = "";

    let i = 0;

    const timer = setInterval(() => {

        output.textContent += text.charAt(i);

        i++;

        if (i >= text.length) {

            clearInterval(timer);

        }

    }, 15);

}

function createRain() {

    rain.innerHTML = "";

    for (let i = 0; i < 180; i++) {

        const drop = document.createElement("div");

        drop.className = "drop";

        drop.style.left = Math.random() * 100 + "vw";

        drop.style.height = 50 + Math.random() * 120 + "px";

        drop.style.animationDuration = 0.8 + Math.random() * 1.3 + "s";

        drop.style.animationDelay = Math.random() * 2 + "s";

        rain.appendChild(drop);

    }

}
