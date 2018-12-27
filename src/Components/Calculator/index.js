import React from 'react';
import * as Prices from '../../Storage/prices.json'



class Calculator extends React.Component {

    state= {
        a5: null,
        a4: null,
        a3: null,
        a3plus: null,
        a2: null,
    }

    componentDidMount() {
        //TODO: here request to tariff plan, but not its hardcore
        const json = {
            "a5": [ 1.05, 0.95, 0.9 ],
            "a4": [ 1.4, 1.3, 1.2 ],
            "a3": [ 2, 1.85, 1.7 ],
            "a3plus": [ 2.5, 2.35, 2.2 ],
            "a2": [ 3.75, 3.5, 3.25 ]
        }
        this.setState({
            a5: json.a5,
            a4: json.a4,
            a3: json.a3,
            a3plus: json.a3plus,
            a2: json.a2,
        })
        
    }

    render() {
        const { a5, a4, a3, a3plus, a2 } = this.state;
        if ( !a5 || !a4 || !a3 || !a3plus || !a2 ) {
            return null;
        }
        return (
            <div>
                <ul>
                    {a5.map(val => {
                        return <li key={val}>{val}</li>
                    })}
                    {a4.map(val => {
                        return <li key={val}>{val}</li>
                    })}
                    {a3.map(val => {
                        return <li key={val}>{val}</li>
                    })}
                    {a3plus.map(val => {
                        return <li key={val}>{val}</li>
                    })}
                    {a2.map(val => {
                        return <li key={val}>{val}</li>
                    })}
                </ul>
            </div>
        );
        
    }
}

export default Calculator;