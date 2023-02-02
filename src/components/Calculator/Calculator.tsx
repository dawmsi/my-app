import { ReactNode, useRef, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { inputData } from '../../inputData'
import { Company } from './Company'

export const Calculator = () => {
    const [storage, setStorage] = useState<number>(0)
    const [transfer, setTransfer] = useState<number>(0)
    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const prices = useRef(Object.keys(inputData))

    function getRangeValue(e: any): number {
        return Number(e.target.value)
    }

    const maxGB = 1000

    return (
        <Row style={{
            width: '88%', margin: '20px auto', padding: '6px', borderRadius: '12px',
            backgroundColor: '#f0f0f0', boxShadow: '0px 0px 9px -3px'
        }}>
            <Col md={6}>
                <Form.Label style={{ display: 'flex', gap: '6px' }}>
                    Storage : <input
                        className="form-control"
                        size={6}
                        min={0}
                        max={maxGB}
                        type="number"
                        value={storage > maxGB ? maxGB : storage}
                        onChange={(e) => setStorage(getRangeValue(e))}
                        style={{ width: 'auto', height: '22px', margin: '2px' }}
                    /> GB
                </Form.Label>
                <Form.Range
                    className='custom-rang'
                    max={maxGB}
                    value={storage}
                    onChange={(e) => setStorage(getRangeValue(e))}
                />
            </Col>
            <Col md={6}>
                <Form.Label style={{ display: 'flex', gap: '6px' }}>
                    Transfer : <input
                        className="form-control"
                        size={6}
                        min={0}
                        max={maxGB}
                        type="number"
                        value={transfer > maxGB ? maxGB : transfer}
                        onChange={(e) => setTransfer(getRangeValue(e))}
                        style={{ width: 'auto', height: '22px', margin: '2px' }}
                    /> GB
                </Form.Label>
                <Form.Range
                    max={maxGB}
                    value={transfer}
                    onChange={(e) => setTransfer(getRangeValue(e))}
                />
            </Col>
            <Row className='mob-vertical'>
                {inputData.map((item, index): ReactNode => {
                    return (
                        <Company
                            key={item.name}
                            storage={storage}
                            transfer={transfer}
                            minValue={minValue}
                            setMinValue={setMinValue}
                            maxValue={maxValue}
                            setMaxValue={setMaxValue}
                            prices={prices}
                            index={index}
                            {...item}
                        />
                    )
                })}
            </Row>
        </Row>
    )
}