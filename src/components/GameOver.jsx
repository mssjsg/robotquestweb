import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateScore } from '../actions/actions'
import Game from './Game'

class GameOver extends Component {
    render() {
        const { dispatch, game } = this.props

        return (
            <div>
                <p>Game Over</p>
            </div>
        )
    }
}

function select(state) {
    return {
        game: state.game
    }
}

export default connect(select)(GameOver);