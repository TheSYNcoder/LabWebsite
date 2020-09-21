export default function(){
    return (
        [
            {
                "title": "Two-phase dynamic routing for micro and macro-level equivariance in multi-column capsule networks",
                "content":"The success of multi column region specific convolutional networks have demonstrated the importance of fixation points in images to reduce uncertainty during classification. However, suppression of non maximal activations can lead to loss of valuable information. Moreover scalar activations are only descriptive of the presence of a feature and gives no further information. The recently proposed capsule networks compute agreement between rich feature vectors across the entire image. While this can model variations and also propagate non-maximal activations to higher layers using dynamic routing, it still handles micro and macro-level features with same precedence. Datasets that contain objects with independently deformable components are prone to failure when it comes to an uniform agreement protocol.",
                "type":"Journal",
                "authors":"Bodhisatwa Mandal, Ritesh Sarkhel, Swarnendu Ghosh, Nibaran Das, Mita Nasipuri",
                "name":"Pattern Recognition",
                "year":2020,
                "link":"https://www.sciencedirect.com/science/article/pii/S0031320320303988",

            },
            {
                "title":"Devnet: an efficient cnn architecture for handwritten devanagari character recognition",
                "content":"The writing style is a unique characteristic of a human being as it varies from one person to another. Due to such diversity in writing style, handwritten character recognition (HCR) under the purview of pattern recognition is not trivial. Conventional methods used handcrafted features that required a-priori domain knowledge, which is always not feasible. In such a case, extracting features automatically could potentially attract more interests. For this, in the literature, convolutional neural network (CNN) has been a popular approach to extract features from the image data. However, state-of-the-art works do not provide a generic CNN model for character recognition, Devanagari script, for instance. Therefore, in this work, we first study several different CNN models on publicly available handwritten Devanagari characters and numerals datasets.",
                "type":"Journal",
                "year":2020,    
                "authors":"Riya Guha, Nibaran Das, Mahantapas Kundu, Mita Nasipuri, KC Santosh",
                "name":"International Journal of Pattern Recognition and Artificial Intelligence",
                "link":"https://www.worldscientific.com/doi/abs/10.1142/S0218001420520096",
            },
            {
                "title":"Multi scale mirror connection based encoder decoder network for text localization",
                "content":"Encoder decoder models with multi-scale feature concatenations have become ubiquitous for various natural scene segmentation tasks. In the current approach, a similar model with an improved mirror connection from encoders to decoder has been proposed. Three different types of mirror connections, namely, linear, parametric and convolutional, have been demonstrated in the proposed work. We have also implemented the use of internal skips to facilitate better gradient propagation within the encoder-decoder architecture. The proposed model also consists of an ensemble module that combines outputs from models with different kernel sizes, such as, 3 × 3, 5 × 5 and 7 × 7 to combine multi-scale features for efficient detections. The model was tested on the ICDAR 2003, SVT, ICDAR 2015 and the Total-Text dataset where it proved to be superior to other state of the art encoder-decoder architectures",
                "type":"Journal",
                "year":2020,
                "authors":"Kalpita Dutta, Malyaban Bal, Arpita Basak, Swarnendu Ghosh, Nibaran Das, Mahantapas Kundu, Mita Nasipuri",
                "name":"Pattern Recognition Letters",
                "link":"https://www.sciencedirect.com/science/article/pii/S0167865520301227"
            },
            {
                "title":"Identification of Malignancy from Cytological Images Based on Superpixel and Convolutional Neural Networks",
                "content":"This chapter explores two methodologies for classification of cytology images into benign and malignant. Heading toward the automated analysis of the images to eradicate human intervention, this chapter draws curtain from the history of automated CAD-based design system for better understanding of the roots of the evolving image processing techniques in the analysis of biomedical images. Our first approach introduces the clustering-based approach to segment the nucleus region from the rest. After segmentation, nuclei features are extracted based on which classification is done using some standard classifiers. The second perspective suggests the usage of deep-learning-based techniques such as ResNet and InceptionNet-v3. In this case, classification is done with and without segmented images but not using any handcrafted features.",
                "type":"",
                "year":2020,
                "authors":"Shyamali Mitra, Soumyajyoti Dey, Nibaran Das, Sukanta Chakrabarty, Mita Nasipuri, Mrinal Kanti Naskar",
                "name":"Springer",
                "link":"https://link.springer.com/chapter/10.1007/978-981-13-7334-3_8"
            },
            {
                "title":"Deep learning for word-level handwritten Indic script identification",
                "content":"We propose a novel method that uses convolutional neural networks (CNNs) for feature extraction. Not just limited to conventional spatial domain representation, we use multilevel 2D discrete Haar wavelet transform, where image representations are scaled to a variety of different sizes. These are then used to train different CNNs to select features. To be precise, we use 10 different CNNs that select a set of 10240 features, ie 1024/CNN. With this, 11 different handwritten scripts are identified, where 1K words per script are used. In our test, we have achieved the maximum script identification rate of 94.73% using multi-layer perceptron (MLP). Our results outperform the state-of-the-art techniques.",
                "type":"Journal",
                "year":2020,
                "authors":"Soumya Ukil, Swarnendu Ghosh, Sk Md Obaidullah, KC Santosh, Kaushik Roy, Nibaran Das",
                "name":"The 3rd International Conference on Recent Trends in Image Processing & Pattern Recognition(RTIP2R 2020)",
                "link":"Deep learning for word-level handwritten Indic script identification"
            },
            {
                "title":"Segfast-v2: Semantic image segmentation with less parameters in deep learning for autonomous driving",
                "content":"Semantic image segmentation can be used in various driving applications, such as automatic braking, road sign alerts, park assists, and pedestrian warnings. More often, AI applications, such as autonomous modules are available in expensive vehicles. It would be appreciated if such facilities can be made available in the lower end of the price spectrum. Existing methodologies, come with a costly overhead with large number of parameters and need of costly hardware. Within this scope, the key contribution of this work is to promote the possibility of compact semantic image segmentation so that it can be extended to deploy AI based solutions to less expensive vehicles. While developing cheap and fast models one must also not compromise the factor of reliability and robustness. The proposed work is primarily based on our previous model named “SegFast”, and is aimed to perform thorough analysis",
                "type":"Journal",
                "year":2019,
                "authors":"Swarnendu Ghosh, Anisha Pal, Shourya Jaiswal, KC Santosh, Nibaran Das, Mita Nasipuri",
                "name":"International Journal of Machine Learning and Cybernetics",
                "link":"https://link.springer.com/article/10.1007/s13042-019-01005-5",
            },
            {
                "title":"Understanding Deep Learning Techniques for Image Segmentation",
                "content":"The machine learning community has been overwhelmed by a plethora of deep learning--based approaches. Many challenging computer vision tasks, such as detection, localization, recognition, and segmentation of objects in an unconstrained environment, are being efficiently addressed by various types of deep neural networks, such as convolutional neural networks, recurrent networks, adversarial networks, and autoencoders. Although there have been plenty of analytical studies regarding the object detection or recognition domain, many new deep learning techniques have surfaced with respect to image segmentation techniques. This article approaches these various deep learning techniques of image segmentation from an analytical perspective. The main goal of this work is to provide an intuitive understanding of the major techniques that have made a significant contribution to the image segmentation",
                "type":"Journal",
                "year":2019,
                "authors":"Swarnendu Ghosh, Nibaran Das, Ishita Das, Ujjwal Maulik",
                "name":"ACM Computing Survey",
                "link":"https://dl.acm.org/doi/abs/10.1145/3329784",
            },
            {
                "title":"Automatic Indic script identification from handwritten documents: page, block, line and word-level approach",
                "content":"Script identification is a well-studied problem in literature since last decade. Several methods for automatic script identification have been reported. All these methods consider a document as either at page, block, line or word-level, but no experimental/empirical conclusion has been provided in choosing the particular level of work. To address this, we have carried out a multi-level script identification experiment, i.e., the same document is considered at different levels namely: page, block, line and word for script identification. Two different types of features are considered: script dependent and script independent, which is computed at each level to categorize different scripts.",
                "type":"Journal",
                "year":2019,
                "authors":"Sk Md Obaidullah, KC Santosh, Chayan Halder, Nibaran Das, Kaushik Roy",
                "name":"International Journal of Machine Learning and Cybernetics",
                "link":"https://link.springer.com/content/pdf/10.1007/s13042-017-0702-8.pdf",
            },
            {
                "title":"The journey of graph kernels through two decades",
                "type":"Journal",
                "year":2018,
                "authors":"Swarnendu Ghosh, Nibaran Das, Teresa Gonçalves, Paulo Quaresma, Mahantapas Kundu",
                "name":"ELSEVIER",
                "link":"https://doi.org/10.1016/j.cosrev.2017.11.002",
            },

        ]
    )
}