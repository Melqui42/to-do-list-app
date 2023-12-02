import { Dimensions } from 'react-native'

import styled from 'styled-components/native'

const { height, width } = Dimensions.get('window')

export const Root = styled.View`
  display: flex;
  border-radius: 2px;
  align-items: center;
  flex-direction: row;
  background-color: #333233;
  justify-content: space-between;
  padding: ${Math.floor(width * 0.05)}px;
`
export const Content = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`
export const CheckAction = styled.TouchableOpacity<{
  checkBackgroundColor: boolean
}>`
  width: 20px;
  height: 20px;
  border-radius: 2px;
  background-color: ${(props) =>
    props.checkBackgroundColor ? '#0075FF' : '#ffffff'};
`
export const Name = styled.Text<{
  isChecked: boolean
}>`
  color: ${(props) => (props.isChecked ? '#949294' : '#ffffff')};
  font-size: 18px;
  font-weight: bold;
  text-decoration: ${(props) => (props.isChecked ? 'line-through' : 'none')};
  margin-left: ${Math.floor(width * 0.02)}px;
`
export const DeleteAction = styled.TouchableOpacity``
export const Text = styled.Text`
  font-size: 22px;
`
export const Component = styled.View`
  margin-top: ${Math.floor(height * 0.01)}px;
  margin-bottom: ${Math.floor(height * 0.01)}px;
`
