import React from 'react';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import Layout from "../Components/layout";
import "../Components/footer.css";
import ProfileCard from  "../Components/card";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "../Components/carousel";
import { Container , Row , Col } from "reactstrap";

const NewsFeed = () => {
    const [news , setNews] = React.useState([]);   
    const [loaded , setLoaded] = React.useState(false);
    React.useEffect(() => {
        axios.get( "https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text", {
            crossdomain:true,
        })
            .then( (resp) => {
                setLoaded(true);
                setNews(resp.data);
            })
            .catch((error)=>{
                console.log( error);
            })
    }, [loaded] );
    return (
        <div>
            <Container> 
                <Typography variant="h1" color="textPrimary" className="pt-4 mt-4">
                    What's happening at our Lab
                </Typography>
                <div className="py-4 my-4">
                    {news}
                </div>
            </Container> 
        </div>
    )
}


export default function Home(){
    return (
        <Layout>    
            <Carousel />
            <NewsFeed/>
            <Container>
            <Row>
                <Col><ProfileCard /></Col>
                <Col><ProfileCard /></Col>
            </Row>
            <Row>
                <Col><ProfileCard /></Col>
                <Col><ProfileCard /></Col>
            </Row>
            </Container> 
        </Layout>
    )
}