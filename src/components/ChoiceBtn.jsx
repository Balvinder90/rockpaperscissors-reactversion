export default function ChoiceBtn({ type, svg, onClick, disabled }) {
  return (
    <button
      className="game__buttons-btn"
      data-choice={type}
      onClick={onClick}
      disabled={disabled}
    >
      <svg
        className="game__buttons-btn-icon"
        width="60"
        height="64"
        viewBox="0 0 60 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={svg} fill="white"></path>
      </svg>
    </button>
  );
}
