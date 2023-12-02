import { StatusBar, Dimensions } from 'react-native'

import styled from 'styled-components/native'

const StatusBarHeight = StatusBar.currentHeight || 0

const { height, width } = Dimensions.get('window')

export const StyledStatusBar = styled(StatusBar).attrs({
  barStyle: 'light-content',
  translucent: true,
  backgroundColor: '#282729',
})``

export const Screen = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #282729;
  padding-top: ${StatusBarHeight}px;
`
export const Center = styled.View`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const TaskList = styled.View`
  flex: 4.5;
  width: 100%;
`
export const Controls = styled.View`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const Row = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
`
export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#ffffff',
})`
  width: ${Math.floor(width * 0.735)}px;
  color: #ffffff;
  border-radius: 2px;
  background-color: #212022;
  padding: ${Math.floor(width * 0.04)}px;
`
export const AddTaskAction = styled.TouchableOpacity`
  display: flex;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
  background-color: #4e64e8;
  padding: ${Math.floor(width * 0.04)}px;
  margin-top: ${Math.floor(height * 0.03)}px;
`
export const Text = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`
export const ShufleAction = styled.TouchableOpacity`
  display: flex;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
  background-color: #6c737c;
  padding: ${Math.floor(width * 0.037)}px;
  margin-left: ${Math.floor(width * 0.03)}px;
`
