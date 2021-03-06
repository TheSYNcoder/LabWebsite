import React from 'react';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import Layout from "../Components/layout";
import "../Components/footer.css";
import ProfileCard from  "../Components/card";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "../Components/carousel";
import { Container , Row , Col } from "reactstrap";
import "tachyons";
import NEWS from "../Components/static_paper_info";

const NewsFeed = () => {
    // const [news , setNews] = React.useState([]);   
    // const [loaded , setLoaded] = React.useState(false);
    // React.useEffect(() => {
    //     axios.get( "https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text", {
    //         crossdomain:true,
    //     })
    //         .then( (resp) => {
    //             setLoaded(true);
    //             setNews(resp.data);
    //         })
    //         .catch((error)=>{
    //             console.log( error);
    //         })
    // }, [loaded] );
    console.log(NEWS)
    const CONTENTS = NEWS().map((val,i)=>{
        return <PAPER data={val} />
    })
    return (
        <div>
            <Container> 
                <Typography variant="h1" color="textPrimary" className="f1 pt-4 mt-4">
                    What's happening at our Lab
                </Typography>
                <div className="py-4 my-4">
                    <ul className="ull">
                    {CONTENTS}
                    </ul>
                </div>
            </Container> 
        </div>
    )
}

const PAPER = ({data})=>{
    return(
        <li>
        <p className="pv0 pa0">
        <a href={data.link} className="f3 hover-dark-gray link rcolor" style={{textDecoration:"none"}}>{data.title} </a> | <span className="b">{data.year}</span>
        </p>
        <Typography variant="h5" color="textSecondary">
            {data.authors}
        </Typography>
        </li>
    )
};
export default function Home(){
    const [content,setContent] = React.useState([])
    React.useEffect(()=>{
        axios.get(
            `https://gobackserve.herokuapp.com`,
        ).then(res=>{
            const con = res.data.map((val,i)=>{
                return <ProfileCard data={val} />
            })
            setContent(con)
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    return (
        <Layout>    
            <div className="pa4 "/>
            <Carousel />
            <NewsFeed/>
            <Container>
            <div class="container tc pb4" >
                    <h2 class="f1 fw3 rcolor caseS" >Lab Members</h2>
            </div>
            <Row >
                {/* <Col><ProfileCard /></Col>
                <Col><ProfileCard /></Col>
            </Row>
            <Row>
                <Col><ProfileCard /></Col>
                <Col><ProfileCard /></Col> */}
                {content}
                
            </Row>
            </Container> 
        </Layout>
    )
}