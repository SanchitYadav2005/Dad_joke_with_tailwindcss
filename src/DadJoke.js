import React, { Component } from 'react';
import axios from 'axios';

class DadJoke extends Component{
    async componentDidMount(){
        const options = {
            method: 'GET',
            url: 'https://dad-jokes7.p.rapidapi.com/dad-jokes/joke-of-the-day',
            headers: {
              'X-RapidAPI-Key': '8b7adbee44msh21d417677ec0ff0p1b190fjsnf806fcffae7a',
              'X-RapidAPI-Host': 'dad-jokes7.p.rapidapi.com'
            }
          };
        let joke = await axios.request(options,{
            headers: "application/json"
        });
        console.log(joke);
    }
    render(){
        return(
            <div>
                <h1 className="text-zinc-800 text-xs">Hello</h1>
            </div>
        )
    }
}

export default DadJoke;