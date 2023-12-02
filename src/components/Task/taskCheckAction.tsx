import { GestureResponderEvent, TouchableOpacityProps } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import * as C from './styled'

interface TaskCheckActionProps extends TouchableOpacityProps {
  isChecked: boolean
  setIsChecked: ((event: GestureResponderEvent) => void) | undefined
}

const TaskCheckAction: React.FC<TaskCheckActionProps> = ({
  isChecked,
  setIsChecked,
  ...props
}) => {
  return (
    <C.CheckAction
      {...props}
      onPress={setIsChecked}
      checkBackgroundColor={isChecked}
    >
      {isChecked ? <FontAwesome name="check" size={21} color="white" /> : ''}
    </C.CheckAction>
  )
}

export default TaskCheckAction
