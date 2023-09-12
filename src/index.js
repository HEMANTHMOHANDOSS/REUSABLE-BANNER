import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, ClassName} = bannerDetails

  return (
    <li ClassName = {'${ClassName} banner-card-item'} >
    <div>
    <h1 ClassName="card-heading">{headerText}</h1>
    <p ClassName = "card-description">{description}</p>
    <button type="button" ClassName="card-btn">Show More</button>
    </div>
    </li>
  )
}

export default BannerCardItem