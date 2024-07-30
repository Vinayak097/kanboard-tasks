import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


import SearchBox from './SearchBox';
import TaskColumn from './TaskColoumn';

const initialData = {
  'to-do': [
    { id: '1', title: 'Task 1' },
    { id: '2', title: 'Task 2' }
  ],
  'in-progress': [
    { id: '3', title: 'Task 3' }
  ],
  'peer-review': [
    { id: '4', title: 'Task 4' }
  ],
  'done': [
    { id: '5', title: 'Task 5' }
  ]
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleOnDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    const startColumn = source.droppableId;
    const endColumn = destination.droppableId;

    if (startColumn === endColumn) {
      const columnTasks = tasks[startColumn];
      const [removed] = columnTasks.splice(source.index, 1);
      columnTasks.splice(destination.index, 0, removed);
      setTasks({ ...tasks, [startColumn]: columnTasks });
    } else {
      const startTasks = tasks[startColumn];
      const endTasks = tasks[endColumn];
      const [removed] = startTasks.splice(source.index, 1);
      endTasks.splice(destination.index, 0, removed);
      setTasks({
        ...tasks,
        [startColumn]: startTasks,
        [endColumn]: endTasks
      });
    }
  };

  const filteredTasks = Object.keys(tasks).reduce((acc, key) => {
    acc[key] = tasks[key].filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()));
    return acc;
  }, {});

  return (
    <div className="container mx-auto p-4">
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="flex space-x-4">
          {['to-do', 'in-progress', 'peer-review', 'done'].map(columnId => (
            <Droppable key={columnId} droppableId={columnId}>
              {(provided) => (
                <TaskColumn
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  title={columnId.replace(/-/g, '').toUpperCase()}
                  tasks={filteredTasks[columnId]}
                />
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default KanbanBoard;
