import React from "react";
import jes2025 from '../assets/images/4. engineering-structures2025.png';
import jes2023 from '../assets/images/3. engineering-structures2023.png';
import ieee2023 from '../assets/images/2. IEEE_ICIT2023.png';
import jch2021 from '../assets/images/1. civil_hydraulic2021.png';
import '../assets/styles/Publication.scss';


function Publication() {
    return(
    <div className="publication-container" id="publications">
        <h1>Publications</h1>
        <div className="publication-grid">
            <div className="publication">
                <a href="https://www.sciencedirect.com/science/article/pii/S0141029623005448" target="_blank" rel="noreferrer">
                    <img src={jes2025} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="https://www.sciencedirect.com/science/article/pii/S0141029623005448" target="_blank" rel="noreferrer" className="title">
                    <h2>Physics-guided GAN-based prognostic framework for seismic hysteresis loop and damage pattern in RC bridge columns</h2>
                </a>
                <h3>Engineering Structures, 2025</h3>
                <div className="author">
                    <a href="https://scholar.google.com.tw/citations?user=t8dhlSQAAAAJ&hl=zh-TW" target="_blank" rel="noreferrer"><strong>Ting-Yan Wu,</strong></a>
                    <a href="https://scholar.google.com.tw/citations?user=jkEbHUEAAAAJ&hl=zh-TW&oi=sra" target="_blank" rel="noreferrer"> Rih-Teng Wu,</a>
                    <a href="https://scholar.google.com.tw/citations?user=vDyT748AAAAJ&hl=zh-TW&oi=sra" target="_blank" rel="noreferrer"> Ping-Hsiung Wang</a>
                </div>
                <p>Hysteretic behavior, damage patterns, and structural performance, e.g., Damage index (DI), are the critical seismic characteristic of reinforced concrete (RC) bridge columns. In this study, a novel bridge seismic hysteresis loop and damage pattern prognostic framework is proposed, including a sequence-to-sequence hysteresis prediction network based on Gated Recurrent Units (GRU) and a damage pattern generative model based on a conditional generative adversarial network (CGAN), namely HysGRU and HysGAN, respectively. Through training on 160 hysteresis loops, the physics-guided HysGRU model, which incorporates constraints derived from numerical simulation, achieves a root mean square error (RMSE) of 47.57 kN and an R<sup>2</sup> score of 94.55%. This represents substantial improvements over purely simulation, with a 63.53% reduction in RMSE and a 35.56% increase in R<sup>2</sup> score, demonstrating the effectiveness of integrating physics-based constraints into the deep learning framework. Moreover, the physics features of hysteretic behavior are extracted as a condition of HysGAN. To evaluate the performance of HysGAN, a pre-trained DI prediction network is adopted to calculate the R<sup>2</sup> scores from the DI values prediction of the predicted damage patterns. Extensive experiments have shown that conditioning with latent features can improve quality, stability, and generalization capability. HysGAN achieves R<sup>2</sup> scores of 91.65% and 91.62% on validation and test datasets, significantly improving over the baseline model with increases of 4.68% and 54.62%, respectively. Upon completion of the model training process, engineers can automatically derive the hysteresis loop and damage patterns given specific column design parameters and selected drift ratios with the proposed HysGRU and HysGAN, facilitating an efficient assessment of seismic design and capacity.</p>
            </div>
            <div className="publication">
                <a href="https://www.sciencedirect.com/science/article/pii/S0141029623005448" target="_blank" rel="noreferrer">
                    <img src={jes2023} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="https://www.sciencedirect.com/science/article/pii/S0141029623005448" target="_blank" rel="noreferrer">
                    <h2>Development of a high-fidelity failure prediction system for reinforced concrete bridge columns using generative adversarial networks</h2>
                </a>
                <h3>Engineering Structures, 2023</h3>
                <div className="author">
                    <a href="https://scholar.google.com.tw/citations?user=t8dhlSQAAAAJ&hl=zh-TW" target="_blank" rel="noreferrer"><strong>Ting-Yan Wu,</strong></a>
                    <a href="https://scholar.google.com.tw/citations?user=jkEbHUEAAAAJ&hl=zh-TW&oi=sra" target="_blank" rel="noreferrer"> Rih-Teng Wu,</a>
                    <a href="https://scholar.google.com.tw/citations?user=vDyT748AAAAJ&hl=zh-TW&oi=sra" target="_blank" rel="noreferrer"> Ping-Hsiung Wang,</a>
                    <a href="https://scholar.google.com.tw/citations?user=uMgCC3wAAAAJ&hl=zh-TW&oi=sra" target="_blank" rel="noreferrer"> Tzu-Kang Lin,</a>
                    <a href="https://scholar.google.com.tw/citations?user=7mWpQB0AAAAJ&hl=zh-TW&oi=sra" target="_blank" rel="noreferrer"> Kuo-Chun Chang</a>
                </div>
                <p>Visual damage patterns of structural components are critical to evaluate structural performance. However, visual damage images can only be obtained by laboratory tests or in-situ tests, which require massive funding and human workforces. In this study, a novel bridge column failure prediction framework is proposed based on generative adversarial network (GAN). Trained with merely 110 damage patterns collected from experimental cyclic loading test, the proposed approach predicts the high-fidelity surface damage patterns of concrete bridge columns given the information of the column design parameters as well as the user-desirable performance level, i.e., Damage Index (DI) of the column. Two network architectures and three label encoding strategies are explored to investigate the performance in estimating the damage pattern. By incorporating DI as a numerical label, the proposed network is able to predict the unseen damage patterns which are not available in the training dataset. Also, it is found that adding classifiers and regressors in the discriminator to account for the condition vector is beneficial for network training, achieving a Frechet Inception Distance (FID) of 102.6 when producing the synthetic patterns. Extensive experiments have demonstrated that the proposed framework is capable of synthesizing decent damage patterns with superior fidelity, providing bridge engineers with a platform to evaluate the potential failure modes during seismic design and evaluation.</p>
            </div>
            <div className="publication">
                <a href="https://ieeexplore.ieee.org/abstract/document/10143099" target="_blank" rel="noreferrer">
                    <img src={ieee2023} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="https://ieeexplore.ieee.org/abstract/document/10143099" target="_blank" rel="noreferrer">
                    <h2>Building Manufacturing Deep Learning Models with Minimal and Imbalanced Training Data Using Domain Adaptation and Data Augmentation</h2>
                </a>
                <h3>IEEE International Conference on Industrial Technology (ICIT), 2023</h3>
                <div className="author">
                    <a href="https://scholar.google.com.tw/citations?user=RxdytskAAAAJ&hl=zh-TW&oi=sra" target="_blank" rel="noreferrer">Adrian Shuai Li,</a>
                    <a href="https://scholar.google.com.tw/citations?user=EfuT9RoAAAAJ&hl=zh-TW&oi=sra" target="_blank" rel="noreferrer"> Elisa Bertino,</a>
                    <a href="https://scholar.google.com.tw/citations?user=jkEbHUEAAAAJ&hl=zh-TW&oi=sra" target="_blank" rel="noreferrer"> Rih-Teng Wu,</a>
                    <a href="https://scholar.google.com.tw/citations?user=t8dhlSQAAAAJ&hl=zh-TW" target="_blank" rel="noreferrer"><strong> Ting-Yan Wu</strong></a>
                </div>
                <p>Deep learning (DL) techniques are highly effective for defect detection from images. Training DL classification models, however, requires vast amounts of labeled data which is often expensive to collect. In many cases, not only the available training data is limited but may also imbalanced. In this paper, we propose a novel domain adaptation (DA) approach to address the problem of labeled training data scarcity for a target learning task by transferring knowledge gained from an existing source dataset used for a similar learning task. Our approach works for scenarios where the source dataset and the dataset available for the target learning task have same or different feature spaces. We combine our DA approach with an autoencoder-based data augmentation approach to address the problem of imbalanced target datasets. We evaluate our combined approach using image data for wafer defect prediction. The experiments show its superior performance against other algorithms when the number of labeled samples in the target dataset is significantly small and the target dataset is imbalanced.</p>
            </div>
            <div className="publication">
                <a href="https://www.airitilibrary.com/Article/Detail/P20150925002-202104-202105270001-202105270001-40-47" target="_blank" rel="noreferrer">
                    <img src={jch2021} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="https://www.airitilibrary.com/Article/Detail/P20150925002-202104-202105270001-202105270001-40-47" target="_blank" rel="noreferrer">
                    <h2>影像分析方法應用於構造物外觀異狀自動化偵測之發展</h2>
                </a>
                <h3>《土木水利》 48卷2期, 2021</h3>
                <div className="author">
                    <a href="">張庭維,</a>
                    <a href=""> 許筠曼,</a>
                    <a href="https://scholar.google.com.tw/citations?user=t8dhlSQAAAAJ&hl=zh-TW" target="_blank" rel="noreferrer"><strong> 吳亭諺,</strong></a>
                    <a href="https://scholar.google.com/citations?user=ZuBSYdwAAAAJ&hl=zh-TW&oi=ao" target="_blank" rel="noreferrer"> 許舜翔,</a>
                    <a href="https://scholar.google.com.tw/citations?hl=zh-TW&user=JAXEkS8AAAAJ" target="_blank" rel="noreferrer"> 張家銘</a>
                </div>
                <p>構造物外觀異狀自動化偵測為結構檢測之重要發展方向，結構巡檢通常需花費大量的人力與時間對資料進行判釋，為降低巡檢所花費之資源，目前工程領域積極發展自動化偵測技術，而影像分析方法為其中重要的研究方向，利用影像分析來快速且客觀地得到檢測結果。於本篇文章中將介紹影像分析方法於於結構外觀檢測，以及應用人工智慧影像分割於構造物外觀異狀偵測之案例。人工智慧能夠快速有效的進行構造物外觀異狀偵測，藉由經人工標註後的影像資料，深度學習模型能夠針對欲辨識之類別的特徵進行學習，配合不同的資料組合以及模型微調方式，能夠處理困難的檢測任務。在本文我們利用實際訓練深度學習模型，進行隧道裂縫以及橋梁之異狀檢測任務，探討模型於不同檢測任務所需採取的技巧以及資料集的微調方針，進而分析人工智慧於構造物外觀異狀自動化偵測之成果，以及實務上較佳的模型訓練方式，並歸納提出目前發展的潛力與挑戰。</p>
            </div>
        </div>
    </div>
    );
}

export default Publication;