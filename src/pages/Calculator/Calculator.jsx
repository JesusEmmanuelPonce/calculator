import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeTheme } from '../../store/actions/CalculatorActions';

const Calculator = ({ theme, changeTheme }) => {

    console.log(theme);

    return (
        <div className={`calc__main-${theme}`}>
            <div className={`calc__main-${theme}-wrapper`}>
                <div className={`calc__main-${theme}-wrapper-header`}>
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
                                <button
                                    onClick={() => changeTheme("dark")}
                                />
                                <button
                                    onClick={() => changeTheme("light")}
                                />
                                <button
                                    onClick={() => changeTheme("purple")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`calc__main-${theme}-wrapper-display`}>
                    <input
                        type="text"
                    />
                </div>
                <div className={`calc__main-${theme}-wrapper-body`}>
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

const mapStateToProps = ({ calculator }) => ({
    theme: calculator?.theme ?? "",
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
        changeTheme,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
