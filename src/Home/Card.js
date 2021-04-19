function Card(){

    return(
        <div className="px-4 py-3">
            <div className="row">
            <div className="col-12 bg-white br-16 fs-14 p-3">
                <div className="row img-center">
                <img style={{height:145}} src={"https://images2.imgbox.com/3d/86/cnu0pan8_o.png"}/>
                </div>
              
                <div className="row fwb py-1">
                    <div className="col-12" style={{color:"blue"}}>DemoSat #2</div>
                </div>
                <div className="row py-1">
                    <div className="col-8 fwb">Mission Ids:</div>
                    <div className="col-8 offset-1 bullet">Mission Ids</div>
                </div>

                <div className="row py-1">
                    <div className="col-6 fwb">Launch Year:</div>
                    <div className="col-6">2009</div>
                </div>

                <div className="row py-1">
                    <div className="col-6 fwb">Successful Launch:</div>
                    <div className="col-6">Launch Success</div>
                </div>

                <div className="row py-1">
                    <div className="col-6 fwb">Successful Landing:</div>
                    <div className="col-6">Launch Landing</div>
                </div>
            </div>
            </div>
  
        </div>
    )
}

export default Card;