import { createStateGame } from "./state.js";

const createGame = (state) => {

    const playSound = () => {
        const audio = new Audio("./src/assets/sound/hit.m4a")
        audio.volume = 0.2;
        audio.play();
    }
  const countDown = () => {
    --state.values.currentTime;
    state.views.timeLeft.textContent = state.values.currentTime;
    if (state.values.currentTime <= 0) {
        clearInterval(state.values.countDownTimerId)
        clearInterval(state.values.timerId)
        alert("Acabou mizeravi o jogo, sua pontuação é " + state.values.result)
    }
  };

  const randomSquereEnemy = () => {
    state.views.enemy.classList.remove("panel__square--enemy");
    const randomNumber = Math.floor(Math.random() * 8 + 1);
    const randomSquere = state.views.squares[randomNumber];

    randomSquere.classList.add("panel__square--enemy");
    state.views.enemy = randomSquere;
  };

  const moveEnemy = () => {
    state.values.timerId = setInterval(
      randomSquereEnemy,
      state.values.gameVelocity
    );
  };
  const addListenerHitBox = () => {
    state.views.panel.addEventListener("mousedown", ({ target: element }) => {
      const isEnemy = element.classList.contains("panel__square--enemy");

      if (isEnemy) {
        ++state.values.result;
        state.views.score.textContent = state.values.result;
        playSound()
      }
    });
  };

  const init = () => {
    state.values.countDownTimerId = setInterval(countDown, 1000);

    addListenerHitBox();
    moveEnemy();
  };

  return {
    init,
  };
};

const stateGame = createStateGame();
export default createGame(stateGame);
