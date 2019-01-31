import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Source from './Source';
import Target from './Target';

class Board extends Component {

  render() {
    return (
      <div id="board">
        <Source piece="♞" colour="red" onDrop={this.handleDrop} />
        <Target />
      </div>
    )
  }

}

export default DragDropContext(HTML5Backend)(Board);
