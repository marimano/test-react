import React from 'react'

export default class List extends React.Component {
  constructor(props) {
    super(props)

    console.log('List constructor')
  }

  componentDidMount() {
    console.log('List did mount')
  }
  
  componentWillUnmount() {
    console.log('List Unmount')
  }

  render() {
    console.log('List render')
    return <ul className="item-list" onClick={this.props.onListClick}>
      {this.props.items.map(({name, description, subitems}, index) => {
        return <li key={index} onClick={this.props.onListClick.bind(name)}>
          <span>{name}</span>
          <p>{description}</p>
          <ul>
            {subitems.map(({name, description, id}) => {
              return <li key={id}>
                <span>{name}</span>
                <p>{description}</p>
              </li>
            })}
          </ul>
        </li>
      })}
    </ul>
  }
}