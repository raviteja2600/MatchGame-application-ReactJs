import './index.css'

const GameOver = props => {
  const {score, clickPlayAgainButton} = props

  const onClickPlayAgainButton = () => {
    clickPlayAgainButton()
  }

  return (
    <div className="game-over-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy"
      />
      <p className="your-score">YOUR SCORE</p>
      <p className="final-score">{score}</p>
      <button
        type="button"
        className="play-again-button"
        onClick={onClickPlayAgainButton}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}
export default GameOver
