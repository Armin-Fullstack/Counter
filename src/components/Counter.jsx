import IncreaseButton from "./IncreaseButton"

const Counter = () => {
    return (
        <>
        
        <div className="flex flex-col justify-center items-center">

            <div className="flex justify-center items-center rounded-full text-6xl text-white font-bold
             w-[120px] h-[120px] bg-[#2c2c2c]">0</div>
            <div className="flex">
                <IncreaseButton/>
                <button>-</button>
            </div>
        </div>
        
        </>
    )
}

export default Counter