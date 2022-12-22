import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '144px' : props.minWidth;
    const Button = styled.div`
        background: #FFFFFF;
        min-width: 217px;
        border: 1px solid #64748B;
        border-radius: 24px;
        
        color: #64748B;
        &:hover {
            opacity: 0.8;
            border: 1px solid #FFFFFF;
        }
        &:active {
            opacity: 0.6;
            border: 1px solid #FFFFFF;
        }
    `;
    return (
        <Clickable >
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;