import React from 'react'
import "./Professor.scss"
import Professor_img from "../img/Professor/Professor_img.jpg"
import Mail_img from "../img/Professor/Mail_img.png"
import Call_img from "../img/Professor/Call_img.png"
import { List, Typography, Divider, Table } from 'antd';
import PaginationList from 'react-pagination-list';


const Professor = () => {
    return (
        <div className="Professor" id="Professor">
            <div className="content">
                <div className="Pic">
                    <span>Professor</span>
                    <img src={Professor_img} width={'60%'} height={'auto'} ></img>
                </div>
                <div className="Info">
                    <div className="Name">
                        <span>Associate Professor</span>
                        <span>Chen, Shih-Yu 陳士煜</span>
                    </div>
                    <span>Department of Computer Science and Information Engineering</span>
                    <span>National Yunlin University of Science and Technology</span>
                    <div className="Mail">
                        <img src={Mail_img} ></img>
                        <span >sychen@yuntech.edu.tw</span>
                    </div>
                    <div className="Phone">
                        <img src={Call_img} ></img>
                        <span className="Number">(work) +886-5-5342601 ext 4514
                            <br></br>(lab) +886-5-5342601 ext 4598
                        </span>
                        <a className="Btn-more" href="/" style={{ color: "black" }}>More</a>
                    </div>
                </div>
            </div>
            
            <div className="Journal">
                <h1 className="">Journal articles</h1>
                {/* <List
                    
                    dataSource={data}
                    renderItem={item => (
                    <List.Item>
                        <span><span>{item.content1}</span><span className="blod">{item.blod}</span><span>{item.content2}</span>
                        <a href={item.link} target="_blank">{item.title}</a></span><span>{item.content3}</span>
                    </List.Item>
                    
                )}
                ></List> */}

                <PaginationList
                    data={data}
                    pageSize={6}
                    renderItem={item => (
                        <List.Item >
                            <span><span>{item.content1}</span><span className="blod">{item.blod}</span><span>{item.content2}</span>
                            <a href={item.link} target="_blank">{item.title}</a></span><span>{item.content3}</span>
                        </List.Item>
                    )}
                />
            </div>
            
        </div>
        
            
        
    )
}

const data = [
    { blod: 'Shih-Yu Chen,' ,content1:'' ,content2: ' Chuan-Yu Chang, Cheng-Syue OU and Chou-Tien Lien (2020, Jul). ', 
        link:'https://www.mdpi.com/2072-4292/12/15/2348/htm',
        title:'Detection of Insect Damage in Green Coffee Beans Using VIS-NIR Hyperspectral Imaging.',
        content3:' Remote sensing, 12(15), 2348. (SCI, IF = 4.509, Ranking = 9/30 = 30%,  Remote sensing). 本人為第一作者、通訊作者. '
    },
    { blod: 'SY Chen,' ,content1: 'William C Chiu, DB Powers, JM Hirshon, SA Shackelford, PF Hu, ', 
        content2:' HH Chen, CF Mackenzie, CH Miller, JJ DuBose, C Carroll, R Fang, TM Scalea (2020, May). ',
        link:'https://militaryhealth.bmj.com/content/early/2020/05/28/bmjmilitary-2020-001483',
        title:'Impact of trauma centre capacity and volume on the mortality risk of incoming new admissions.',
        content3:' BMJ Mil Health. (SCI, IF = 0.994).'
    },
    { blod: 'Shih-Yu Chen,' ,content1:'' ,content2: ' Chinsu Lin, Shang-Ju Chuang and Zhe-Yuan Kao (2019, May). ', 
        link:'https://www.mdpi.com/2072-4292/11/9/1081/htm',
        title:'Weighted Background Suppression Target Detection Using Sparse Image Enhancement Technique for Newly Grown Tree Leaves.',
        content3:' Remote Sens., 11(9), 1081. (SCI, IF = 4.5, Ranking = 7/29 = 24.13%, Remote Sensing). 本人為第一作者. '
    },
    { blod: 'Shih-Yu Chen,' ,content1: 'Chinsu Lin, ', content2:' Chia-Chun Chen, Chia-Huei Tai (2018, Aug). ',
        link:'https://drive.google.com/file/d/1FR2CWLYyi2806r_gRDAdyZeBELCqMShe/view',
        title:'Detecting Newly Grown Tree Leaves from Unmanned-Aerial-Vehicle Images using Hyperspectral Target Detection Techniques.',
        content3:' ISPRS JOURNAL OF PHOTOGRAMMETRY AND REMOTE SENSING. (SCI, IF = 7.31, Ranking = 1/29 = 3.4%, GEOCHEMISTRY & GEOPHYSICS). 本人為通訊作者.'
    },
    { blod: 'Shih-Yu Chen,' ,content1: 'Keng-Hao Liu, ', content2:' Hung-Chang Chien, Meng-Han Lu (2018, Feb). ',
        link:'https://drive.google.com/file/d/1RuKAvkz_pSek-XiJoYsmeVRRiSgbc-Ef/view',
        title:'Progressive Sample Processing of Band Selection for Hyperspectral Image Transmission.',
        content3:' Remote Sensing, 10(3), 367. (SCI, IF = 4.5, Ranking = 7/29 = 24.13%, Remote Sensing).'
    },
    { blod: 'Shih-Yu Chen,' ,content2:' Chinsu Lin, Chia-Hui Tai, Shang-Ju Chuang (2018, Jan). ',
        link:'https://drive.google.com/file/d/1WfJlRQca0_qUX7WiyLbT-T45fLyFHHtp/view',
        title:'Adaptive Window-Based Constrained Energy Minimization for Detection of Newly Grown Tree Leaves.',
        content3:' Remote Sensing, 10(1), 96. (SCI, IF = 4.5, Ranking = 7/29 = 24.13%, Remote Sensing). 本人為第一作者.'
    },
    { blod: 'Shih-Yu Chen;' ,content1: 'Chein-I Chang; ', content2:' Hsiao-Chi Li; Hsian-Min Chen; Chia-Hsien Wen (2016, Sep). ',
        link:'https://drive.google.com/file/d/0B0YDE38rJWb5ZDB1YTJjLXNJV2c/view',
        title:'Comparative Study and Analysis Among ATGP, VCA, and SGA for Finding Endmembers in Hyperspectral Imagery.',
        content3:' IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing, 9(9), 4280-4306. (SCI, IF = 3.82, Ranking = 6/26 = 23.07%, ENGINEERING, ELECTRICAL & ELECTRONIC). 本人為通訊作者.'
    },
    { blod: 'Shih-Yu Chen, ' ,content1: 'Chein-I Chang, Wei Xiong, ', content2:' (2016, May). ',
        link:'https://www.inderscienceonline.com/doi/abs/10.1504/IJCSE.2016.076294',
        title:'Convex Cone Volume Analysis for Finding Endmembers in Hyperspectral Imagery.',
        content3:' International Journal of Computational Science and Engineering, Vol. 12, Nos. 2/3, pp. 186-191. (EI). 本人為通訊作者.'
    },
    { blod: 'Shih-Yu Chen ' ,content1: 'Chein-I Chang, Cheng Gao, and ', content2:' (2015, Sep). ',
        link:'https://drive.google.com/file/d/0B0YDE38rJWb5a2s5ZVFDX2tKeVk/view',
        title:'Recursive Automatic Target Generation Process in Subpixel Detection.',
        content3:' IEEE Geoscience and Remote Sensing Letters, 12(9), 1848 - 1852. (SCI, 67/265, ENGINEERING, ELECTRICAL & ELECTRONIC). 本人為通訊作者.'
    },
    { blod: 'Shih-Yu Chen, ' ,content1: 'Yaw-Jiunn Chiou, Clayton Chi-Chang Chen, ',
        content2:' Hsian-Min Chen, Jyh-Wen Chai, Yen-Chieh Ouyang, Wu-Chung Su, Ching-Wen Yang, San-Kan Lee & Chein-I Chang (2015, Aug). ',
        link:'https://www.tandfonline.com/doi/abs/10.1080/02533839.2015.1056552',
        title:'Magnetic resonance brain tissue classification and volume calculation.',
        content3:' Journal of the Chinese Institute of Engineers.(IF = 0.395, Ranking = 76/85 = 89.41%).'
    },
    { blod: 'Shih-Yu Chen ' ,content1: 'Chein-I Chang, Yulei Wang and ', content2:' (2015, Jul). ',
        link:'https://ieeexplore.ieee.org/document/7109108',
        title:'Anomaly Detection Using Causal Sliding Windows.',
        content3:' IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing, 8(7), 3260 - 3270. (SCI, IF = 3.82, Ranking = 6/26 = 23.07%, ENGINEERING, ELECTRICAL & ELECTRONIC). 本人為通訊作者.'
    },
    { blod: 'Shih-Yu Chen, ' ,content1: 'Meiping Song, ', content2:' Hsiao-Chi Li, Hsian-Min Chen and Chein-I Chang (2015, Jun). ',
        link:'https://drive.google.com/file/d/0B0YDE38rJWb5ZlY4X1hJR0FmcGc/view',
        title:'Finding Virtual Signatures for Linear Spectral Mixture Analysis.',
        content3:' IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing, 8(6), 2704 - 2719. (SCI, IF = 3.82, Ranking = 6/26 = 23.07%, ENGINEERING, ELECTRICAL & ELECTRONIC).'
    },
    { blod: 'Shih-Yu Chen, ' ,content1: 'Chein-I. Chang, Robert C. Schultz, Marissa C. Hobbs, ',
        content2:' Yulei Wang, and Chunhong Liu (2015, Mar). ',
        link:'https://drive.google.com/file/d/0B0YDE38rJWb5Y0RCTTM1dTFidE0/view',
        title:'Progressive Band Processing of Constrained Energy Minimization for Subpixel Detection.',
        content3:' IEEE Transactions on Geoscience and Remote sensing, 53(3),1626 - 1637. (SCI, IF = 5.85, Ranking = 4/84=4.07%).'
    },
    { blod: 'Shih-Yu Chen, ' ,content1: 'Colin F Mackenzie, Yulei Wang, Peter F Hu, ',
        content2:' Hegang H (2014, Jun). ',
        link:'https://journals.lww.com/jtrauma/pages/articleviewer.aspx?year=2014&issue=06000&article=00007&type=abstract',
        title:' Automated prediction of early blood transfusion and mortality in trauma patients.',
        content3:' Journal of Trauma and Acute Care Surgery, Vol. 76, no. 6, pp.1379-1385. (SCI, IF = 3.4, Ranking = 33/197 = 16.75%, Surgery).'
    },
    { blod: 'Shih-Yu Chen,' ,content1:'' ,content2: ' Yulei Wang, Chao-Cheng Wu, Chunhong Liu and Chein-I Chang (2014, Apr). ', 
        link:'https://drive.google.com/file/d/0B0YDE38rJWb5WlNLc2VWV0wyTW8/view',
        title:'Real Time Causal Processing of Anomaly Detection for Hyperspectral Imagery.',
        content3:' IEEE Transactions on Aerospace and Electronic Systems, vol.52, no.2, pp.1511-1534. (SCI, IF = 3.67, Ranking = 4/31 = 12.90.%, AEROSPACE). 本人為第一作者.'
    },
    { blod: 'Shih-Yu Chen,' ,content1:'Hsian-Min Chen, Chinsu Lin, ' ,content2: ' Yen-Chieh Ouyang, Chein-I Chang (2013, Aug). ', 
        link:'https://drive.google.com/file/d/0B0YDE38rJWb5bzhvcVFaTXpQLUE/view',
        title:'PPI SVM-Iterative FLDA Approach to Unsupervised Multispectral Image Classification.',
        content3:' IEEE Journal of Selected Topics in Applied Earth Observation sand Remote Sensing, vol. 6, no. 4, pp. 1834-1842. (SCI, IF = 3.82, Ranking = 6/26 = 23.07%, ENGINEERING, ELECTRICAL & ELECTRONIC).'
    },
    { blod: 'Shih-Yu Chen,' ,content1:'Clayton Chi-Chang Chen, Englin Wong, Hsian-Min Chen, ' ,
        content2: ' Jyh-Wen Chai, Ching Wen Yang, San Kan Lee, Yong Kie Wong, Chein-I Chang (2013, Apr). ', 
        link:'https://www.inderscience.com/info/inarticle.php?artid=53090',
        title:'Intra-pixel multispectral processing of magnetic resonance brain images for tissue characterization.',
        content3:' International Journal of Computational Science and Engineering, vol. 8, no. 2, pp. 87-110.'
    },
];



export default Professor;
