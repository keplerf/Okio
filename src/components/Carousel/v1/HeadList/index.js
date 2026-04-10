import * as React from 'react'
import { PropTypes } from 'prop-types'
import { ResponsiveContext } from 'grommet'
import Button from '@components/Button/v2'
import {
  Wrapper,
  Next,
  Back,
  Selectable,
  Block,
  Text,
  Title,
  Menu,
  ItemWrapper,
  Item,
  DownIcon
} from './styles'

const { useContext } = React

const Highlight = ({ index, data, onClick, highlighted }) => {
  if (data === null) {
    return <Block />
  }

  const current = index + 1 >= 10 ? `${index + 1}` : `0${index + 1}`

  if (data) {
    return (
      <Block>
        <Selectable appearance='text' onClick={onClick}>
          <Text selected={highlighted} index>
            {current}
          </Text>
          <Title selected={highlighted} level={3}>
            {data.title}
          </Title>
        </Selectable>
      </Block>
    )
  }
}

Highlight.propTypes = {
  index: PropTypes.number.isRequired,
  data: PropTypes.object,
  onClick: PropTypes.func,
  highlighted: PropTypes.bool
}

const HeadList = ({
  data,
  downIcon,
  current,
  total,
  onSelect,
  increment,
  decrement
}) => {
  const size = useContext(ResponsiveContext)

  const prevIndex = current === 0 ? current : current - 1
  const nextIndex = current === total ? current : current + 1
  const prev = current === 0 ? null : data[prevIndex]
  const object = data[current]
  const next = current === total ? null : data[nextIndex]

  if (size === 'large') {
    return (
      <Wrapper className={size}>
        <Button
          appearance='text'
          onClick={decrement}
          disabled={current === 0}
          a11yTitle='Back'
        >
          <Back a11yTitle='Back' />
        </Button>
        <Highlight
          data={prev}
          index={prevIndex}
          filler={current === 0}
          onClick={() => onSelect(prevIndex)}
        />
        <Highlight highlighted data={object} index={current} filler={false} />
        <Highlight
          data={next}
          index={nextIndex}
          filler={current === total}
          onClick={() => onSelect(nextIndex)}
        />
        <Button
          appearance='text'
          onClick={increment}
          disabled={current === total}
          a11yTitle='Next'
        >
          <Next a11yTitle='Next' />
        </Button>
      </Wrapper>
    )
  }

  const dropdown = data.map((item, index) => ({
    label: (
      <Item>
        {`${index + 1 >= 10 ? index + 1 : `0${index + 1}`} ${item.title}`}
      </Item>
    ),
    onClick: () => onSelect(index)
  }))

  const index = current + 1 >= 10 ? current + 1 : `0${current + 1}`

  let title = `${index} ${object.title}`

  if (size !== 'large') {
    title = (
      <ItemWrapper>
        <Item className='label'>{index}</Item>
        <Item className='label'>{object.title}</Item>
      </ItemWrapper>
    )
  }

  const icon = (
    <DownIcon
      svg={downIcon?.svg}
      src={downIcon?.file?.url}
      alt={downIcon?.title || 'dropdown'}
      a11yTitle={downIcon?.title || 'dropdown'}
    />
  )

  return (
    <Menu
      className={size}
      a11yTitle='Why Okyo Menu'
      messages={{
        openMenu: 'Open Why Okyo Menu',
        closeMenu: 'Close Why Okyo Menu'
      }}
      dropProps={{
        align: { top: 'bottom', right: 'right' },
        width: '100%',
        background: '#F5F6FA',
        pad: '12px'
      }}
      alignSelf='center'
      icon={icon}
      label={title}
      items={dropdown}
      size='large'
    />
  )
}

HeadList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  downIcon: PropTypes.object,
  current: PropTypes.number,
  total: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}

export default HeadList
