import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import Card from './Card';
import './Home.css'

function Home() {
    // const [data, setData] = useState({});
    const [cards, setCards] = useState('');
    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true')
            .then(res => {
                //setData(res);
                console.log(res);
                setCards(res.data.map((item) => { return <Card key={Math.random()} data={item} /> }))
            })
            .catch(err => {
                console.log(err);
                setCards('');
                //setData({});
            })
    }, [])


    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="fwb" style={{ fontSize: "2rem" }}>SpaceX Launch Programs</h1>
                </div>
            </div>
            <div className="row fs-16 m-0 px-2 py-3">
                <div className="col-12 pb-4 bg-white br-16">
                    <div className="row fwb" style={{ fontSize: "22px", marginTop: "10px" }}>
                        <div className="col-12"> Filters</div>
                    </div>
                    <div className="row tc"><div className="col-12 fs-18">Launch Year</div></div>
                    <div style={{marginTop:"-10px"}} className="mx-4"><hr /></div>
                    
                    <div className="row tc py-1">
                        <div className="col-6">
                            <button className="year-btn">2006</button></div>
                        <div className="col-6">  <button className="year-btn">2007</button></div>
                    </div>

                    <div className="row tc py-2">
                        <div className="col-6">  <button className="year-btn">2008</button></div>
                        <div className="col-6">  <button className="year-btn">2009</button></div>
                    </div>

                    <div className="row tc py-2">
                        <div className="col-6">  <button className="year-btn">2010</button></div>
                        <div className="col-6">  <button className="year-btn">2011</button></div></div>

                    <div className="row tc py-2">
                        <div className="col-6">  <button className="year-btn">2012</button></div>
                        <div className="col-6">  <button className="year-btn">2013</button></div></div>

                    <div className="row tc py-2">
                        <div className="col-6">  <button className="year-btn">2014</button></div>
                        <div className="col-6">  <button className="year-btn">2015</button></div></div>

                    <div className="row tc py-2">
                        <div className="col-6">  <button className="year-btn">2016</button></div>
                        <div className="col-6">  <button className="year-btn">2017</button></div></div>

                    <div className="row tc py-2">
                        <div className="col-6">  <button className="year-btn">2018</button></div>
                        <div className="col-6">  <button className="year-btn">2019</button></div></div>

                    <div className="row tc py-2">
                        <div className="col-6">  <button className="year-btn">2020</button></div>
                    </div>

                    <div className="p-2">
                        <div className="row tc">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-12 tc fs-18">Successful Launch</div></div>
                                    <div  style={{marginTop:"-10px"}} className="mx-4"><hr /></div>
                                <div className="row">
                                    <div className="col-6"> <button className="year-btn">True</button></div>
                                    <div className="col-6"> <button className="year-btn">False</button></div>
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
                                <div style={{marginTop:"-10px"}} className="mx-4"><hr /></div>
                                <div className="row">
                                <div className="col-6"> <button className="year-btn">True</button></div>
                                    <div className="col-6"> <button className="year-btn">False</button></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>





            {cards != '' ? cards : ''}
        </div>
    )
}

export default Home;