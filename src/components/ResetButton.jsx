const ResetButton = ({onResetHandler}) => {
    return (

       <button onClick={onResetHandler} className="absolute top-4 right-4">
        <img src="../public/Images/EpRefreshLeft.svg" alt="" />
       </button>

    )
}

export default ResetButton;