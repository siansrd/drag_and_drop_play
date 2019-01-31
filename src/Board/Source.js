import React from 'react';
import { DragSource } from 'react-dnd';
import { ITEM } from './itemTypes';

const Source = ({ piece, colour, connectDragSource, isDragging }) => (
  connectDragSource(
    <div
     className="board__sources__source"
     style={{
       color: colour,
       opacity: isDragging ? 0.25 : 1,
      }}
    >{piece}</div>
  )
);

const source = {
  beginDrag(props) {
    console.log("dragged");
    const { colour, piece } = props;
    return {
      piece: piece,
      colour: colour
   };
  },
  endDrag(props, monitor) {
    const { piece, colour } = monitor.getItem();
    console.log("dropped", piece, colour);
  },
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});

export default DragSource(ITEM, source, collect)(Source);
