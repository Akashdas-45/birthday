/* =========================================
   OPENING SCREEN
========================================= */

function openSurprise() {

    const opening =
        document.getElementById("opening");

    opening.classList.add("hide");

    createConfetti();
}



/* =========================================
   GO TO MEMORIES
========================================= */

function goToMemories() {

    const memories =
        document.getElementById("memories");

    memories.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    createConfetti();
}



/* =========================================
   GO TO MESSAGE
========================================= */

function goToMessage() {

    const message =
        document.getElementById("message");

    message.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}



/* =========================================
   GO TO WISHES
========================================= */

function goToWishes() {

    const wishes =
        document.getElementById("wishes");

    wishes.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}



/* =========================================
   GO TO FINAL
========================================= */

function goToFinal() {

    const finalSection =
        document.getElementById("final");

    finalSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    createConfetti();

}



/* =========================================
   GO BACK TO HOME
========================================= */

function goToHome() {

    const home =
        document.getElementById("home");

    home.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}



/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    for (let i = 0; i < 30; i++) {

        const confetti =
            document.createElement("div");


        const items = [
            "❤️",
            "💕",
            "💖",
            "✨",
            "🎉"
        ];


        confetti.innerHTML =
            items[
                Math.floor(
                    Math.random() * items.length
                )
            ];


        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-20px";

        confetti.style.fontSize =
            Math.random() * 15 + 15 + "px";

        confetti.style.zIndex = "10000";

        confetti.style.pointerEvents = "none";

        confetti.style.transition =
            "transform 3s ease, opacity 3s ease";


        document.body.appendChild(confetti);


        setTimeout(function () {

            confetti.style.transform =
                `translateY(110vh) rotate(${Math.random() * 720}deg)`;

            confetti.style.opacity = "0";

        }, 50);


        setTimeout(function () {

            confetti.remove();

        }, 3500);

    }

}