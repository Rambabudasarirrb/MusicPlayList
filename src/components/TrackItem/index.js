import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const TrackItem = props => {
  const {TrackDetails, onDeleteTrackItem} = props
  const {imageUrl, name, genre, duration, id} = TrackDetails

  const inDelete = () => {
    onDeleteTrackItem(id)
  }

  return (
    <li className="list-item-container">
      <div className="image-title-container">
        <img src={imageUrl} alt="track" className="image" />
        <div className="sub-items">
          <p className="title">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="time-button-container">
        <p className="time-duration">{duration}</p>
        <button
          type="button"
          testid="delete"
          className="button"
          onClick={inDelete}
        >
          <AiOutlineDelete className="icon" />
        </button>
      </div>
    </li>
  )
}
export default TrackItem
