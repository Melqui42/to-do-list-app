import { ReactNode } from 'react'
import { ViewProps } from 'react-native'

import * as C from './styled'

interface TaskRootProps extends ViewProps {
  children: ReactNode
}

const TaskRoot: React.FC<TaskRootProps> = ({ children, ...props }) => {
  return <C.Root {...props}>{children}</C.Root>
}

export default TaskRoot
