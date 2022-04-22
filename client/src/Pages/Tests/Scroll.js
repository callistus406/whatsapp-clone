import { useState, useEffect } from "react";
import "./scroll.css";
function Scroll() {
  const [isVisible, setIsVisible] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const getElement = document.getElementById("container");

    getElement.addEventListener("scroll", listenToScroll);
    return () => getElement.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 0;
    const winScroll =
      document.getElementById("container").scrollTop |
      document.getElementById("container").scrollTop;
    console.log(winScroll);
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <div id="container">
      <div id="container2">
        <div id="height">
          <b>
            height: {height} - {isVisible ? "show" : "hide"}
          </b>
        </div>
        {isVisible && (
          <div id="hide">Content hidden when scrolled beyond 200px</div>
        )}
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit
          impedit ipsam aliquam dolore. Illo unde optio, sequi amet doloribus
          cumque, hic molestias a excepturi ipsum consectetur. Laboriosam,
          aspernatur unde? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Illo, expedita alias. Inventore debitis excepturi sequi, at
          dolor soluta provident alias fugit harum, eum velit cupiditate unde
          laudantium maiores dolorum nulla!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit
          impedit ipsam aliquam dolore. Illo unde optio, sequi amet doloribus
          cumque, hic molestias a excepturi ipsum consectetur. Laboriosam,
          aspernatur unde? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Illo, expedita alias. Inventore debitis excepturi sequi, at
          dolor soluta provident alias fugit harum, eum velit cupiditate unde
          laudantium maiores dolorum nulla!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit
          impedit ipsam aliquam dolore. Illo unde optio, sequi amet doloribus
          cumque, hic molestias a excepturi ipsum consectetur. Laboriosam,
          aspernatur unde? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Illo, expedita alias. Inventore debitis excepturi sequi, at
          dolor soluta provident alias fugit harum, eum velit cupiditate unde
          laudantium maiores dolorum nulla!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit
          impedit ipsam aliquam dolore. Illo unde optio, sequi amet doloribus
          cumque, hic molestias a excepturi ipsum consectetur. Laboriosam,
          aspernatur unde? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Illo, expedita alias. Inventore debitis excepturi sequi, at
          dolor soluta provident alias fugit harum, eum velit cupiditate unde
          laudantium maiores dolorum nulla!
        </div>
      </div>
    </div>
  );
}

export default Scroll;
