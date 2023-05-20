import './index.css'

const Header = props => {
  const {seconds, score} = props

  return (
    <nav className="header-bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <ul className="lists-container">
        <li>
          <p className="score">
            Score: <span className="score-value">{score}</span>
          </p>
        </li>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />
        </li>
        <li>
          <p className="seconds">{seconds} sec</p>
        </li>
      </ul>
    </nav>
  )
}
export default Header
