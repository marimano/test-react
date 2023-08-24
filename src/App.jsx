import React from "react";
import './app.scss'
import List from './List.jsx'

const items = [{
  id: 'hfkshf',
  name: 'Item 1',
  description: 'Cool item',
  subitems: [{
    id: 'hfkvbnvshf',
    name: 'Subitem 1',
    description: 'Cool subitem 1',
  },
  {
    id: 'hfvbnbvkshf',
    name: 'Subitem 2',
    description: 'Cool subitem 2',
  }]
},
{
  id: 'owiwy',
  name: 'Item 2',
  description: 'Even cooler item',
  subitems: [{
    id: 'hfkyttshf',
    name: 'Subitem 2.1',
    description: 'Cool subitem 2.1',
  },
  {
    id: 'yyt',
    name: 'Subitem 2.2',
    description: 'Cool subitem 2.2',
  }]
}]

const dropDownItems = [1, 2, 3, 4, 5]

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isListShown: true,
      isDropDownOpen: false,
      selectedValue: null
    }
  }

  onListClick(event) {
    event.stopPropagation()
    console.log(this)
    alert('List is clicked')
  }

  onListToggle = () => {
    const { isListShown } = this.state
    this.setState({ isListShown: !isListShown })
    console.log(this.state.isListShown)
  }

  onWindowClick = event => {
    this.setState({ isDropDownOpen: false })
  }

  componentDidMount() {
    window.addEventListener('click', this.onWindowClick)
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onWindowClick)
  }

  onDropDownSelected(newValue) {
    this.setState({
      selectedValue: newValue,
      isDropDownOpen: false
    })
  }

  onDropDownToggle = (event) => {
    event.stopPropagation()
    this.setState({ isDropDownOpen: !this.state.isDropDownOpen })
  }

  render() {
    const { headerText, isTextShown } = this.props
    const { isListShown, selectedValue, isDropDownOpen } = this.state

    return <div>
      <h1 className='header'>{headerText}</h1>
      {isTextShown && <p>The first react app</p>}
      <button onClick={this.onListToggle}>Toggle list</button>
      {isListShown && <List onListClick={this.onListClick} items={items} />}

      <div className="drop-down">
        <span className="drop-down-value" onClick={this.onDropDownToggle}>{selectedValue || '-'}</span>
        {isDropDownOpen && <ul className="drop-down-list">
          {dropDownItems.map(item => {
            return <li key={item} onClick={() => this.onDropDownSelected(item)}>{item}</li>
          })}
        </ul>}
      </div>
    </div>
  }
}