import React, { Component } from 'react';
import './App.css';
import UseStateHook from './components/useStateHook';
import UseEffectHook from './components/useEffectHook';
import Count from './components/count';
import ContextParent from './components/contextParent';
import BetterScroll from './components/betterScroll';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            template: 'betterScroll'
        };
    }

    changeTemplate = (template) => {
        this.setState(() => ({
            template
        }));
    };

    renderTemplate() {
        const { template } = this.state;

        switch (template) {
            case 'useState':
                return (
                    <div>
                        <h2>useState</h2>
                        <UseStateHook />
                        <hr />
                        <Count />
                    </div>
                );
            case 'useEffect':
                return (
                    <div>
                        <UseEffectHook />
                    </div>
                );
            case 'contextApi':
                return (
                    <div>
                        <ContextParent />
                    </div>
                );

            case 'betterScroll':
                return (
                    <div>
                        <BetterScroll />
                    </div>
                );
                
            default:
                break;
        }
    }

    render() {
        return (
            <div>
                {this.renderTemplate()}
            </div>
        );
    }

    // render() {
    //     return (
    //         <div className="App">
    //             <header className="App-header">
    //                 <div className="menuList">
    //                     <div
    //                         className="menu"
    //                         onClick={() => {
    //                             this.changeTemplate('contextApi');
    //                         }}
    //                     >
    //                         contextApi
    //                     </div>
    //                     <div
    //                         className="menu"
    //                         onClick={() => {
    //                             this.changeTemplate('useState');
    //                         }}
    //                     >
    //                         useState
    //                     </div>
    //                     <div
    //                         className="menu"
    //                         onClick={() => {
    //                             this.changeTemplate('useEffect');
    //                         }}
    //                     >
    //                         useEffect
    //                     </div>
    //                 </div>
    //                 {this.renderTemplate()}
    //             </header>
    //         </div>
    //     );
    // }
}

export default App;
