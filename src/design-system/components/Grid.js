import styled from 'styled-components'

export const Grid = styled.div.attrs(props => ({
  cols: typeof(props.cols) === 'string' ? props.cols : typeof(props.cols) === 'number' ? `repeat(${props.cols}, 1fr)` : '1fr',
  smCols: typeof(props.smCols) === 'string' ? props.smCols : typeof(props.smCols) === 'number' ? `repeat(${props.smCols}, 1fr)` : '1fr',
  mdCols: typeof(props.mdCols) === 'string' ? props.mdCols : typeof(props.mdCols) === 'number' ? `repeat(${props.mdCols}, 1fr)` : '1fr',
  gap: props.gap || '1em'
}))`
  display: grid;
  grid-template-columns: ${props=>props.cols};
  gap: 1em;
  @media (max-width: 1024px)
  {
    grid-template-columns: ${props => props.mdCols};
  }
  @media (max-width: 580px)
  {
    grid-template-columns: ${props => props.smCols};
  }
`
