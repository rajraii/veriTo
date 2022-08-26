import React from 'react'
import { Card, Button } from 'antd'
import { changeConfirmLocale } from 'antd/lib/modal/locale'

const CardDes = ({ state, change, dispatch, todo, id }) => {
  const handleClick = () => {
    dispatch({
      type: change,
      payload: {
        id
      }
    })
  }

  console.log("state", id, state)
  return (
    <>
      {change ? <>
        {todo?.value &&
          <Card onClick={handleClick}>
            <p>{todo?.value}</p>
          </Card>}</> : <><Card >
            <p>{todo?.value}</p>
          </Card></>}
    </>
  )
}

export default CardDes