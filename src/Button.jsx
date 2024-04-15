import './App.css'
import './index.css'
import MyScript from "./ButtonExe.jsx";

function Button() {
    return (
        <div>


            <button id="darkmodebutton"  onClick={MyScript}> Toggle Night Mode</button>

        </div>
    )

}

export default Button