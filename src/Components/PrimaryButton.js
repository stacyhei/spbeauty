import Clickable from "./Clickable";
import styled from "styled-components";



function PrimaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '144px' : props.minWidth; 
    const Button = styled.div`

        background: #3B82F6;
        border-radius: 24px;
        
        min-width: 217px;
        height: 34px;
        left: 8px;
        top: 8px;

        color: white;
        &:hover {
            background: #3B82F6;
            opacity: 0.8;
        }
        &:active {
            background: #0F172A;
        }
    `;
    return (
        <Clickable>
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default PrimaryButton;