import { useState } from "react"
import DecreaseButton from "./DecreaseButton"
import IncreaseButton from "./IncreaseButton"

const Counter = () => {

    const [number , setNumber] = useState(0)

    const onIncreaseHandler = () => {
        
        setNumber(number + 1)
    }

    const onDecreaseHandler = () => {

        setNumber(number - 1)
    }

    return (
        <>
        
        <div className="card flex flex-col justify-center items-center space-y-8">

            <div className="flex justify-center items-center rounded-full text-6xl text-white font-bold
             w-[120px] h-[120px] bg-[#2c2c2c]">{number}</div>
            <div className="flex space-x-20">
                <IncreaseButton onIncreaseHandler={onIncreaseHandler}/>
                <DecreaseButton onDecreaseHandler={onDecreaseHandler}/>
            </div>
        </div>
        
        </>
    )
}

export default Counter