function Card(props) {
let cardData = {...props.data};
let land_success = cardData.rocket?.first_stage?.cores[0]?.land_success == true?true:false;
let missionIds = cardData.mission_id.map((item,index)=>{
    return <li key={`missionId${index}`}>{item.toString()}</li>});
    return (

        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
            <div className="px-3 py-3  ">
                <div className="row">
                    <div className="col-12 bg-white br-16 fs-14 p-3">
                        <div className="row img-center">
                            <img className="mission-img" src={cardData.links.mission_patch_small} />
                        </div>

                        <div className="row fwb py-1">
                            <div className="col-12 clr-darkblue">{cardData.mission_name}</div>
                        </div>
                        <div className="row pt-1">
                            <div style={{display:"block"}} className="col-12 fwb">Mission Ids:</div>
                            <div style={{display:"block"}}  className="clr-blue">
                                <ul>
                                    {missionIds}
                                </ul>
                            </div>
                        </div>

                        <div className="row pt-1">
                            <div className="col-6 fwb">Launch Year:</div>
                            <div className="col-6 clr-blue">{cardData.launch_year}</div>
                        </div>

                        <div className="row py-1">
                            <div className="col-6 fwb">Successful Launch:</div>
                            <div className="col-6 clr-blue">{cardData.launch_success.toString()}</div>
                        </div>

                        <div className="row py-1">
                            <div className="col-6 fwb">Successful Landing:</div>
                            <div className="col-6 clr-blue" >
                            {land_success.toString()}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Card;