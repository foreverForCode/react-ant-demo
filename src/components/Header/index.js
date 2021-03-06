
import React from 'react';

import {Row, Col} from 'antd';

import './index.less';

import Utils from './../../utils/utils';
import axios from './../../axios/index';

export default class Header extends React.Component{

    state = {};

    componentWillMount() {

        this.setState({

            username : '河畔一角'
        })

        setInterval(()=>{

            let sysTime = Utils.formartDate(new Date());

            this.setState({
                sysTime
            })
        }, 1000)
        this.getWeatherAPIData();

        console.log(axios);
    };

    getWeatherAPIData(){
        let city = '广州';
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res)=>{
            if(res.status == 'success'){
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather,
                    temperature  :data.temperature
                })
            }
        })
    }
    render(){
        let {username, sysTime, dayPictureUrl, weather, temperature} = this.state;

        return(
            <div className="header">

                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎，{username}</span>
                        <a href="#"> 退出 </a>
                    </Col>
                </Row>
                <Row className="breadcrumb">

                    <Col span="4" className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span="20" className="weather">
                        <span className="data">{sysTime}</span>
                        <span className="weather-img">
                            <img src={dayPictureUrl} alt=""/>
                        </span>
                        <span className="weather-detail">{weather}</span>
                        <span>{temperature}</span>
                    </Col>
                </Row>
            </div>
        )
    }
}