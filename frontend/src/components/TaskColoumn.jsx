import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const TaskColumn = React.forwardRef(({ title, tasks, ...props }, ref) => (
  <div ref={ref} {...props} className="w-80 p-4 bg-gray-100 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    {tasks.map((task, index) => (
      <Draggable key={task.id} draggableId={task.id} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="p-2 mb-2 bg-white rounded-lg shadow-sm"
          >
            {task.title}
          </div>
        )}
      </Draggable>
    ))}
  </div>
));

export default TaskColumn;
