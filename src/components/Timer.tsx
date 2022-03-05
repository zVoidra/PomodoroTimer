
import { useEffect, useLayoutEffect, useState } from "react";

export default function Timer(props:any) {

    const [ minute, setMinute ] = useState(0)
    const [ seconds, setSeconds ] = useState(0)
    const [ timeron, setTimeron] = useState(false)
    const [ buttontext, setButtontext ] = useState("Start")
    const [ timertype, setTimetype ] = useState("1")

    // Constructor
    useLayoutEffect(() => {
        if(props.timertype !== undefined)
            setTimetype(props.timertype)
    }, [props.timertype])

    useEffect(() => {
        ResetTimer()
    }, [timertype])

    function ResetTimer() {
        setTimeron(false)

        switch (timertype) {
            case "1":
                setMinute(40)
                break;
            case "2":
                setMinute(10)
                break;
            case "3":
                setMinute(15)
                break;
            default:
                setMinute(40)
        }
        
        setSeconds(0)
        setButtontext("Start")
    }

    function TimerHandle(buttonState:String) {
        
        if (buttonState === "Start") {
            setTimeron(true)
            setButtontext("Stop")
            return
        }

        if (buttonState === "Stop") {
            setTimeron(false)
            setButtontext("Start")
            return
        }

        if (buttonState === "Reset") {
            ResetTimer()
            return
        }
    }

    function End() {
        setTimeron(false) 
        setButtontext("Reset")
        alert("Timer Finished")
    }

    function decreaseHour() {
        if (minute == 0 ) { 
            End()
            return false
        }
        
        setMinute(minute - 1)
        return true
    }

    function Logseconds() {
        if (seconds == 0) {
            if(minute == 0) { return "0" }
            return "00";
        }
        return( seconds )
    }

    useEffect(() => 
    {
        let Interval1:number
        if (timeron) {

            if (seconds === 0) { 
                var limit = decreaseHour() 
                if (limit !== false) { setSeconds(59) }
            } else {
                Interval1 = setInterval(() => {
                    setSeconds(seconds - 1)
                }, 1)
            }
        }
        return () => clearInterval(Interval1)
    }, [timeron, seconds])

    return(
        <div className="flex flex-col">
            <div className="flex flex-row justify-center text-[5em]">
                <span className="timertext">
                    { minute }
                </span>
                <span> : </span>
                <span className="timertext">
                    { Logseconds() }
                </span>
            </div>


            {/* <span className="timertext">{ minute } : { Logseconds() } </span> */}

            <button className={`${timeron ? "activetimerbtn" : "timerbtn"}`} 
            id="startstop" onClick={() => TimerHandle(buttontext)}> { buttontext } </button>
        </div>
    )
}
