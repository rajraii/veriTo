import { useContext, useReducer, useState } from 'react';
import './App.css';
import { TodoReducer } from './Reducer/TodoReducer';
import 'antd/dist/antd.css';
import { Typography, Form, Input, Button, Col, Row, Card } from 'antd';
import CardDes from './components/card';
function App() {

  const [state, dispatch] = useReducer(TodoReducer, [])
  const { Title } = Typography
  return (
    <div className='App'>
      <Title>ToDo List</Title>
      <Form
        wrapperCol={{ span: 14 }}
        style={{
          width: '100%',
          padding: '1rem',
          display: 'flex',
          justifyContent: 'center'
        }}

        onFinish={value => {
          dispatch({
            type: 'ADD_TODO',
            payload: { value: value.add, complete: false, id: state.length }
          })
        }}
      >
        <Form.Item
          name='add'
          label="Add your todo"
          rules={[{
            required: true,
            message: 'please enter the Todo',
          }, { whitespace: true },
          { min: 1 }
          ]}
        >
          <Input placeholder='write a Todo...' allowClear />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>Add</Button>
        </Form.Item>
      </Form>

      <Row gutter={[24, 8]} style={{ width: '100%' }}>
        <Col span={8}><Card className='todoTitle'><h1>All</h1></Card></Col>
        <Col span={8}><Card className='todoTitle'><h1>Complete</h1></Card></Col>
        <Col span={8}><Card className='todoTitle'><h1>Incomplete</h1></Card></Col>
      </Row>
      <Row gutter={[24, 8]} style={{ width: '100%' }}>
        <Col style={{ textAlign: 'center' }} span={8}>
          {
            state?.map((todo, id) => (
              <CardDes key={id} id={id} change={"REMOVE"} dispatch={dispatch} todo={todo} />
            ))
          }
        </Col>
        <Col style={{ textAlign: 'center' }} span={8}>{
          state?.map((todo, id) => (
            <>{
              todo?.complete ?
                <CardDes key={id} id={id}  dispatch={dispatch} todo={todo} />
                : <></>
            }
            </>
          ))
        }</Col>
        <Col style={{ textAlign: 'center' }} span={8}>{
          state?.map((todo, id) => (
            <>{
              !todo?.complete ?
                <CardDes state={state} key={id} id={id} change={"COMPLETE"} dispatch={dispatch} todo={todo} />
                : <></>
            }
            </>
          ))
        }</Col>
      </Row>
    </div>
  );
}

export default App;
