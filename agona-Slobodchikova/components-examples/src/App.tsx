import React, {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';


class ClassComponent extends Component<any, any> {
    state = {
        action: 'поставь'
    }
    handleChecked = () => {
        const {action} = this.state;
        if (action === 'поставь') {
            this.setState({action: 'убери'})
        } else {
            this.setState({action: 'поставь'})
        }
    }

    render() {
        const {action} = this.state;
        return (
            <div className="yo">
                <p className="head-text">Пример классового компонента</p>
                <div className="checkbox-block">
                    <input className="CCinput" type="checkbox" onClick={this.handleChecked}/>
                    <div className="action-text">Привет, {action} галочку</div>
                </div>
            </div>
        )
    }
}

const FunctionComponent = () => {
    const elem = document.getElementById('funcBlock') as HTMLElement;
    const [color, setColor] = useState('#000000');

    const handleButtonClick = () => {
        if (color === '#ff99ef') {
            setColor('#7d8bfc');
        } else {
            setColor('#ff99ef');
        }
    }
    if (color === '#000000') {
        return (
            <div id="funcBlock">
                <p className="head-text">Пример функционального компонента</p>
                <button className="FCbutton" onClick={handleButtonClick}>Раскрасить</button>

            </div>
        )
    } else {
        elem.style.backgroundColor = color;
        return (
            <div id="funcBlock">
                <p className="head-text">Пример функционального компонента</p>
                <button className="FCbutton" onClick={handleButtonClick}>Сменить цвет</button>
            </div>
        )
    }
}
const App = () => {
    return (
        <div>
            <div>
                <FunctionComponent/>
            </div>
            <ClassComponent></ClassComponent>
        </div>
    );
}

export default App;
