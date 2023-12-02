import { TouchableOpacityProps } from 'react-native'

import * as C from './styled'

type TaskDeleteActionProps = TouchableOpacityProps

const TaskDeleteAction: React.FC<TaskDeleteActionProps> = ({ ...props }) => {
  return (
    <C.DeleteAction {...props}>
      <C.Text>🗑️</C.Text>
    </C.DeleteAction>
  )
}

export default TaskDeleteAction
