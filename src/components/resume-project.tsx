import {useState} from "react";
import {styled} from "styled-components";

function useCalculator() {
    const [result, setResult] = useState<number | null>(null);

    const add = (a: number, b: number) => setResult(a + b);
    const sub = (a: number, b: number) => setResult(a - b);
    const mul = (a: number, b: number) => setResult(a * b);
    const div = (a: number, b: number) => setResult(a / b);
    const pow = (a: number, b: number) => setResult((a ** b));
    const clear = () => setResult(null);

    return { result, add, sub, mul, div, pow, clear };
}

const StyledMain = styled.main`
    background-color: #F2F1EB;
    padding:2%;
    width:70%;
    justify-content: space-around;

    @media screen and (max-width: 750px) {
        padding: 2%;
        width: 100%;
        height:100vh;
        box-sizing: border-box;
        align-items: center;
        overflow: hidden;
    }
    
`;

const InputContainer = styled.div`
    display: block;
    text-align: center;
    margin: 2%;
`;

const InputWrapper = styled.div`
    margin: 1%;
`;

const StyledInput = styled.input`
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 1.88%;
    width: 40%;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
`;

const StyledButton = styled.button`
    margin: 1.2%;
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 12px;
    width: 13%;
    height: 6%;
    font-size: calc(7px + 1vw);
    background-color: rgba(46, 114, 57, 0.37);

    &:hover {
        background-color: rgba(120, 154, 125, 0.78);
    }
`;

const Result = styled.h2`
    display: flex;
    justify-content: center;
    color: ${({ isNegative }: { isNegative?: boolean }) => (isNegative ? 'red' : 'black')};
    margin-top: 20px;
`;


export default function Calculator() {
    const [input1, setInput1] = useState<number>(0);
    const [input2, setInput2] = useState<number>(0);
    const { result, add, sub, mul, div, pow, clear } = useCalculator();

    const numClear = () => {
        setInput1(0);
        setInput2(0);
        clear();
    };

    return (
        <StyledMain>
            <h2>Freddie's Calculator</h2>
            <h4>Two number math calculator</h4>
            <InputContainer>
                <InputWrapper>
                    <StyledInput
                        type="number"
                        value={input1}
                        onChange={(e) => setInput1(Number(e.target.value))}
                    />
                </InputWrapper>

                <InputWrapper>
                    <StyledInput
                        type="number"
                        value={input2}
                        onChange={(e) => setInput2(Number(e.target.value))}
                    />
                </InputWrapper>
            </InputContainer>

            <ButtonContainer>
                <StyledButton onClick={() => add(input1, input2)}>+</StyledButton>
                <StyledButton onClick={() => sub(input1, input2)}>-</StyledButton>
                <StyledButton onClick={() => mul(input1, input2)}>*</StyledButton>
                <StyledButton onClick={() => div(input1, input2)}>/</StyledButton>
                <StyledButton onClick={() => pow(input1, input2)}>^</StyledButton>
                <StyledButton onClick={numClear}>Clear</StyledButton>
            </ButtonContainer>

            <Result isNegative={result !== null && result < 0}>
                {result !== null ? result: ''}
            </Result>
        </StyledMain>
    );
}