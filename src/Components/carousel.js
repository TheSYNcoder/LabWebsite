import React from "react";
import { Carousel } from "react-responsive-carousel";
import JU from "../images/ju.jpeg";
import Lab1 from "../images/lab1.jpg";
import Lab2 from "../images/lab2.jpg";
import Lab3 from "../images/lab3.jpg";

const tooglesGroupId = "Toggles";
const valuesGroupId = "Values";
const mainGroupId = "Main";


const getConfigurableProps = () => ({
  showArrows: true,
  showStatus: true,
  showIndicators: true,
  infiniteLoop: true,
  showThumbs: false,
  useKeyboardArrows: true,
  autoPlay: true,
  stopOnHover: true,
  swipeable: true,
  dynamicHeight: true,
  emulateTouch: true,
  thumbWidth: 100,
  selectedItem: 0,
  interval: 2500,
  transitionTime: 1000,
  swipeScrollTolerance: 5,
  width : "100vw",
});
export default () => (
  <Carousel
    centerMode
    {...getConfigurableProps()}
    className="mt-1"
  >
    <div >
      <img alt="" style={styles} src={JU} />
      <p className="legend">Jadavpur University</p>
    </div>
    <div>
      <img alt="" style={styles} src={Lab1} />
      <p className="legend">Lab setup</p>
    </div>
    <div>
      <img alt="" style={styles} src={Lab2} />
      <p className="legend">Lab setup</p>
    </div>
    <div>
      <img alt="" style={styles} src={Lab3} />
      <p className="legend">Lab Setup</p>
    </div>
    {/* <div>
      <img alt="" style={styles} src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
      <p className="legend">Legend 5</p>
    </div>
    <div>
      <img alt="" style={styles} src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
      <p className="legend">Legend 6</p>
    </div>
    <div>
      <img alt="" style={styles} src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
      <p className="legend">Legend 7</p>
    </div> */}
    {/* <div>
      <img alt="" style={styles} src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" />
      <p className="legend">Legend 8</p>
    </div>
    <div>
      <img alt="" style={styles} src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg" />
      <p className="legend">Legend 9</p>
    </div>
    <div>
      <img alt="" style={styles} src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg" />
      <p className="legend">Legend 10</p>
    </div>
    <div>
      <img alt="" style={styles} src="http://lorempixel.com/output/cats-q-c-640-480-11.jpg" />
      <p className="legend">Legend 11</p>
    </div>
    <div>
      <img alt="" style={styles} src="http://lorempixel.com/output/cats-q-c-640-480-12.jpg" />
      <p className="legend">Legend 12</p>
    </div>
    <div>
      <img alt="" style={styles} src="http://lorempixel.com/output/cats-q-c-640-480-13.jpg" />
      <p className="legend">Legend 13</p>
    </div>
    <div>
      <img alt="" style={styles} src="http://lorempixel.com/output/cats-q-c-640-480-14.jpg" />
      <p className="legend">Legend 14</p>
    </div> */}
  </Carousel>
);

const styles = {
  height : 400 ,
  width : '100%'
}