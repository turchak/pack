// @flow
import React from 'react';


type State = {
    smallAmount: {
            price: {
                a5: number,
                a4: number,
                a3: number,
                a3plus: number,
                a2: number,
            } | null,
        },
        mediumAmount: {
            price: {
                a5: number,
                a4: number,
                a3: number,
                a3plus: number,
                a2: number,
            } | null,
        };
    } 

type Props = {};

class Calculator extends React.Component<Props, State> {

    state = {
        smallAmount: null,
        mediumAmount: null,
    }

    componentDidMount() {
        //TODO: here request to tariff plan, but not its hardcore
        this.setState({
            smallAmount: {
                price: {
                    a5: 1.05,
                    a4: 1.4,
                    a3: 2,
                    a3plus: 2.5,
                    a2: 3.75
                }
            },
            mediumAmount: {
                price: {
                    a5: 0.95,
                    a4: 1.3,
                    a3: 1.85,
                    a3plus: 2.35,
                    a2: 3.5,
                }
            },
            largeAmount: {
                price: {
                    a5: 0.9,
                    a4: 1.2,
                    a3: 1.7,
                    a3plus: 2.2,
                    a2: 3.25,
                }
            }
        })
    }

    render(): React.Node {
        return (
            <div>
                Calculator
            </div>
        );
    }
}

export default Calculator;