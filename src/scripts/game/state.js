export const createStateGame = () => {
  const panel = document.querySelector(".panel");
  const menuSecond = document.querySelectorAll(".menu__second");

  const state = {
    views: {
      panel,
      squares: panel.querySelectorAll(".panel__square"),
      enemy: panel.querySelector(".panel__square--enemy"),
      timeLeft: menuSecond[0],
      score: menuSecond[1],
    },
    values: {
      timerId: null,
      countDownTimerId: null,
      gameVelocity: 700,
      result: 0,
      currentTime: 10
    },
  };

  return state;
};
