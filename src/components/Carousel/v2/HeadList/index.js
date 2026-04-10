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

  const current = index + 1

  if (data) {
    return (
      <Block>
        <Selectable appearance='text' selected={highlighted} onClick={onClick}>
          <Text selected={highlighted} index>
            {current}
          </Text>
          <Title selected={highlighted} level={4}>
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
  visibleTotal,
  onSelect,
  increment,
  decrement,
  previous
}) => {
  const size = useContext(ResponsiveContext)

  if (size === 'large') {
    let leftIndex
    let rightIndex
    let middleIndex

    if (!previous || current === 0) {
      leftIndex = 0
      middleIndex = 1
      rightIndex = 2
    } else if (current >= total) {
      leftIndex = total - 2
      middleIndex = total - 1
      rightIndex = total
    } else {
      leftIndex = current - 1
      middleIndex = current
      rightIndex = current + 1
    }

    const onLeftClick = () => {
      onSelect({ index: leftIndex, previous: leftIndex + 1 })
    }

    const onMiddleClick = () => {
      onSelect({
        index: middleIndex,
        previous: middleIndex > previous ? middleIndex - 1 : middleIndex + 1
      })
    }

    const onRightClick = () => {
      onSelect({ index: rightIndex, previous: rightIndex - 1 })
    }

    return (
      <Wrapper className={size}>
        <Button
          appearance='text'
          onClick={decrement}
          disabled={current === 0}
          a11yTitle='Back'
          aria-label='Back'
        >
          <Back a11yTitle='Back' />
        </Button>
        <Highlight
          data={data[leftIndex]}
          index={leftIndex}
          highlighted={current === leftIndex}
          onClick={onLeftClick}
        />
        <Highlight
          data={data[middleIndex]}
          index={middleIndex}
          highlighted={current === middleIndex}
          onClick={onMiddleClick}
        />
        <Highlight
          data={data[rightIndex]}
          index={rightIndex}
          highlighted={current === rightIndex}
          onClick={onRightClick}
        />

        <Button
          appearance='text'
          onClick={increment}
          disabled={current === total}
          a11yTitle='Next'
          aria-label='Next'
        >
          <Next a11yTitle='Next' />
        </Button>
      </Wrapper>
    )
  }

  const dropdown = data.map((item, index) => ({
    label: (
      <Item key={index}>
        {`${index + 1 >= 10 ? index + 1 : `${index + 1}`} ${item.title}`}
      </Item>
    ),
    onClick: () =>
      onSelect({ index, previous: index - 1 === 0 ? 0 : index - 1 })
  }))

  const index = current + 1 >= 10 ? current + 1 : current + 1

  let title = `${index} ${data[current].title}`

  if (size !== 'large') {
    title = (
      <ItemWrapper>
        <Item className='label'>
          {index}/{visibleTotal} {data[current].title}
        </Item>
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
        pad: size === 'small' ? '18px' : '24px'
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
  previous: PropTypes.number,
  total: PropTypes.number.isRequired,
  visibleTotal: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}

export default HeadList
