import React from 'react';

const Calculator = () => {
    return (
        <div className="calc__main-purple">
            <div className="calc__main-purple-wrapper">
                <div className="calc__main-purple-wrapper-header">
                    <div className="title">
                        calc
                    </div>
                    <div className="selector">
                        <span>
                            THEME
                        </span>
                        <div className="buttons-wrap">
                            <div className="numbers">
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                            </div>
                            <div className="buttons">
                                <button>
                                </button>
                                <button>
                                </button>
                                <button>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="calc__main-purple-wrapper-display">
                    <p>
                        999,981
                    </p>
                </div>
                <div className="calc__main-purple-wrapper-body">
                    <div className="row">
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                        <button className="option">DEL</button>
                    </div>
                    <div className="row">
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                        <button>+</button>
                    </div>
                    <div className="row">
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>-</button>
                    </div>
                    <div className="row">
                        <button className="option s-big">RESET</button>
                        <button className="equal">=</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator
