function GameResult({
  heading,
  playerChoice,
  cpuChoice,
  resultText,
  className,
  isDraw,
}) {
  if (isDraw) {
    return (
      <h1 ref={heading} className="game__heading">
        <span className={className}>{resultText}</span>: Both players chose{" "}
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
