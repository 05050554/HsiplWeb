import React from 'react'
import "./Talks.scss"
import { Accordion, AccordionItem } from 'react-sanfona';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { Collapse } from 'antd';
const { Panel } = Collapse;

const Talks = () => {
  return (
    <div className="Talks">
      <h1 className="Title">Talks</h1>
      <div className="List">
        {/* <Accordion className="accodion" allowMultiple>
                    {year.map(item => {
                        return (
                        <AccordionItem className="item" title={`${item}`} >
                            <div className="content">
                                {item === 2019 ? (<Table dataSource={dataSource2019} bordered={true} columns={columns} pagination={false} />
                                ):null }
                                {item === 2015 ? (<Table dataSource={dataSource2015} columns={columns} pagination={false} />
                                ):null}
                                {item === 2013 ? (<Table dataSource={dataSource2013} columns={columns} pagination={false} />
                                ):null}
                                {item === 2012 ? (<Table dataSource={dataSource2012} columns={columns} pagination={false} />
                                ):null}
                            </div>
                        </AccordionItem>
                        );
                    })}
                </Accordion> */}

        <Collapse >
          {year.map(item => {
            return (
              <Panel header={`${item}`} key="1">
                {item === 2019 ? (<Table dataSource={dataSource2019} bordered={true} columns={columns} pagination={false} />):null}
                {item === 2015 ? (<Table dataSource={dataSource2015} columns={columns} pagination={false} />):null}
                {item === 2013 ? (<Table dataSource={dataSource2013} columns={columns} pagination={false} />):null}
                {item === 2012 ? (<Table dataSource={dataSource2012} columns={columns} pagination={false} />):null}
              </Panel>
              // <Panel header="This is panel header 2" key="2">
              //   <p>{text}</p>
              // </Panel>
              // <Panel header="This is panel header 3" key="3">
              //   <p>{text}</p>
              // </Panel>
              );
          })}
        </Collapse>
      </div>

    </div>

  );
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const year = [2019, 2015, 2013, 2012]

const dataSource2019 = [
  {
    place: 'Yunlin Technology-based Industrial Park Service Center', topic: '手持式光譜訊號雲端檢測技術-演算法及案例分析'
  },
  {
    place: 'Yunlin Technology-based Industrial Park Service Center', topic: '手持式光譜訊號雲端檢測技術-演算法及案例分析'
  },
];
const dataSource2015 = [
  {
    place: 'Yunlin Technology-based Industrial Park Service Center', topic: '手持式光譜訊號雲端檢測技術-演算法及案例分析'
  },
  {
    place: 'Yunlin Technology-based Industrial Park Service Center', topic: '手持式光譜訊號雲端檢測技術-演算法及案例分析'
  },
  {
    place: 'Yunlin Technology-based Industrial Park Service Center', topic: '手持式光譜訊號雲端檢測技術-演算法及案例分析'
  },
];
const dataSource2013 = [
  {
    place: 'Yunlin Technology-based Industrial Park Service Center', topic: '手持式光譜訊號雲端檢測技術-演算法及案例分析'
  },
  {
    place: 'Yunlin Technology-based Industrial Park Service Center', topic: '手持式光譜訊號雲端檢測技術-演算法及案例分析'
  },
  {
    place: 'Yunlin Technology-based Industrial Park Service Center', topic: '手持式光譜訊號雲端檢測技術-演算法及案例分析'
  },
];
const dataSource2012 = [
  {
    place: 'Yunlin Technology-based Industrial Park Service Center', topic: '手持式光譜訊號雲端檢測技術-演算法及案例分析'
  },
];

const columns = [
  {
    title: 'Place',
    dataIndex: 'place',
    //key: 'place',
  },
  {
    title: 'Topic',
    dataIndex: 'topic',
    //key: 'topic',
  },
];

export default Talks
