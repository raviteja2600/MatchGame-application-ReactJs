import './index.css'

const ImageItem = props => {
  const {imageDetails, clickImageItem} = props
  const {thumbnailUrl} = imageDetails

  const onClickImageItem = () => {
    clickImageItem(thumbnailUrl)
  }

  return (
    <li>
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickImageItem}
      >
        <img src={thumbnailUrl} className="thumbnail-url" alt="thumbnail" />
      </button>
    </li>
  )
}
export default ImageItem
