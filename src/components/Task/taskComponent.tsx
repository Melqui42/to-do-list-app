import { GestureResponderEvent } from 'react-native'

import Task from '@components/Task'

import * as C from './styled'

interface TaskComponentProps {
  name: string
  isChecked: boolean
  setIsChecked: ((event: GestureResponderEvent) => void) | undefined
  deleteAdd: ((event: GestureResponderEvent) => void) | undefined
}

const TaskComponent: React.FC<TaskComponentProps> = ({
  name,
  isChecked,
  setIsChecked,
  deleteAdd,
}) => {
  return (
    <C.Component>
      <Task.Root>
        <Task.Content>
          <Task.CheckAction isChecked={isChecked} setIsChecked={setIsChecked} />
          <Task.Name isChecked={isChecked}>{name}</Task.Name>
        </Task.Content>
        <Task.DeleteAction onPress={deleteAdd} />
      </Task.Root>
    </C.Component>
  )
}

export default TaskComponent
