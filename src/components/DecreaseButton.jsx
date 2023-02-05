
const DecreaseButton = ({onDecreaseHandler}) => {
    return (

       <button onClick={onDecreaseHandler} className="w-[50px] h-[100px] text-white bg-red-600
       text-5xl rounded-b-xl font-bold">-</button>

    )
}

export default DecreaseButton;