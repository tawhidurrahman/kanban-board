import { FC, useState } from 'react'
import { ListFormProps } from '../types'
import { Button } from './Button'
import { Input } from './Input'

export const ListForm: FC<ListFormProps> = ({ defaultValue = '', handleClick }) => {
  const [listName, setListName] = useState(defaultValue)

  return (
    <form onSubmit={e => e.preventDefault()}>
      <Input
        placeholder='List Title'
        value={listName}
        onChange={e => setListName(e.target.value)}
      />
      <Button
        onClick={e => {
          handleClick(listName.trim())
          setListName('')
        }}
        type='button'
      >
        {defaultValue === '' ? 'Add List' : 'Save'}
      </Button>
    </form>
  )
}
