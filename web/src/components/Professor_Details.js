import React from "react";
// import "./Professor_Details.scss";
import { Table, Collapse, List, Tabs, Divider } from "antd";
import "antd/dist/antd.css";

const { Panel } = Collapse;
const { TabPane } = Tabs;

export const Talks = () => {
  return (
    <div className="part" id="Talks">
      <div className="List">
        <h1 className="Title">Talks</h1>
        <Divider />
        <Table
          dataSource={Talks_data}
          bordered
          columns={Talks_columns}
          pagination={false}
        />
      </div>
    </div>
  );
};

export const Service = () => {
  return (
    <div className="part" id="Service">
      <div className="List">
        <h1 className="Title">Service</h1>
        <Divider />
        <Collapse defaultActiveKey={["1"]}  className="panel" >
          <Panel  header={"國際研討會獲邀專題演講"} key="1">
            <Table
              dataSource={Service_data.slice(0, 1)}
              bordered
              columns={Service_columns3}
              pagination={false}
            />
          </Panel>
          <Panel className="panel" header={"特別議程主席"} key="2">
            <Table
              dataSource={Service_data.slice(1, 4)}
              bordered
              columns={Service_columns2}
              pagination={false}
            />
          </Panel>
          <Panel className="panel" header={"議程主席"} key="3">
            <Table
              dataSource={Service_data.slice(4, 5)}
              bordered
              columns={Service_columns2}
              pagination={false}
            />
          </Panel>
          <Panel className="panel" header={"海報議程主席"} key="4">
            <Table
              dataSource={Service_data.slice(5, 6)}
              bordered
              columns={Service_columns2}
              pagination={false}
            />
          </Panel>
          <Panel className="panel" header={"議程委員"} key="5">
            <Table
              dataSource={Service_data.slice(6, 24)}
              bordered
              columns={Service_columns2}
              pagination={false}
            />
          </Panel>
          <Panel className="panel" header={"議程主持人"} key="6">
            <Table
              dataSource={Service_data.slice(24, 34)}
              bordered
              columns={Service_columns3}
              pagination={false}
            />
          </Panel>
          <Panel className="panel" header={"學術委員"} key="7">
            <List
              dataSource={Service_data.slice(34, 35)}
              renderItem={(item) => <List.Item>{item.list}</List.Item>}
            />
          </Panel>
          <Panel className="panel" header={"Reviewers"} key="8">
            <List
              dataSource={Service_data.slice(35)}
              renderItem={(item) => <List.Item>{item.list}</List.Item>}
            />
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export const Conference = () => {
  return (
    <div className="part" id="Conference">
      <div className="List">
        <h1 className="Title">Conference</h1>
        <Divider />
        <Table
          dataSource={Conference_data}
          bordered={true}
          columns={Conference_columns}
          pagination={{ pageSize: 10 }}
        />
        {/* <h2>Conference Proceeding Abstract</h2>
                <Table dataSource={Conference_data2} bordered={true} columns={Conference_columns} pagination={false} /> */}
      </div>
    </div>
  );
};

export const Awards = () => {
  return (
    <div className="part" id="Awards">
      <div className="List">
        <h1 className="Title" id="pf_Award">
          Awards
        </h1>
        <Divider />
        <Tabs defaultActiveKey="1" className="tab"> 
          <TabPane tab={2021} key="1">
            <Table
              dataSource={Awards_data.slice(0, 6)}
              bordered={true}
              columns={Awards_columns}
              pagination={false}
            />
          </TabPane>
          <TabPane tab={2020} key="2">
            <Table
              dataSource={Awards_data.slice(6,11)}
              bordered={true}
              columns={Awards_columns}
              pagination={false}
            />
          </TabPane>
          <TabPane tab={2019} key="3">
            <Table
              dataSource={Awards_data.slice(11, 21)}
              bordered={true}
              columns={Awards_columns}
              pagination={false}
            />
          </TabPane>
          <TabPane tab={2018} key="4">
            <Table
              dataSource={Awards_data.slice(21, 30)}
              bordered={true}
              columns={Awards_columns}
              pagination={false}
            />
          </TabPane>
          <TabPane tab="2017" key="5">
            <Table
              dataSource={Awards_data.slice(30, 41)}
              bordered={true}
              columns={Awards_columns}
              pagination={false}
            />
          </TabPane>
          <TabPane tab="2016" key="6">
            <Table
              dataSource={Awards_data.slice(41, 48)}
              bordered={true}
              columns={Awards_columns}
              pagination={false}
            />
          </TabPane>
          <TabPane tab="2015" key="7">
            <Table
              dataSource={Awards_data.slice(48, 58)}
              bordered={true}
              columns={Awards_columns}
              pagination={false}
            />
          </TabPane>
          <TabPane tab="2014" key="8">
            <Table
              dataSource={Awards_data.slice(58,59)}
              bordered={true}
              columns={Awards_columns}
              pagination={false}
            />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

const Talks_columns = [
  { title: "Date", dataIndex: "date" },
  { title: "Place", dataIndex: "place" },
  { title: "Topic", dataIndex: "topic" },
];

const Talks_data = [
  {
    date: "2019",
    place: "Department of College Engineering, Yunlin University of Technology",
    topic: "[提升產品分級能力]大數據應用新商機",
  },
  {
    date: "2019",
    place: "Yunlin Technology-based Industrial Park Service Center",
    topic: "手持式光譜訊號雲端檢測技術-演算法及案例分析",
  },
  {
    date: "2015",
    place: "Department of Earthquake Engineering, Chung Cheng University",
    topic: "高光譜影像處理技術的應用",
  },
  {
    date: "2015",
    place: "Department of College Engineering, Yunlin University of Technology",
    topic: "留學甘苦談",
  },
  {
    date: "2015",
    place:
      "Department of Computer Science and Information Engineering, Fu Jen Catholic University",
    topic: "Applications of Hyperspectral Image Processing Techniques",
  },
  {
    date: "2013",
    place:
      "Department of Computer Science and Electrical Engineering Colloquium,UMBC",
    topic:
      "Volume Calculation of Magnetic Resonance Tissues via Image Classification",
  },
  {
    date: "2013",
    place: "Department of Radiology, Taichung Veterans General Hospital",
    topic:
      "Utility of 3-Dimensional ROC in Using Vital Signs Signals for Blood Transfusion Decision-Assistance",
  },
  {
    date: "2013",
    place: "Department of Biomedical Engineering,Hung kuang University",
    topic: "From dust to gold",
  },
  {
    date: "2012",
    place: "Department of Computer Science, Tunghai University",
    topic: "Should I land now?",
  },
];

const Service_columns2 = [
  { title: "Date", dataIndex: "date" },
  { title: " ", dataIndex: "event" },
];

const Service_columns3 = [
  { title: "Date", dataIndex: "date" },
  { title: "Place", dataIndex: "place" },
  { title: " ", dataIndex: "event" },
];

const Service_data = [
  {
    date: "Oct. 13-16, 2017",
    place: "Xian, China",
    event:
      "Keynote speaker, International Workshops on Optoeletronic Perception (IWOP2017)",
    key: "1",
  },

  {
    date: "Aug. 21-23, 2017",
    event: "CVGIP 2017第30屆電腦視覺、圖學與影像處理研討會特別議程主席, 杉林溪",
    key: "2",
  },
  { date: "2018", event: "NCWIA-2018第8屆網路智能應用研討會", key: "2" },
  { date: "2019", event: "NCWIA-2019第9屆網路智能應用研討會", key: "2" },

  { date: "2020", event: "NCWIA-2020第10屆網路智能應用研討會", key: "3" },

  {
    date: "Dec. 12-14, 2014",
    event:
      "International Computer Symposium (ICS), Tunghai University, Taichung, Taiwan on December",
    key: "4",
  },

  {
    date: "Nov. 20-24, 2016",
    event: "The 13th Asian Conference on Computer Vision (ACCV’16), Taipei",
    key: "5",
  },
  {
    date: "Apr. 20-22, 2016",
    event:
      "IEEE BigMM 2016 The Second IEEE International Conference on Multimedia Big Data, Taipei, April 20-22, 2016",
    key: "5",
  },
  {
    date: "2017",
    event:
      "CVGIP 2017 第30屆電腦視覺、圖學與影像處理研討會會議程主持人, 杉林溪",
    key: "5",
  },
  {
    date: "Dec. 11-13, 2017",
    event:
      "The 19th IEEE International Symposium on Multimedia (ISM2017), Taichung",
    key: "5",
  },
  {
    date: "Dec. 14-15, 2017",
    event: "National Computer Symposium 2017, Hualien County",
    key: "5",
  },
  {
    date: "2018",
    event: "CVGIP 2018 第31屆電腦視覺、圖學與影像處理研討會, 關子嶺",
    key: "5",
  },
  { date: "2018", event: "NCWIA-2018 第8屆網路智能應用研討會", key: "5" },
  {
    date: "2018",
    event: "4th IEEE International Conference on Multimedia Big Data (BigMM)",
    key: "5",
  },
  {
    date: "Dec. 12-14, 2018",
    event: "International Computer Symposium (ICS), Yulin",
    key: "5",
  },
  {
    date: "2019",
    event: "5th IEEE International Conference on Multimedia Big Data (BigMM)",
    key: "5",
  },
  { date: "2019", event: "NCWIA-2019 第9屆網路智能應用研討會", key: "5" },
  {
    date: "Dec. 10-12, 2018",
    event:
      "The 20th IEEE International Symposium on Multimedia (ISM2018), Taichung",
    key: "5",
  },
  {
    date: "2019",
    event: "CVGIP 2019 第32屆電腦視覺、圖學與影像處理研討會, 台東",
    key: "5",
  },
  {
    date: "Nov. 14-15, 2019",
    event: "National Computer Symposium 2019, Kinmen County",
    key: "5",
  },
  {
    date: "Dec. 9-11, 2019",
    event:
      "The 21th IEEE International Symposium on Multimedia (ISM2019), San Diego, USA",
    key: "5",
  },
  {
    date: "2020",
    event: "CVGIP 2020 第33屆電腦視覺、圖學與影像處理研討會",
    key: "5",
  },
  {
    date: "Sep. 24-26, 2020",
    event:
      "The Sixth IEEE International Conference on Multimedia Big Data, New Delhi",
    key: "5",
  },
  {
    date: "2021",
    event: "CVGIP 2021 第34屆電腦視覺、圖學與影像處理研討會",
    key: "5",
  },

  {
    date: "Dec. 12-14, 2014",
    place: "Tunghai University, Taichung, Taiwan",
    event: "International Computer Symposium (ICS)",
    key: "6",
  },
  {
    date: "Dec. 26-27, 2014",
    place: "Taichung, Taiwan",
    event: "台中榮總醫學影像量化研究中心學術研討會",
    key: "6",
  },
  {
    date: "April. 20-24, 2015",
    place: "Baltimore",
    event: "2015 SPIE DSS Conference on Satellite Data Compression",
    key: "6",
  },
  {
    date: "Aug. 17-19, 2015",
    place: "Yilan, Taiwan",
    event: "CVGIP 2015 第二十八屆電腦視覺、圖學與影像處理研討會特別議程主席",
    key: "6",
  },
  {
    date: "Nov. 5 - 7, 2015",
    place: "Busan, Republic of Korea",
    event: "2015 KAGIS Fall Conference & International Symposium on GIS",
    key: "6",
  },
  {
    date: "Aug. 21-23 , 2017",
    place: "杉林溪",
    event: "CVGIP 2017 第30屆電腦視覺、圖學與影像處理研討會議程主持人",
    key: "6",
  },
  {
    date: "2018",
    place: "關子嶺",
    event: "CVGIP 2018 第31屆電腦視覺、圖學與影像處理研討會議程主持人",
    key: "6",
  },
  {
    date: "2019",
    place: "台東",
    event: "CVGIP 2019 第32屆電腦視覺、圖學與影像處理研討會",
    key: "6",
  },
  {
    date: "2020",
    place: "新竹",
    event: "CVGIP 2020 第33屆電腦視覺、圖學與影像處理研討會",
    key: "6",
  },
  {
    date: "2021",
    place: "",
    event: "CVGIP 2021 第34屆電腦視覺、圖學與影像處理研討會",
    key: "6",
  },

  { list: "擔任財團法人地球觀測學會學術委員會委員", key: "7" },

  { list: "GIScience and Remote Sensing" },
  { list: "IEEE Transactions on Geoscience and Remote Sensing" },
  { list: "Journal of Marine Science Technology" },
  { list: "Sensors" },
  { list: "International Journal of Remote Sensing" },
  { list: "Journal of Visual Communication and Image Representation" },
  { list: "IEEE Transactions on Cybernetics" },
  { list: "GIScience and Remote Sensing" },
  { list: "Remote Sensing" },
  { list: "Forest" },
  { list: "Applied Science" },
  { list: "Microprocessors and Microsystems" },
  { list: "Electronics" },
  { list: "Sustainability" },
  { list: "IEEE MultiMedia" },
];

const Conference_columns = [
  { title: "Date", dataIndex: "date" },
  {
    title: " ",
    dataIndex: "event",
    render: (text, record) => {
      if (record.link === "") {
        return <a style={{ color: "black" }}>{text}</a>;
      } else {
        return (
          <a href={record.link} target="_blank" rel="noopener noreferrer">
            {text}
          </a>
        );
      }
    },
  },
];

const Conference_data = [
  {
    date: "2017",
    link: "",
    event:
      "Keng-Hao Liu, Hung-Chang Chien, Shih-Yu Chen (2017, Aug). Progressive sample processing of band selection for hyperspectral imagery. SPIE Remote Sensing 2017.",
  },
  {
    date: "2017",
    link: "",
    event:
      "Bai Xue, Shih-Yu Chen, Chunyuan Yu, Yulei Wang, Lin Wang, Meiping Song, Sen Li, Chein-I Chang (2017, Aug). Kernel Automatic Target Generation Process. 2017 IEEE International Geoscience and Remote Sensing Symposium (IGARSS 2017).",
  },
  {
    date: "2017",
    link: "",
    event:
      "Chunyan Yu, Bai Xue, Yulei Wang, Meiping Song, Lin Wang, Sen Li, Shih-Yu Chen, Chein-I Chang (2017, Aug). Multi-Class Constrained Background Suppression Approach to Hyperspectral Image Classification. IGARSS 2017.",
  },
  {
    date: "2017",
    link: "",
    event:
      "Shih-Yu Chen, Chia-Hui Tai (2017, May). Iterative target detection algorithms for hyperspectral imagery. 2017 IEEE International Conference on Applied System Innovation (IEEE ICASI 2017), Sapporo, Japan . 本人為第一作者、通訊作者.",
  },
  {
    date: "2016",
    link: "",
    event:
      "Han-Wen Zhang, Edward T.-H. Chu, Shih-Yu Chen (2016, Dec). Indoor Post-Earthquake Corridor Obstacle Assessment System. International Computer Symposium (ICS).",
  },
  {
    date: "2016",
    link: "",
    event:
      "Shih-Yu Chen, Chia-Hui Tai, Tse-Yu Chien (2016, Oct). Early Landslide Detection and Warning System Using Remote Sensing Imagery. International Association of Geo-informatics. 本人為第一作者、通訊作者.",
  },
  {
    date: "2016",
    link: "",
    event:
      "Shih-Yu Chen, chinsu Lin, Fu-Ming Yang (2016, Oct). Extracting tree rings from disc bitmap image. International Association of Geo-informatics. 本人為第一作者、通訊作者.",
  },
  {
    date: "2016",
    link: "",
    event:
      "Li-Chien Lee, Yen-Chieh Ouyang, Shih-Yu Chen, Chein-I Chang (2016, Jul). An information theoretical approach to multiple-band selection for hyperspectral imagery. 2016 IEEE International Geoscience and Remote Sensing Symposium (IGARSS).",
  },
  {
    date: "2016",
    link: "",
    event:
      "Chih-Hung Lai, Chu-Song Chen, Shih-Yu Chen, and Keng-Hao Liu (2016). Sequential band selection method based on group orthogonal matching pursuit. IEEE WHISPERS 2016.",
  },
  {
    date: "2015",
    link: "",
    event:
      "Chia-Chun Chen, Shih-Yu Chen, Chinsu Lin, Chia-Hisen Wen, Hsian-Min Chen, Yen-Chieh Ouyang, Chao-Cheng Wu and Chein-I Chang (2015, Nov). Pesticide residue detection using hyperspectral techniques on sweet peppers. 2015 KAGIS Fall Conference & International Symposium on GIS, 釜山. 本人為通訊作者.",
  },
  {
    date: "2015",
    link: "",
    event:
      "Li-Han Lin, Chinsu Lin, and Shih-Yu Chen (2015, Nov). A Modified Watershed Algorithm for LiDAR Image Segmentation. 2015 KAGIS Fall Conference & International Symposium on GIS, 釜山. 本人為通訊作者.",
  },
  {
    date: "2015",
    link: "",
    event:
      "Chia-Chun Chen (陳嘉純) , Chinsu Lin (林金樹), Li-Han Lin (林力瀚), Shih-Yu Chen (陳士煜) (2015, Aug). A NEW APPLICATION OF HYPERSPECTRAL TARGETS DETECTION TECHNIQUES TO MULTISPECTRAL IMAGE. CVGIP 2015 第二十八屆電腦視覺、圖學暨影像處理研討會, 宜蘭. 本人為通訊作者.",
  },
  {
    date: "2015",
    link: "",
    event:
      "Cheng Gao, Shih-Yu Chen, Hsian-Min Chen, Chao-Cheng Wu, Chia-Hsien Wen, and Chein-I Chang (2015, Jun). Fully Abundance-Constrained Finding Endmembers in Hyperspectral Images. Workshop on Hyperspectral Image and Signal Processing: Evolution in Remote Sensing (WHISPERS), Tokyo.",
  },
  {
    date: "2015",
    link: "",
    event:
      "Chinsu Lin, Shih-Yu Chen, Li-Hun Lin, Chung-Chun Cheng and Chao-Cheng Wu (2015, Jun). A SIGNAL-NOISE ANALYSIS OF ICESAT GLAS WAVEFORM FOR DERIVING FEATURES OF FOREST CANOPY HEIGHT IN MOUNTAINOUS AREA . International Conference on Earth Observations and Societal Impacts, National Kaohsiung Marine University (NKMU).",
  },
  {
    date: "2015",
    link: "",
    event:
      "Shih-Yu Chen, Yen-Chieh Ouyang, Chinsu Lin, Cheng Gao, Hsian-Min Chen and Chein-I Chang (2015, Jun). Progressive Endmember Finding by Fully Constrained Least Squares Method. Workshop on Hyperspectral Image and Signal Processing: Evolution in Remote Sensing (WHISPERS), Tokyo. 本人為第一作者、通訊作者.",
  },
  {
    date: "2015",
    link: "",
    event:
      "Shih-Yu Chen, Yuan-Hsun Liao, Wei-Sheng Lo, HorngYuh Guo, Tau-Meu Chou, Chia-Hisen Wen, Chinsu Lin, Hsian-Min Chen, Yen-Chieh Ouyang, Chao-Cheng Wu and Chein-I Chang (2015, Jun). Pesticide Residue Detection by Hyperspectral Imaging Sensors. Hyperspectral Image and Signal Processing: Evolution in Remote Sensing (WHISPERS), Tokyo. 本人為第一作者.",
  },
  {
    date: "2015",
    link: "https://drive.google.com/file/d/0B0YDE38rJWb5djNJbzVlSFRGcWM/view",
    event:
      "Yuan-Hsun Liao, Wei-Sheng Lo, Horng-Yuh Guo, Ching-Hua Kao, Tau-Meu Chou, Junne-Jih Chen, Chia-Hsien Wen,Chinsu Lin, Hsian-Min Chen, Yen-Chieh Ouyang, Chao-Cheng Wu, Shih-Yu Chen,and Chein-I Chang (2015, Apr). Pesticide residue quantification analysis by hyperspectral imaging sensors. SPIE DSS, Satellite Data Compression, Communications, and Processing XI, Baltimore. 本人為通訊作者.",
  },
  {
    date: "2014",
    link: "https://books.google.com.tw/books?id=dOqbCAAAQBAJ&pg=PR29&lpg=PR29&dq=Weighted+Radial+Basis+Function+Kernel-Based+Support+Vector+Machines+for+Multispectral+Magnetic+Resonance+Brain+Image+Classification&source=bl&ots=PcDKSG316Q&sig=D6d0djJBUEjWA_SHJY0hiIThiUc&hl=zh-TW&sa=X&ved=0CCYQ6AEwAGoVChMIu_isjaXQxwIVy5qUCh04rAMV#v=onepage&q=Weighted%20Radial%20Basis%20Function%20Kernel-Based%20Support%20Vector%20Machines%20for%20Multispectral%20Magnetic%20Resonance%20Brain%20Image%20Classification&f=false",
    event:
      "Shih-Yu Chen,Hsian-Min Chen, Chi-Chang Chen, Bor-Hung Lin, Ching-Wen Yang, Yen-Chieh Ouyang, San-Kan Lee, Jyh-Wen Chai, and Chein-I Chang (2014, Dec). Weighted Radial Basis Function Kernel-Based Support Vector Machines for Multispectral Magnetic Resonance Brain Image Classification. International Computer Symposium 2014, 台灣. 本人為第一作者、通訊作者.",
  },
  {
    date: "2014",
    link: "https://drive.google.com/file/d/0B0YDE38rJWb5OHdXUDRGdzFjRFk/view",
    event:
      "Chein-I Chang, Shih-Yu Chen, Liaoying Zhao, Chao-Cheng Wu (2014, Aug). Endmember-Specified Virtual Dimensionality in Hyperspectral Imagery. IEEE International Geoscience and Remote Sensing Symposium, Quebec City, Canada.",
  },
  {
    date: "2014",
    link: "https://drive.google.com/file/d/0B0YDE38rJWb5TUxteTZidjNydWs/view",
    event:
      "Shih-Yu Chen, Yen-Chieh Ouyang, Chein-I Chang (2014, Aug). Recursive Unsupervised Fully Constrained Least Squares Methods. IEEE International Geoscience and Remote Sensing Symposium, Quebec City, Canada. 本人為第一作者、通訊作者.",
  },
  {
    date: "2014",
    link: "https://drive.google.com/file/d/0B0YDE38rJWb5LXUxWWMtXzJrbUk/view",
    event:
      "Yao Li, Shih-Yu Chen, Cheng Gao and Chein-I Chang (2014, May). Endmember variability resolved by pixel purity index in hyperspectral imagery. SPIE International Symposium on SPIE Sensing Technology + Applications, Baltimore.",
  },
  {
    date: "2014",
    link: "https://drive.google.com/file/d/0B0YDE38rJWb5T0FQZ0xKeUdCOTA/view",
    event:
      "Yulei Wang, Shih-Yu Chen, Chunghong Liu and Chein-I Chang (2014, May). Background suppression issues in anomaly detection for hyperspectral imagery. Satellite Data Compression, Communication and Processing X (ST146), SPIE I nternational Symposium on SPIE Sensing Technology + Applications, Baltimore.",
  },
  {
    date: "2013",
    link: "https://drive.google.com/file/d/0B0YDE38rJWb5NmRkMWRzWHZ4NGs/view",
    event:
      "Robert Schultz, Shih-Yu Chen, Yulei Wang, Chunhong Liu and Chein-I Chang (2013, Aug). Progressive band processing of anomaly detection. SPIE conference Satellite Data Compression, Communications, and Processing IX, San Deigo.",
  },
  {
    date: "2013",
    link: "https://drive.google.com/file/d/0B0YDE38rJWb5RmUtU2xRRFQ3NUk/view",
    event:
      "Shih-Yu Chen, Drew Paylor, and Chein-I Chang (2013, Aug). Anomaly-specified virtual dimensionality. SPIE conference Satellite Data Compression, Communications, and Processing IX, San Deigo. 本人為第一作者、通訊作者.",
  },
  {
    date: "2013",
    link: "https://drive.google.com/file/d/0B0YDE38rJWb5Nmt1NE5ub0pWVzg/view",
    event:
      "Shih-Yu Chen, Shiming Yang, Konstantinos Kalpakis, and Chein-I Chang (2013, Apr). Low rank decomposition-based anomaly detection. SPIE Conference on Algorithms and Technologies for Multispectral, Hyperspectral, and Ultraspectral Imagery XIX, Baltimore.本人為第一作者.",
  },
  {
    date: "2013",
    link: "https://journals.lww.com/ccmjournal/Abstract/2012/12001/861___AUTOMATED_VITAL_SIGNS_LSI_OUTCOME_PREDICTION.823.aspx",
    event:
      "PF Hu, Y Wang, S-Y Chen, L Stansbury, C-I Chang, , J Menaker, M Lissauer, J Pasley, W Chiu, A Anazodo, C Imle, C F Mackenzie and ONPOINT Investigators (2013, Jan). Automated Vital Signs LSI outcome Prediction versus Experts. Society of Critical Care Medicine (SCCM) congresses.",
  },
  {
    date: "2013",
    link: "https://drive.google.com/file/d/0B0YDE38rJWb5ZFVwSUJoN1hpMlk/view",
    event:
      "Hu P, Wang Y, Mackenzie C, Chen S, Imle C, Anazodo A, Miller C Chang C and OnPOINT group (2013). Continuous Pulse Oximetry Photopletysmography waveforms predict Transfusion after Trauma. 84th Annual Scientific Meeting of the Aerospace Medical Association (AsMA), Chicago.",
  },
  {
    date: "2012",
    link: "https://drive.google.com/file/d/0B0YDE38rJWb5UTVjeXlfS2xtUkU/view",
    event:
      "CF Mackenzie, PF Hu, LG Stansbury, CI Chang, S-Y Chen, R Fang, J Dubose, JR Hess, (2012, Aug). Pre-hospital respiratory rate as a predictor of emergent or massive transfusion. Military Health System Research Symposium, Florida, USA.",
  },
  {
    date: "2012",
    link: "https://drive.google.com/file/d/0B0YDE38rJWb5aUpmSzZYSVhpX0E/view",
    event:
      "Shih-Yu Chen, Yen Chieh Ouyang, Chein-I Chang (2012, Jul). Weighted Radial Basis Function Kernels-Based Support Vector Machines for Multispectral Image Classification. IEEE International Geoscience and Remote Sensing Symposium, Munich, Germany, Munich, Germany. 本人為第一作者、通訊作者.",
  },
  {
    date: "2012",
    link: "https://drive.google.com/file/d/0B0YDE38rJWb5dlYzNEs5MHEtWW8/view",
    event:
      "Shih-Yu Chen, Chinsu Lin, Yen-Chieh Ouyang, Chein-I Chang (2012, Jun). Unsupervised Multispectral Image Classification. 4th Workshop on Hyperspectral Image and Signal Processing: Evolution in Remote Sensing, Shanghai, China. 本人為第一作者、通訊作者.",
  },
  {
    date: "2012",
    link: "",
    event:
      "Mackenzie CF, Stansbury L, Hu P, Hess J, Chang CI, Chen S, MS, Miller C, Dupuis K, Dubose J,and the ONPOINT Investigator Group Gender , “Age effects of pre-hospital vital signs predictions of massive transfusion,” Proceedings of the American Medical Informatics Association AMIA-0146-A201",
  },
  {
    date: "2011",
    link: "https://drive.google.com/file/d/0B0YDE38rJWb5dVpPejlLdmJhMnM/view",
    event:
      "S.-Y. Chen, Y.C. Ouyang and C.-I Chang (2011, Jul). Iterative support vector machine for hyperspectral image classification. IEEE International Geoscience and Remote Sensing Symposium, Vancouver, Canada. 本人為第一作者、通訊作者.",
  },
  {
    date: "2010",
    link: "https://drive.google.com/file/d/0B0YDE38rJWb5THQyQzRYY2x0UUU/view",
    event:
      "Y.J. Chiou, J. W. Chai, C. C.-C. Chen, S.-Y. Chen, H.-M. Chen, Y.-C. Ouyang, W.-C. Su, C.-T Tsai, C.-W. Yang, S.-K. Lee, and C.-I Chang (2010, Dec). Volume-based magentic resonancebrain image classifcation. 4th Int. Conf. Genetic and Evolutional Computing, Shenzen, China.",
  },
  {
    date: "2010",
    link: "https://drive.google.com/file/d/0B0YDE38rJWb5RGlwYzdHZURNcU0/view",
    event:
      "H.-M. Chen, S.-Y. Chen, J. W. Chai, C. C.-C. Chen, C.-C. Wu, Y.-C. Ouyang, C.-T Tsai, C.-W. Yang, S.-K. Lee, and C.-I Chang, （2010年12月）. Techniques for atutmatic magentic resonance image classifcation. 4th Int. Conf. Genetic and Evolutional Computing，Shenzen, China.",
  },
];

// const Conference_data2 = [
//     {
//         date: '2016', link: '',
//         event: 'Shih-Yu Chen, Chia-Hui Tai, Tse-Yu Chien;"Early Landslide Detection and Warning System Using Remote Sensing Imagery",Oct 15,2016',
//     },
//     {
//         date: '2016', link: '',
//         event: 'Shih-Yu Chen, Chinsu Lin, Fu-Ming Yang, Li-Han Lin;"Extracting Tree Rings form Disc Bitmap Image",Oct 15,2016',
//     },
//     {
//         date: '2013', link: '',
//         event: 'PF Hu, Y Wang, S-Y Chen, L Stansbury, C-I Chang, , J Menaker, M Lissauer, J Pasley, W Chiu, A Anazodo, C Imle, C F Mackenzie and ONPOINT Investigators, “Automated Vital Signs LSI outcome Prediction versus Experts,” Proceedings of Society of Critical Care Medicine (SCCM) congresses Jan 19-23, 2013',
//     },
//     {
//         date: '2013', link: '',
//         event: 'Hu P, Wang Y, Mackenzie C, Chen S, Imle C, Anazodo A, Miller C Chang C and OnPOINT group, “Continuous Pulse Oximetry Photopletysmography waveforms predict Transfusion after Trauma,” Proceedings of 84th Annual Scientific Meeting of the Aerospace Medical Association (AsMA) in Chicago, IL, May 12-16, 2013.',
//     },
//     {
//         date: '2012', link: '',
//         event: 'CF Mackenzie, PF Hu, LG Stansbury, CI Chang, S-Y Chen, R Fang, J Dubose, JR Hess, “Pre-hospital respiratory rate as a predictor of emergent or massive transfusion,” Military Health System Research Symposium, Florida, USA ,August 13-16, 2012',
//     },
//     {
//         date: '2012', link: '',
//         event: 'Mackenzie CF, Stansbury L, Hu P, Hess J, Chang CI, Chen S, MS, Miller C, Dupuis K, Dubose J,and the ONPOINT Investigator Group Gender , “Age effects of pre-hospital vital signs predictions of massive transfusion,” Proceedings of the American Medical Informatics Association AMIA-0146-A201',
//     },
// ]

const Awards_columns = [
  { title: "時間", dataIndex: "year" },
  { title: "地點/項目", dataIndex: "data" },
  { title: "獎項", dataIndex: "award" },
];

const Awards_data = [
  {
    year: "2021",
    data: "五鈴光學股份有限公司 郝祖德 總經理 與 李冠杰 及 本實驗室 鄒學緯、邱明豐、歐承學 同學 參與2021 香港國際發明展",
    award: "金牌",
    key:"1",
  },
  {
    year: "2021",
    data: "五鈴光學股份有限公司 郝祖德 總經理 與 李冠杰 及 本實驗室 鄒學緯、邱明豐、歐承學 同學 參與2021 高雄國際發明暨設計展",
    award: "金牌",
  },
  {
    year: "2021",
    data: "本實驗室專題生歐俊毅、張元懷、張哲維 同學 參與 2021實務專題競賽暨成果發表觀摩會",
    award: "佳作",
    key:"1",
  },
  {
    year: "2021",
    data: "本實驗室陳士煜教師參與嶺東高級中學創校五十週年校慶頒獎",
    award: "傑出校友",
    key:"1",
  },


  {
    year: "2021",
    data: "指導專題生歐俊毅 ,張哲維 ,康峻瑋同學參加教育部人工智慧競賽-AI CUP 2021醫病訊息決策與對話語料分析競賽",
    award: "前標",
  },

  
  {
    year: "2021",
    data: "本實驗室陳士煜教師與實驗室研究生 蔡逢記 同學 參與 2021 IEEE ECICE",
    award: "Best Conference Paper Award",
  },


  { year: "2020", data: "雲科大109年度", award: "教師免評鑑榮譽" },
  { year: "2020", data: "科技部109年度", award: "特殊優秀人才獎勵" },
  { year: "2020", data: "科技部109年度", award: "特殊優秀人才獎", key: "1" },
  {
    year: "2020",
    data: "指導研究生許寓鈞同學榮獲2020 SPIE Optics + Photonics Career Summit Officer Travel Grant",
    award: "2500 美金",
    key: "1",
  },
  {
    year: "2020",
    data: "指導研究生徐仕勳同學榮獲SPIE Photonics Europe 2020 Travel Grant Award",
    award: "1500 美金",
    key: "1",
  },

  { year: "2019", data: "科技部108年度", award: "特殊優秀人才獎" },
  {
    year: "2019",
    data: "2nd IEEE International Conference on Knowledge Innovation and Invention",
    award: "最佳論文獎",
  },
  { year: "2019", data: "雲科智慧生活創新應用競賽", award: "最佳商品化獎" },
  { year: "2019", data: "雲科智慧生活創新應用競賽", award: "佳作" },
  { year: "2019", data: "2019年實務專題競賽暨成果發表觀摩會", award: "第三名" },
  {
    year: "2019",
    data: "指導研究生李冠杰同學榮獲SPIE Optics + Photonics 2019 Travel Grant Award",
    award: "1500美金",
  },
  {
    year: "2019",
    data: "指導研究生練周典同學榮獲IEEE ICKII 2019 BEST PAPER AWARD",
    award: "最佳論文獎",
  },
  {
    year: "2019",
    data: "指導研究生邱明豐同學、鄭友智同學榮獲2019雲科智慧生活創新應用競賽",
    award: "最佳商品化獎",
  },
  {
    year: "2019",
    data: "指導研究生歐承學同學、許寓鈞同學榮獲2019雲科智慧生活創新應用競賽",
    award: "佳作",
  },
  {
    year: "2019",
    data: "指導專題生朱育承、張晴凱同學榮獲2019年實務專題競賽",
    award: "第三名",
  },

  { year: "2018", data: "雲科大智慧城市創意應用競賽", award: "銅獎" },
  { year: "2018", data: "雲科大智慧城市創意應用競賽", award: "佳作" },
  { year: "2018", data: "實務專題競賽暨成果發表觀摩會", award: "佳作" },
  {
    year: "2018",
    data: "指導研究生高哲元榮獲SPIE Photonics Europe 2018 Travel Grant Award",
    award: "2150美金",
  },
  {
    year: "2018",
    data: "指導研究生陳彥中、練周典同學榮獲2018 NCWIA",
    award: "最佳論文獎",
  },
  {
    year: "2018",
    data: "指導專題生林宣昂、李政瑩同學榮獲2018雲科大智慧城市創意應用競賽",
    award: "銅獎",
  },
  {
    year: "2018",
    data: "指導專題生張城溥、蕭富鴻同學榮獲2018雲科大智慧城市創意應用競賽",
    award: "佳作",
  },
  {
    year: "2018",
    data: "指導研究生林宣昂、李政瑩同學榮獲2018年實務專題競賽暨成果發表觀摩會",
    award: "最佳人氣獎",
  },
  {
    year: "2018",
    data: "指導研究生林宣昂、李政瑩同學榮獲2018年實務專題競賽暨成果發表觀摩會",
    award: "佳作",
  },

  { year: "2017", data: "中華民國電腦學會", award: "傑出青年學者獎" },
  { year: "2017", data: "國立雲林科技大學", award: "研發績優新人獎" },
  { year: "2017", data: "數位生活科技演討會", award: "優秀論文獎" },
  {
    year: "2017",
    data: "IEEE ICASI Best Conference Paper Award",
    award: "最佳論文獎",
  },
  {
    year: "2017",
    data: "指導研究生陳宥廷獲得 2017 美律獎助學金",
    award: "12 萬元",
  },
  {
    year: "2017",
    data: "指導研究生陳彥中榮獲 SPIE Optics + Photonics 2017 Travel Grant Award",
    award: "2200 美金",
  },
  {
    year: "2017",
    data: "指導研究生莊尚儒同學榮獲 DIGI+Talent 跨域數位人才加速躍升計畫 - DIGI+ 數位新星",
    award: "一星大賞",
  },
  {
    year: "2017",
    data: "指導研究生簡澤宇同學榮獲 2017 數位生活科技研討會",
    award: "優秀論文獎",
  },
  {
    year: "2017",
    data: "指導研究生莊尚儒同學榮獲雲林縣 106 年度",
    award: "大專優秀青年",
  },
  {
    year: "2017",
    data: "指導研究生戴嘉輝同學榮獲 2017 IEEE ICASI",
    award: "最佳論文獎",
  },
  {
    year: "2017",
    data: "指導研究生莊尚儒同學榮獲青年救國團106年度",
    award: "大專優秀青年",
  },

  {
    year: "2016",
    data: "International Computer Symposium (ICS)",
    award: "最佳論文獎",
  },
  {
    year: "2016",
    data: "中區技專校院校際聯盟 2016 年研發成果網路聯合發表會",
    award: "優等",
  },
  {
    year: "2016",
    data: "國立雲林科技大學 105 學年度實務專題競賽",
    award: "佳作",
  },
  {
    year: "2016",
    data: "指導研究生簡澤宇榮獲 SPIE Optics + Photonics 2016 Travel Grant Award",
    award: "2500 美金",
  },
  {
    year: "2016",
    data: "指導研究生張瀚文獲得 International Computer Symposium (ICS) 2016",
    award: "最佳論文獎",
  },
  {
    year: "2016",
    data: "指導專題生黃柏允、黃捷楷、蔡傑翰、蕭勝榮、戴暉又同學獲得中區技專 校院校際聯盟 2016 年研發成果網路聯合發表會",
    award: "優等",
  },
  {
    year: "2016",
    data: "指導專題生戴暉又、黃柏允榮獲雲科大 105 學年度實務專題競賽 (作品:雲科美食地圖)",
    award: "佳作",
  },

  {
    year: "2015",
    data: "KAGIS Fall Conference & International Symposium",
    award: "最佳論文獎",
  },
  {
    year: "2015",
    data: "中區技專校院校際聯盟 2015 年研發成果網路聯合發表會",
    award: "佳作",
  },
  {
    year: "2015",
    data: "國立雲林科技大學創客競賽 YunMaker Competition",
    award: "優等獎",
  },
  {
    year: "2015",
    data: "國立雲林科技大學 104 學年度實務專題競賽",
    award: "佳作",
  },
  {
    year: "2015",
    data: "指導研究生林力瀚獲得 2015 KAGIS Fall Conference & International Symposium on GIS",
    award: "最佳論文獎",
  },
  {
    year: "2015",
    data: "指導並帶領何達睿、詹振宏、陳彥霖同學參加 2015 年國際學校程式設計競賽 ISSC",
    award: "亞軍",
  },
  {
    year: "2015",
    data: "指導專題生郭家禎通過科技部核定 104 年度",
    award: "大專學生研究計畫",
  },
  {
    year: "2015",
    data: "指導專題生莊尚儒、郭家禎榮獲中區技專校院校際聯盟 2015 年研發成果網路聯合發表會",
    award: "佳作",
  },
  {
    year: "2015",
    data: "指導專題生廖聖傑、許景翔榮獲 2015 雲科大創客競賽 YunMaker Competition (作品: 高光譜影像處理 GUI 設計)",
    award: "優等獎",
  },
  {
    year: "2015",
    data: "指導專題生莊尚儒、郭家禎榮獲雲科大 104 學年度實務專題競賽 (作品: 校園導覽 APP)",
    award: "佳作",
  },

  {
    year: "2014",
    data: "International Computer Symposium (ICS)",
    award: "最佳論文獎",
  },
];
