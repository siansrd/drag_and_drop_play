import React from 'react';
import { DropTarget } from 'react-dnd';
import { ITEM } from './itemTypes';

const Target = ({ connectDropTarget, highlighted }) => (
  connectDropTarget(
    <div
      style={{
        backgroundColor: highlighted ? 'black' : 'gray',
        width: 100,
        height: 100
      }}
    />
  )
);

const target = {
  drop(props) {
    console.log("success");
  }
}

const collect = (connect,  monitor) => ({
  connectDropTarget: connect.dropTarget(),
  highlighted: monitor.canDrop(),
});

export default DropTarget(ITEM, target, collect)(Target);
