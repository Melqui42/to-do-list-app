import { ReactNode } from 'react'
import { ViewProps } from 'react-native'

import * as C from './styled'

interface TaskContentProps extends ViewProps {
  children: ReactNode
}

const TaskContent: React.FC<TaskContentProps> = ({ children, ...props }) => {
  return <C.Content {...props}>{children}</C.Content>
}

export default TaskContent
