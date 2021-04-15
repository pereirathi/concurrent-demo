/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import * as S from './styles'

export const Button = ({ text, color }) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  <S.Button color={color}>
    {text}
  </S.Button>
