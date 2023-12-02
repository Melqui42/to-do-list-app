import { useState } from 'react'

import TaskComponent from '@components/Task/taskComponent'
import Axios from 'axios'

import * as C from './styled'

interface taskProps {
  id: number
  name: string
  isChecked: boolean
}

const Home: React.FC = () => {
  const [taskName, setTaskName] = useState<string>('')
  const [taskList, setTaskList] = useState<taskProps[]>([
    { id: 0, name: '🐕 Walk the dog', isChecked: false },
    { id: 1, name: '🍔 Eat lunch', isChecked: false },
    { id: 2, name: '📚 Study react', isChecked: false },
    { id: 3, name: '🏀 Play basketball', isChecked: false },
    { id: 4, name: '🔎 Study biology', isChecked: false },
    { id: 5, name: '👟 Buy shoes', isChecked: false },
  ])

  const handleAddTask = () => {
    if (taskName !== '' && taskList.length < 6) {
      const newTask: taskProps = {
        id: taskList.length,
        name: taskName,
        isChecked: false,
      }

      setTaskList([...taskList, newTask])
      setTaskName('')
    }
  }

  const handleDeleteTask = (id: number) => {
    const updatedTasks: taskProps[] = taskList.filter((item) => item.id !== id)
    setTaskList(updatedTasks)
  }

  const shuffleArray = (array: taskProps[]): taskProps[] => {
    const shuffledArray = [...array]

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ]
    }

    return shuffledArray
  }

  const handleShuffle = () => {
    const shuffledToDoList = shuffleArray(taskList)
    setTaskList(shuffledToDoList)
  }

  const handleCheckTask = (id: number) => {
    const updatedTasks: taskProps[] = taskList.map((item) =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item,
    )
    setTaskList(updatedTasks)
  }

  return (
    <C.Screen>
      <C.StyledStatusBar />
      <C.Center>
        <C.TaskList>
          {taskList.map((item) => {
            return (
              <TaskComponent
                key={item.id}
                name={item.name}
                isChecked={item.isChecked}
                setIsChecked={() => handleCheckTask(item.id)}
                deleteAdd={() => handleDeleteTask(item.id)}
              />
            )
          })}
        </C.TaskList>
        <C.Controls>
          <C.Row>
            <C.Input
              maxLength={31}
              value={taskName}
              onChangeText={(value) => setTaskName(value)}
              placeholder="Write a new todo 📝"
            />
            <C.ShufleAction onPress={handleShuffle}>
              <C.Text style={{ fontSize: 22 }}>🔀</C.Text>
            </C.ShufleAction>
          </C.Row>
          <C.AddTaskAction onPress={handleAddTask}>
            <C.Text>ADD TASK</C.Text>
          </C.AddTaskAction>
        </C.Controls>
      </C.Center>
    </C.Screen>
  )
}

export default Home
