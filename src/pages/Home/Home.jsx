import React from 'react'
import "./home.css";
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import { Userdata } from '../../DummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
import { useMemo } from "react";

export default function Home() {
    const MONTHS = useMemo(()=> [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],[]
      )
      const [ userStats, setUserStats ] = useState([])
    
      useEffect(()=>{
        const getStats = async()=>{
          try {
            const response = await axios.get("http://localhost:8800/api/users/stats",{
              headers:{
                token:"Nitin eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjM0MGVhMTJmMDU3MmVmNGZhMjYxMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNjM3MTQ0NSwiZXhwIjoxNzA2ODAzNDQ1fQ.-xY6jOqyAkcgMQOCIc-W1u4cjSzyMyCe6_-6Ju-LtAw"
            }
          })
          const statsList = response.data.sort(function(a,b){
            return a._id - b._id;
          })
          setUserStats((prev)=>
          statsList.map((item)=>({
            name:MONTHS[item._id - 1],
            "New User":item.total
          }))
          )
          } catch (error) {
            console.log(error)
          }
        }
        getStats();
      },[MONTHS])
      console.log(userStats)
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
            <div className='homeWidgets'>
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
