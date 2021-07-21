import React, {
    useState,
    useRef,
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeTheme } from '../../store/actions/CalculatorActions';

const Calculator = ({ theme, changeTheme }) => {

    const inputRef = useRef();

    const [amount, setAmount] = useState("");

    const changeCalc = ({ target: { value } }) => {
        setAmount(value);
        inputRef.current.focus();
    };

    const handleKey = key => {
        setAmount(prevState => (prevState + key))
        inputRef.current.focus();
    }

    const handleReset = () => {
        setAmount("");
    }

    const handleDel = () => {
        setAmount(prevState => {
            return prevState.slice(0, -1)
        })
    }

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
                                    className={theme === "dark" ? "selected" : "no-selected"}
                                />
                                <button
                                    onClick={() => changeTheme("light")}
                                    className={theme === "light" ? "selected" : "no-selected"}
                                />
                                <button
                                    onClick={() => changeTheme("purple")}
                                    className={theme === "purple" ? "selected" : "no-selected"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`calc__main-${theme}-wrapper-display`}>
                    <input
                        autoFocus
                        placeholder="0"
                        autoComplete="off"
                        type="number"
                        name="amount"
                        onChange={changeCalc}
                        value={amount}
                        ref={inputRef}
                    />
                </div>
                <div className={`calc__main-${theme}-wrapper-body`}>
                    <div className="row">
                        <button
                            onClick={() => handleKey("7")}
                        >7</button>
                        <button
                            onClick={() => handleKey("8")}
                        >8</button>
                        <button
                            onClick={() => handleKey("9")}
                        >9</button>
                        <button 
                            className="option"
                            onClick={handleDel}
                        >DEL</button>
                    </div>
                    <div className="row">
                        <button
                            onClick={() => handleKey("4")}
                        >4</button>
                        <button
                            onClick={() => handleKey("5")}
                        >5</button>
                        <button
                            onClick={() => handleKey("6")}
                        >6</button>
                        <button>+</button>
                    </div>
                    <div className="row">
                        <button
                            onClick={() => handleKey("1")}
                        >1</button>
                        <button
                            onClick={() => handleKey("2")}
                        >2</button>
                        <button
                            onClick={() => handleKey("3")}
                        >3</button>
                        <button>-</button>
                    </div>
                    <div className="row">
                        <button
                            className="option s-big"
                            onClick={handleReset}
                        >RESET</button>
                        <button className="equal
                        
                        const handleDel = () => {

                        }">=</button>
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
