import { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom'
import React from 'react';
import axios from 'axios';
import Card from './Card';
import './Home.css'

function Home() {
    const [apiData, setApiData] = useState({});
    const [cards, setCards] = useState('');
    const history = useHistory();
    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true')
            .then(res => {
                setApiData(res);
                if (window.location.search) {
                    handleParams(res)

                }
                else {
                    setCards(res.data.map((item) => { return <Card key={item.flight_number} data={item} /> }));
                }

                document.getElementById('loader').style.display = 'none'


            })
            .catch(err => {
                console.log(err);
                setCards('');
                setApiData({});
            })
    }, []);

    async function handleParams(res) {
        let urlParams = new URLSearchParams(window.location.search);
        let year = urlParams.get('year');
        let launchStatus = urlParams.get('launch');
        let landingStatus = urlParams.get('landing');
        let filteredData = '';
        if(year){
            filteredData = res.data.filter(item => item.launch_year == year)
        }
        else if(launchStatus){
            filteredData = res.data.filter((item) => item.launch_success.toString() == launchStatus);
        }
        else if(landingStatus){
            filteredData = res.data.filter((item) => {
                return item.rocket?.first_stage?.cores[0]?.land_success!=null && item.rocket?.first_stage?.cores[0]?.land_success.toString() == landingStatus})
        }

        console.log(filteredData)
       
        if (filteredData.length > 0) {
            setCards(filteredData.map((item) => { return <Card key={item.flight_number} data={item} /> }));
        }
        else {
            history.push('/');
            setCards(res.data.map((item) => { return <Card key={item.flight_number} data={item} /> }));
        }
    }


    function filterYear(year) {
       
        const apiDataTemp = [...apiData.data];
        let filteredData = apiDataTemp.filter(item => item.launch_year == year);
        if(filteredData.length>0){
            history.push({ search: `?year=${year}` });
            setCards(filteredData.map((item) => { return <Card key={Math.random()} data={item} /> }));
        }
        
        console.log(filteredData)
    }


    function filterLaunch(launchStatus) {
       
        const apiDataTemp = [...apiData.data];
        let filteredData = apiDataTemp.filter(item => item.launch_success == launchStatus);
        if(filteredData.length>0){
            history.push({ search: `?launch=${launchStatus}` });
            setCards(filteredData.map((item) => { return <Card key={Math.random()} data={item} /> }));
        }
     
    }


    function filterLanding(landingStatus) {
       
        const apiDataTemp = [...apiData.data];
        let filteredData = apiDataTemp.filter(item => item.rocket?.first_stage?.cores[0]?.land_success == landingStatus)
        if(filteredData.length>0){
            history.push({ search: `?landing=${landingStatus}` });
            setCards(filteredData.map((item) => { return <Card key={Math.random()} data={item} /> }));
        }
       
    }




    return (
        <React.Fragment>
            {cards != '' ? generateDOM(cards, filterYear, filterLaunch, filterLanding) : ''}
        </React.Fragment>
    )
}


function generateDOM(cards, filterYear, filterLaunch, filterLanding) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h1 className="fwb" style={{ fontSize: "2rem" }}>SpaceX Launch Programs</h1>
                </div>
            </div>
            <div className="row">
                <div className="filter col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">

                    <div className="row fs-14 m-0 px-2 py-3">
                        <div className="col-12 pb-4 bg-white br-16">
                            <div className="row fwb" style={{ fontSize: "22px", marginTop: "10px" }}>
                                <div className="col-12"> Filters</div>
                            </div>
                            <div className="row tc"><div className="col-12 fs-18">Launch Year</div></div>
                            <div style={{ marginTop: "-10px" }} className="mx-4"><hr /></div>

                            <div className="row tc py-1">
                                <div className="col-6"><button onClick={() => filterYear(2006)} className="year-btn">2006</button></div>
                                <div className="col-6"> <button onClick={() => filterYear(2007)} className="year-btn">2007</button></div>
                            </div>

                            <div className="row tc py-2">
                                <div className="col-6">  <button onClick={() => filterYear(2008)} className="year-btn">2008</button></div>
                                <div className="col-6">  <button onClick={() => filterYear(2009)} className="year-btn">2009</button></div>
                            </div>

                            <div className="row tc py-2">
                                <div className="col-6">  <button onClick={() => filterYear(2010)} className="year-btn">2010</button></div>
                                <div className="col-6">  <button onClick={() => filterYear(2011)} className="year-btn">2011</button></div></div>

                            <div className="row tc py-2">
                                <div className="col-6">  <button onClick={() => filterYear(2012)} className="year-btn">2012</button></div>
                                <div className="col-6">  <button onClick={() => filterYear(2013)} className="year-btn">2013</button></div></div>

                            <div className="row tc py-2">
                                <div className="col-6">  <button onClick={() => filterYear(2014)} className="year-btn">2014</button></div>
                                <div className="col-6">  <button onClick={() => filterYear(2015)} className="year-btn">2015</button></div></div>

                            <div className="row tc py-2">
                                <div className="col-6">  <button onClick={() => filterYear(2016)} className="year-btn">2016</button></div>
                                <div className="col-6">  <button onClick={() => filterYear(2017)} className="year-btn">2017</button></div></div>

                            <div className="row tc py-2">
                                <div className="col-6">  <button onClick={() => filterYear(2018)} className="year-btn">2018</button></div>
                                <div className="col-6">  <button onClick={() => filterYear(2019)} className="year-btn">2019</button></div></div>

                            <div className="row tc py-2">
                                <div className="col-6">  <button onClick={() => filterYear(2020)} className="year-btn">2020</button></div>
                            </div>

                            <div className="p-2">
                                <div className="row tc">
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-12 tc fs-18">Successful Launch</div></div>
                                        <div style={{ marginTop: "-10px" }} className="mx-4"><hr /></div>
                                        <div className="row">
                                            <div className="col-6"> <button onClick={() => filterLaunch(true)} className="year-btn">True</button></div>
                                            <div className="col-6"> <button onClick={() => filterLaunch(false)} className="year-btn">False</button></div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="p-2">
                                <div className="row tc">
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-12 tc fs-18">Successful Landing</div>
                                        </div>
                                        <div style={{ marginTop: "-10px" }} className="mx-4"><hr /></div>
                                        <div className="row">
                                            <div className="col-6"> <button onClick={() => filterLanding(true)} className="year-btn">True</button></div>
                                            <div className="col-6"> <button onClick={() => filterLanding(false)} className="year-btn">False</button></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-9 col-xl-9 offset-xs-12 offset-sm-12 offset-md-6 offset-lg-3 offset-xl-3">
                    <div className="row">
                        {cards ? cards : ''}
                    </div>
                </div>



            </div>

            <div className="row tc" style={{ fontSize: "24px", paddingBottom: "90px" }}>
                <div id="dev-name" className="col-12" style={{ position: "absolute", bottom: "25px" }}>
                    <b>Developed By:</b> Vaibhav Sharma
                </div>
            </div>
        </div>
    )
}

export default Home;