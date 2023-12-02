import { ReactNode } from 'react'
import { TextProps } from 'react-native'

import * as C from './styled'

interface TaskNameProps extends TextProps {
  children: ReactNode
  isChecked: boolean
}

const TaskName: React.FC<TaskNameProps> = ({
  children,
  isChecked,
  ...props
}) => {
  return (
    <C.Name isChecked={isChecked} numberOfLines={1} {...props}>
      {children}
    </C.Name>
  )
}

export default TaskName
