import React from 'react';
import './StockPredictionView.css';

class StockPrectionView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            IsOpen: false,
            IsGraphOpen: false,
        }
    }

    handleClick() {
        this.setState({
            IsOpen: !this.state.IsOpen
        });

        if(!this.state.IsOpen) {
            var foreground = document.getElementsByClassName('foreground')[0];
            foreground.style.display = 'none';

            var background = document.getElementsByClassName('background')[0];
            background.style.filter = "blur(0)";
        }
    }

    handleGraphOpen() {

        this.setState({
            IsGraphOpen: !this.state.IsGraphOpen
        });

        var graph = document.getElementsByClassName('graph')[0];

        if(!this.state.IsGraphOpen) {
            graph.style.display = 'block';
        }
        else {
            graph.style.display = 'none';
        }
    }

    render() {

        let graphButtonText;
        if(this.state.IsGraphOpen) {
            graphButtonText = '접기';
        }
        else {
            graphButtonText = '펼치기';
        }

        return (
            <div className='wrapper'>
                <div className='foreground'>
                    <div className='foreground notice'>
                        <p><b>30포인트를 지불하고 주가 예측을 확인하세요!</b></p>
                        <button type='button' onClick={() => this.handleClick()}>포인트 지불</button>
                    </div>
                </div>
                <div className='background'>
                    <p><b>내일 주가 예측 59000원 (▼700  -0.33%)입니다.</b></p>
                    <button type='button' onClick={() => this.handleGraphOpen()}>{graphButtonText}</button>
                    <div className='graph'>
                    </div>
                </div>
            </div>
        );
    }
}

export default StockPrectionView;