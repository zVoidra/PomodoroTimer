
import { useState } from "react";

// Components
import Timer from "../components/Timer";
import Tasks from "../components/Tasks";

const MainPage = () => {

    const [ timetype, setTimetype ] = useState("1")

    function changeTimer(timeId:string) {
        setTimetype(timeId)
    }

    return(
        <div className="flex flex-row drop-shadow-xl p-16 h-screen justify-center">
            <div className=" bg-gcolor2 text-center rounded-xl p-2 h-max">
                <span className="text-[3em]"> Promodo Timer</span>
                
                <div className="mt-4">                
                    <button className={`${timetype ===  "1" ? "activetimertype" : "timertypebtn"}`} onClick={() => { changeTimer("1") }}>Session</button>
                    <button className={`${timetype ===  "2" ? "activetimertype" : "timertypebtn"}`} onClick={() => { changeTimer("2") }}>Break</button>
                    <button className={`${timetype ===  "3" ? "activetimertype" : "timertypebtn"}`} onClick={() => { changeTimer("3") }}>Long Break</button>
                </div>

                <>
                    <Timer timertype={ timetype }/>
                </>
            </div>

            <>
                <Tasks/>
                <Tasks/>
            </>
        </div>
    )
}

export default MainPage;