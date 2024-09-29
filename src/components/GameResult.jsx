function GameResult({
  heading,
  playerChoice,
  cpuChoice,
  resultText,
  className,
  isDraw,
  cpuWin,
  playerWin,
}) {
  if (isDraw) {
    return (
      <h1 ref={heading} className="game__heading">
        <span className={className}>{resultText}</span>: Both players chose{" "}
        {playerChoice}
      </h1>
    );
  }

  if (playerWin) {
    return (
      <h1 ref={heading} className="game__heading">
        <span className={className}>{resultText}</span>: {playerChoice} beats{" "}
        {cpuChoice}
      </h1>
    );
  }

  if (cpuWin) {
    return (
      <h1 ref={heading} className="game__heading">
        <span className={className}>{resultText}</span>: {cpuChoice} beats{" "}
        {playerChoice}
      </h1>
    );
  }

  if (!isDraw)
    return (
      <h1 ref={heading} className="game__heading">
        <span className={className}>{resultText}</span>: {playerChoice} beats{" "}
        {cpuChoice}
      </h1>
    );
}

export default GameResult;
