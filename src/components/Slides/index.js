import {Component} from 'react'
import SlideItem from '../SlideItem'
import SliderContext from '../../Context'
import Slide from '../Slide'
import './index.css'

class Slides extends Component {
  render() {
    return (
      <SliderContext.Consumer>
        {value => {
          const {initialList} = value
          return (
            <div className="slides-container">
              <ol className="slides-list">
                {initialList.map((eachSlide, index) => (
                  <SlideItem
                    details={eachSlide}
                    key={eachSlide.id}
                    serialNumber={index + 1}
                  />
                ))}
              </ol>
              <Slide />
            </div>
          )
        }}
      </SliderContext.Consumer>
    )
  }
}

export default Slides
