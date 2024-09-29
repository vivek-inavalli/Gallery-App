import './index.css'

const ThumbnailItem = props => {
  const {details, isActive, updatedImgUrl} = props
  const {thumbnailUrl, id, thumbnailAltText} = details
  const onClickImg = () => {
    updatedImgUrl(id)
  }
  const imgClassName = isActive ? '' : 'img-opacity'
  return (
    <button>
      <img
        src={thumbnailUrl}
        alt={thumbnailAltText}
        className={`${imgClassName}`}
        onClick={onClickImg}
        key={id}
      />
    </button>
  )
}

export default ThumbnailItem
