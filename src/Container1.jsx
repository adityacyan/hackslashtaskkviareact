import './App.css'
import Pointerx from "./Pointer.jsx";


function Container1() {
    return (
        <div id="boxes">
            <h1>
                AI + RPA is what we do
            </h1>
            <div id={"transform"}>

                <img id={"imagex"}
                     src={"https://lets-collab-rust.vercel.app/static/media/s1-image.d6d4b7703bc14f99bb7e.jpg"}
                     alt={"mobiles"}/>
            </div>
            <h3>
                Future-Proof your business. Drive efficiency, profitability and deliver on customer experience
            </h3>
            <div id="linker">
                <p>
                    AI + RPA Automation
                </p>
                <Pointerx/>
            </div>


        </div>
    )

}

export default Container1