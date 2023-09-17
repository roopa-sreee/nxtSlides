import {v4 as uuidv4} from 'uuid'
import './index.css'
import SlideContext from '../../Context'

const PlusButton = () => (
  <SlideContext.Consumer>
    {value => {
      const {addNewItem, activeIndex, changeActiveTab} = value

      const onClickAddButton = () => {
        const id = uuidv4
        const slideItem = {
          id,
          heading: 'Heading',
          description: 'Description',
        }
        addNewItem(slideItem)
        changeActiveTab(activeIndex + 1)
      }

      const onDoubleClickBtn = () => {
        console.log('Hi')
      }

      return (
        <div>
          <button
            type="button"
            className="plus-button"
            onClick={onClickAddButton}
            onDoubleClick={onDoubleClickBtn}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
              alt="new plus icon"
              className="plus-icon"
            />
            New
          </button>
        </div>
      )
    }}
  </SlideContext.Consumer>
)

export default PlusButton
