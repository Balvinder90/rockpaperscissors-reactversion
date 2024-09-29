function GameHeading({ heading, headingText }) {
  return (
    <h1 ref={heading} className="game__heading">
      {headingText}
    </h1>
  );
}

export default GameHeading;
