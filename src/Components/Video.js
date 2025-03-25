import { useRef} from "react";
const Vid = './Videos/capra.mp4';
function Video() {
    let lastClick = useRef(0);

    
    const openAd= (e) =>{
        if (Date.now() - lastClick.current > 10000) {
            e.preventDefault();
            window.open('https://www.youtube.com/watch?v=3JZ_D3ELwOQ', '_blank');
        }
        lastClick.current = Date.now();
    }
      return (
    <div>
        <video onClick={openAd} width="320" height="240" controls>
            <source src={Vid} type="video/mp4"/>
        </video>
    </div>
  );
}
export default Video;