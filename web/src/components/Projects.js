import React from 'react'
import "./Projects.scss"
import { Table } from 'antd';
import 'antd/dist/antd.css';

const Projects = () => {
    return (
        <div className="Projects" id="Projects">
            <h1 className="Title">Grant Support and Projects</h1>
            <div className="List">
                <Table dataSource={data} bordered  columns={columns} pagination={false} />
            </div>
        </div>
    );
}

const columns = [
    {
      title: '計畫名稱',
      dataIndex: 'name',
      //key: 'name',
    },
    {
      title: '起訖日期',
      dataIndex: 'date',
      //key: 'date',
    },
    {
        title: '補助單位',
        dataIndex: 'unit',
        //key: 'unit',
    },
    {
    title: '經費總額',
    dataIndex: 'money',
    //key: 'money',
    },
];

const data=[
    {name:'應用高光譜影像辨識技術發展智慧新農業以提升農產品質管理為例' , date:'2020/08/01 ~ 2023/07/31' , unit:'科技部' , money:'3,165,000'},
    {name:'高光譜智慧辨識技術平台開發' , date:'2019/11/01 ~ 2020/10/31' , unit:'科技部' , money:'570,000'},
    {name:'高光譜即時運算平台開發' , date:'2019/08/01 ~ 2020/07/31' , unit:'五鈴光學' , money:'500,000'},
    {name:'運用高光譜遙測技術與深度學習發展智慧森林環境監控' , date:'2018/08/01 ~ 2020/07/31' , unit:'科技部' , money:'1,532,000'},
    {name:'手持式高光譜影像及訊號雲端藥品檢測開發技術' , date:'2018/04/01 ~ 2019/03/31' , unit:'五鈴光學股份有限公司' , money:'700,000'},
    {name:'高光譜影像端元擷取技術的開發與應用(II)' , date:'2017/08/01 ~ 2018/07/31' , unit:'科技部' , money:'539,000'},
    {name:'應用Sentinel-2衛星開發森林生態系特徵參數的評估技術-實現Vietnam Mekong River Delta濕地森林永續性的先驅研究' , date:'2017/06/01 ~ 2019/05/31' , unit:'科技部' , money:'1,326,000'},
    {name:'基於資訊理論的高光譜影像波段選擇方法之研究' , date:'2016/08/01 ~ 2017/09/30' , unit:'科技部' , money:'527,000'},
    {name:'高光譜影像端元擷取技術的開發與應用' , date:'2016/08/01 ~ 2017/08/31' , unit:'科技部' , money:'527,000'},
    {name:'應用高光譜檢測果實農藥殘留技術之研發' , date:'2015/01/01 ~ 2015/12/31' , unit:'農業試驗所' , money:'2,000,000'},
    {name:'高光譜影像異物偵測分析之研究 II' , date:'104年度' , unit:'科技部' , money:'741,000'},
    {name:'循序式演算法於高光譜訊號像元分解之研究' , date:'104年度' , unit:'科技部' , money:'610,000'},
    {name:'結合衛載及空載光達資料與多譜影像估測台灣森林碳存量技術之開發(III)' , date:'104年度' , unit:'科技部' , money:'673,000'},
    {name:'高光譜影像異物偵測分析之研究' , date:'103年度' , unit:'科技部' , money:'744,000'},
]

export default Projects