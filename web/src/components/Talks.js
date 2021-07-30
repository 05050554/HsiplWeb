import React from 'react'
import "./Talks.scss"
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { Collapse } from 'antd';
const { Panel } = Collapse;

const Talks = () => {
  return (
    <div className="Talks" id="Talks" > 
      <h1 className="Title">Talks</h1>
      <div className="List">
        <Collapse defaultActiveKey={['1']} >
          <Panel className="panel" header={2019}  key="1">
            <Table dataSource={dataSource2019}   columns={columns} pagination={false} />
          </Panel>
          <Panel className="panel" header={2015} key="2">
            <Table dataSource={dataSource2015} columns={columns} pagination={false} />
          </Panel>
          <Panel className="panel" header={2013} key="3">
            <Table dataSource={dataSource2013} columns={columns} pagination={false} />
          </Panel>
          <Panel className="panel" header={2012} key="4">
          <Table dataSource={dataSource2012} columns={columns} pagination={false} />
        </Panel>
        </Collapse>
      </div>

    </div>

  );
}

const dataSource2019 = [
  {
    place: 'Department of College Engineering, Yunlin University of Technology', topic: '[提升產品分級能力]大數據應用新商機'
  },
  {
    place: 'Yunlin Technology-based Industrial Park Service Center', topic: '手持式光譜訊號雲端檢測技術-演算法及案例分析'
  },
];
const dataSource2015 = [
  {
    place: 'Department of Earthquake Engineering, Chung Cheng University', topic: '高光譜影像處理技術的應用'
  },
  {
    place: 'Department of College Engineering, Yunlin University of Technology', topic: '留學甘苦談'
  },
  {
    place: 'Department of Computer Science and Information Engineering, Fu Jen Catholic University', topic: 'Applications of Hyperspectral Image Processing Techniques'
  },
];
const dataSource2013 = [
  {
    place: 'Department of Computer Science and Electrical Engineering Colloquium,UMBC', topic: 'Volume Calculation of Magnetic Resonance Tissues via Image Classification'
  },
  {
    place: 'Department of Radiology, Taichung Veterans General Hospital', topic: 'Utility of 3-Dimensional ROC in Using Vital Signs Signals for Blood Transfusion Decision-Assistance'
  },
  {
    place: 'Department of Biomedical Engineering,Hung kuang University', topic: 'From dust to gold'
  },
];
const dataSource2012 = [
  {
    place: 'Department of Computer Science, Tunghai University', topic: 'Should I land now?'
  },
];

const columns = [
  {
    title: 'Place',
    dataIndex: 'place',
    //key: 'place',
    width:'50%'
  },
  {
    title: 'Topic',
    dataIndex: 'topic',
    //key: 'topic',
    width:'50%'
  },
];

export default Talks
