// @flow

import React from 'react'

type Props = {|
  increaseFocusedMilestoneFn: () => void,
  selectNextTrackFn: () => void,
  decreaseFocusedMilestoneFn: () => void,
  selectPrevTrackFn: () => void,
  setSillyFn: (silly: boolean) => void,
|}

let blacklist;
if (typeof HTMLSelectElement !== "undefined") { // Check SSR
  const upDownBlacklist = [HTMLSelectElement, HTMLTextAreaElement]
  const leftRightBlacklist = [HTMLInputElement, HTMLTextAreaElement]
  const textBlacklist = leftRightBlacklist

  blacklist = {
    'ArrowUp': upDownBlacklist,
    'ArrowDown': upDownBlacklist,
    'ArrowLeft': leftRightBlacklist,
    'ArrowRight': leftRightBlacklist,
    'BracketLeft': textBlacklist,
    'BracketRight': textBlacklist,
  }
}

class KeyboardListener extends React.Component<Props> {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
  }

  componentDidUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = (e: KeyboardEvent) => {
    if (blacklist[e.code]) {
      for (const kind of blacklist[e.code]) {
        if (e.target instanceof kind) {
          return;
        }
      }
    }
    switch(e.code) {
      case 'ArrowUp':
        this.props.increaseFocusedMilestoneFn()
        e.preventDefault()
        break
      case 'ArrowRight':
        this.props.selectNextTrackFn()
        e.preventDefault()
        break
      case 'ArrowDown':
        if (e.target instanceof HTMLSelectElement) {
          return
        }
        this.props.decreaseFocusedMilestoneFn()
        e.preventDefault()
        break
      case 'ArrowLeft':
        this.props.selectPrevTrackFn()
        e.preventDefault()
        break
      case 'BracketLeft':
        this.props.setSillyFn(true)
        break
      case 'BracketRight':
        this.props.setSillyFn(false)
        break
    }
  }

  render() {
    return null
  }
}

export default KeyboardListener
