import React, { useRef, useEffect } from 'react';
import { getting } from "../../../api/youtube";

const getIframe = async () => {
  let data = await getting();
  let iframe = '';

  Object.entries(data).forEach(([key, video]) => {
    if (video instanceof Array) {
      let objVideo = Object.entries(video[0]).map((props) => props);
      let exportIframe = objVideo[3][1].embedHtml;
      iframe += exportIframe;
    }
  });
  console.log(iframe)

  return iframe
};

export default function VideoPlayer() {
   const container = useRef(null);

   useEffect(() => {
      const renderIframe = async () => {
        let video = await getIframe();
        container.current.innerHTML = video; 
      }
       renderIframe(); 
   }, []);

  return (
    <div ref={container}></div>
  );
}