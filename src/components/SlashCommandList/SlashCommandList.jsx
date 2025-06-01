import React from 'react'
import './SlashCommandList.css'

export default function SlashCommandList({ items, command }) {
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const onKeyDown = ({ event }) => {
    if (event.key === 'ArrowUp') {
      setSelectedIndex((selectedIndex + items.length - 1) % items.length)
      return true
    }

    if (event.key === 'ArrowDown') {
      setSelectedIndex((selectedIndex + 1) % items.length)
      return true
    }

    if (event.key === 'Enter') {
      selectItem(selectedIndex)
      return true
    }

    return false
  }

  const selectItem = (index) => {
    const item = items[index]
    if (item) command(item)
  }

  return (
    <div className="dropdown-menu">
      {items.length ? (
        items.map((item, index) => (
          <button
            key={index}
            className={index === selectedIndex ? 'is-selected' : ''}
            onClick={() => selectItem(index)}
          >
            {item.title}
          </button>
        ))
      ) : (
        <div className="item">No result</div>
      )}
    </div>
  )
}

SlashCommandList.displayName = 'SlashCommandList'
SlashCommandList.onKeyDown = (props) => {
  return SlashCommandList(props).onKeyDown?.(props) ?? false
}
