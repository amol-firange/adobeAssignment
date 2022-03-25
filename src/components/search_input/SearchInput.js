//library import
import React, { useEffect, useState} from 'react';
//component import
import Cards from '../searchCards/Cards';
//css
import './search.scss'

export default function SearchInput() {
    let [data, setData] = useState([]);
    let [searchInputVal, setSearchInputVal] = useState('photoshop');
    const [timeLeft, setTimeLeft] = useState(30);
    useEffect(() => {
        fetchApi();
    }, [])
    useEffect(() => {
        if(timeLeft === 0 ) {
            setData([]);
            fetchApi();
            setTimeLeft(30);
        }
        const intervalId = setInterval(() => {
          setTimeLeft((t) => t - 1);
        }, 1000);
        return () => clearInterval(intervalId);
        
      }, [timeLeft]);
    const fetchApi = () => {
        let url = "https://aravindtwitter.herokuapp.com/twittersearch?key="+ searchInputVal
        fetch(`${url}`).then(resp => {
            resp.json().then((res) => {
                let getUserData = res.statuses.map((val)=> console.log("I am user" + val))
                let finalData = res.statuses ? res.statuses: []
                setData(finalData);
                console.log(finalData);
            })
        })
    }
    const changeHandler = (e) => {
        setSearchInputVal(e.target.value)
    }

    return (
        <>
            <div className='header'>
                <ul>
                    <li>Search @ Twitter</li>
                    <li>Auto refresh in {timeLeft} seconds</li>
                </ul>
            </div>
            <div className='input-wrapper'>
                <input type="text" placeholder='Please search here...' onChange={changeHandler} value={searchInputVal} />
                <button className='primary-btn' onClick={fetchApi}>SEARCH</button>
            </div>
            <div className='card-wrapper'>
                
            {data.map((item, i) => {
                    return (
                        <Cards {...item}  key={i+1} />
                    )
                })}
                {data.length ==0 ? <p>No record found</p>: null}
            </div>
        </>


    )
}
