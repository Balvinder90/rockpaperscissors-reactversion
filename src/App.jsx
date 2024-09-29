import { useRef, useState } from "react";
import Box from "./components/Box";
import GameHeading from "./components/GameHeading";
import Player from "./components/Player";
import ChoiceBtn from "./components/ChoiceBtn";
import GameResult from "./components/GameResult";
import {
  cpuNames,
  choicesArr,
  fistSVG,
  rockSVG,
  paperSVG,
  scissorsSVG,
  DELAY,
  rock,
  paper,
  scissors,
} from "./data/data";

function App() {
  const cpuName = useRef(generateRandomValueFromArr(cpuNames));
  const heading = useRef(document.querySelector("heading"));
  const playerIcon = useRef(document.querySelector("game__ui-player-score"));
  const cpuIcon = useRef(document.querySelector("game__ui-cpu-score"));
  const playerFist = useRef(document.querySelector("player-fist"));
  const cpuFist = useRef(document.querySelector("cpu-fist"));

  const [gameState, setGameState] = useState({
    playerChoice: null,
    cpuChoice: null,
    playerScore: 0,
    cpuName: cpuName.current,
    cpuScore: 0,
    disabled: false,
    youWin: false,
    cpuWin: false,
    isDraw: false,
    gameStarted: false,
    playerChoiceSVG: fistSVG,
    cpuChoiceSVG: fistSVG,
  });

  function generateRandomValueFromArr(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function hideHeadingAndFists() {
    heading.current.classList.add("hide");
    playerFist.current.classList.add("hide", "rotate");
    cpuFist.current.classList.add("hide", "rotate");
  }

  function removeScoreIconAnimation() {
    cpuIcon.current.classList.remove("move");
    playerIcon.current.classList.remove("move");
  }

  function drawUIClassChanges() {
    playerFist.current.classList.remove("hide", "rotate");
    cpuFist.current.classList.remove("hide", "rotate");
    heading.current.classList.remove("hide");
    playerFist.current.classList.remove("hide");
    cpuFist.current.classList.remove("hide");
  }

  function WinnerUIClassChanges(winner) {
    playerFist.current.classList.remove("hide", "rotate");
    cpuFist.current.classList.remove("hide", "rotate");
    heading.current.classList.remove("hide");
    playerFist.current.classList.remove("hide");
    cpuFist.current.classList.remove("hide");
    if (winner === "player") playerIcon.current.classList.add("move");
    if (winner === "cpu") cpuIcon.current.classList.add("move");
  }

  function gameResultUIClassChanges(gameResult) {
    if (gameResult === "player") WinnerUIClassChanges("player");
    if (gameResult === "cpu") WinnerUIClassChanges("cpu");
    if (gameResult === "draw") drawUIClassChanges();
  }

  function handleChoices(type) {
    const playerChoice = type;
    const cpuChoice =
      choicesArr[Math.floor(Math.random() * choicesArr.length)].type;

    setGameState((prev) => {
      hideHeadingAndFists();
      return {
        ...prev,
        playerChoiceSVG: fistSVG,
        cpuChoiceSVG: fistSVG,
        gameStarted: true,
        disabled: true,
      };
    });

    if (playerChoice === "Rock" && cpuChoice === "Paper") {
      setTimeout(() => {
        gameResultUIClassChanges("cpu");
        setGameState((prev) => {
          return {
            ...prev,
            playerChoice,
            cpuChoice,
            disabled: false,
            youWin: false,
            isDraw: false,
            cpuWin: true,
            cpuScore: prev.cpuScore + 1,
            playerChoiceSVG: rockSVG,
            cpuChoiceSVG: paperSVG,
          };
        });
      }, DELAY);
      removeScoreIconAnimation();
    }

    if (playerChoice === "Rock" && cpuChoice === "Scissors") {
      setTimeout(() => {
        gameResultUIClassChanges("player");
        setGameState((prev) => {
          return {
            ...prev,
            playerChoice,
            cpuChoice,
            disabled: false,
            youWin: true,
            isDraw: false,
            cpuWin: false,
            playerScore: prev.playerScore + 1,
            playerChoiceSVG: rockSVG,
            cpuChoiceSVG: scissorsSVG,
          };
        });
      }, DELAY);
      removeScoreIconAnimation();
    }

    if (playerChoice === "Rock" && cpuChoice === "Rock") {
      setTimeout(() => {
        gameResultUIClassChanges("draw");
        setGameState((prev) => {
          return {
            ...prev,
            playerChoice,
            cpuChoice,
            disabled: false,
            youWin: false,
            isDraw: true,
            cpuWin: false,
            playerChoiceSVG: rockSVG,
            cpuChoiceSVG: rockSVG,
          };
        });
      }, DELAY);
      removeScoreIconAnimation();
    }

    if (playerChoice === "Paper" && cpuChoice === "Paper") {
      setTimeout(() => {
        gameResultUIClassChanges("draw");
        setGameState((prev) => {
          return {
            ...prev,
            playerChoice,
            cpuChoice,
            disabled: false,
            youWin: false,
            isDraw: true,
            cpuWin: false,
            playerChoiceSVG: paperSVG,
            cpuChoiceSVG: paperSVG,
          };
        });
      }, DELAY);
      removeScoreIconAnimation();
    }

    if (playerChoice === "Paper" && cpuChoice === "Scissors") {
      {
        setTimeout(() => {
          gameResultUIClassChanges("cpu");
          setGameState((prev) => {
            return {
              ...prev,
              playerChoice,
              cpuChoice,
              disabled: false,
              youWin: false,
              isDraw: false,
              cpuWin: true,
              cpuScore: prev.cpuScore + 1,
              playerChoiceSVG: paperSVG,
              cpuChoiceSVG: scissorsSVG,
            };
          });
        }, DELAY);
        removeScoreIconAnimation();
      }
    }

    if (playerChoice === "Paper" && cpuChoice === "Rock") {
      {
        setTimeout(() => {
          gameResultUIClassChanges("player");
          setGameState((prev) => {
            return {
              ...prev,
              playerChoice,
              cpuChoice,
              disabled: false,
              youWin: true,
              isDraw: false,
              cpuWin: false,
              playerScore: prev.playerScore + 1,
              playerChoiceSVG: paperSVG,
              cpuChoiceSVG: rockSVG,
            };
          });
        }, DELAY);
        removeScoreIconAnimation();
      }
    }

    if (playerChoice === "Scissors" && cpuChoice === "Paper") {
      {
        {
          setTimeout(() => {
            gameResultUIClassChanges("player");
            setGameState((prev) => {
              return {
                ...prev,
                playerChoice,
                cpuChoice,
                disabled: false,
                youWin: true,
                isDraw: false,
                cpuWin: false,
                playerScore: prev.playerScore + 1,
                playerChoiceSVG: scissorsSVG,
                cpuChoiceSVG: paperSVG,
              };
            });
          }, DELAY);
          removeScoreIconAnimation();
        }
      }
    }

    if (playerChoice === "Scissors" && cpuChoice === "Scissors") {
      {
        setTimeout(() => {
          gameResultUIClassChanges("draw");
          setGameState((prev) => {
            return {
              ...prev,
              playerChoice,
              cpuChoice,
              disabled: false,
              youWin: false,
              isDraw: true,
              cpuWin: false,
              playerChoiceSVG: scissorsSVG,
              cpuChoiceSVG: scissorsSVG,
            };
          });
        }, DELAY);
        removeScoreIconAnimation();
      }
    }

    if (playerChoice === "Scissors" && cpuChoice === "Rock") {
      {
        setTimeout(() => {
          gameResultUIClassChanges("cpu");
          setGameState((prev) => {
            return {
              ...prev,
              playerChoice,
              cpuChoice,
              disabled: false,
              youWin: false,
              isDraw: false,
              cpuWin: true,
              cpuScore: prev.cpuScore + 1,
              playerChoiceSVG: scissorsSVG,
              cpuChoiceSVG: rockSVG,
            };
          });
        }, DELAY);
        removeScoreIconAnimation();
      }
    }
  }

  return (
    <Box className="game__container">
      {gameState.youWin && (
        <GameResult
          gameStarted={gameState.gameStarted}
          isDraw={false}
          heading={heading}
          resultText="You Win"
          playerChoice={gameState.playerChoice}
          cpuChoice={gameState.cpuChoice}
          className={"red-text"}
        />
      )}

      {gameState.cpuWin && (
        <GameResult
          gameStarted={gameState.gameStarted}
          isDraw={false}
          heading={heading}
          resultText={`${cpuName.current} wins`}
          playerChoice={gameState.playerChoice}
          cpuChoice={gameState.cpuChoice}
          className={"blue-text"}
        />
      )}

      {gameState.isDraw && (
        <GameResult
          gameStarted={gameState.gameStarted}
          isDraw={true}
          heading={heading}
          resultText="Draw"
          playerChoice={gameState.playerChoice}
          cpuChoice={gameState.cpuChoice}
          className={"green-text"}
        />
      )}
      {!gameState.youWin && !gameState.cpuWin && !gameState.isDraw && (
        <GameHeading heading={heading} headingText="Rock Paper Scissors" />
      )}
      <Box className="game__ui">
        <Player
          className="game__ui-player-score"
          playerName="Your"
          score={gameState.playerScore}
          svg={gameState.playerChoiceSVG}
          gameStarted={gameState.gameStarted}
          iconRef={playerIcon}
          fistRef={playerFist}
        />
        <Box className="game__buttons">
          <ChoiceBtn
            type={rock.type}
            svg={rock.svg}
            onClick={() => handleChoices(rock.type)}
            disabled={gameState.disabled}
          />
          <ChoiceBtn
            type={paper.type}
            svg={paper.svg}
            onClick={() => handleChoices(paper.type)}
            disabled={gameState.disabled}
          />
          <ChoiceBtn
            type={scissors.type}
            svg={scissors.svg}
            onClick={() => handleChoices(scissors.type)}
            disabled={gameState.disabled}
          />
        </Box>
        <Player
          className="game__ui-cpu-score"
          playerName={`${cpuName.current}'s`}
          score={gameState.cpuScore}
          svg={gameState.cpuChoiceSVG}
          gameStarted={gameState.gameStarted}
          iconRef={cpuIcon}
          fistRef={cpuFist}
        />
      </Box>
    </Box>
  );
}

export default App;
