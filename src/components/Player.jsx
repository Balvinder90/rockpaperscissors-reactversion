export default function Player({
  className,
  playerName,
  score,
  svg,
  gameStarted,
  iconRef,
  fistRef,
}) {
  return (
    <div className="game__ui-player">
      <h2 className="game__ui-player-heading">
        {playerName} Score:
        <span ref={iconRef} className={className}>
          {score}
        </span>
      </h2>
      <div className="game__ui-icon-0">
        {!gameStarted ? (
          <svg
            ref={fistRef}
            className="game__ui-icon-fist"
            width="131"
            height="175"
            viewBox="0 0 131 175"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={svg} fill="#4F4F4F"></path>
          </svg>
        ) : (
          <svg
            ref={fistRef}
            className="game__ui-icon-fist"
            width="56"
            height="55"
            viewBox="0 0 56 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={svg} fill="#4F4F4F"></path>
          </svg>
        )}
      </div>
    </div>
  );
}
