import DecreaseButton from "./DecreaseButton"
import IncreaseButton from "./IncreaseButton"

const Counter = () => {
    return (
        <>
        
        <div className="card flex flex-col justify-center items-center space-y-8">

            <div className="flex justify-center items-center rounded-full text-6xl text-white font-bold
             w-[120px] h-[120px] bg-[#2c2c2c]">0</div>
            <div className="flex space-x-20">
                <IncreaseButton/>
                <DecreaseButton/>
            </div>
        </div>
        
        </>
    )
}

export default Counter