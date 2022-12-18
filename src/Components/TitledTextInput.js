import styled from "styled-components";

const Input = styled.input`
    outline: none;
    border-radius: 24px;
    border: 1px solid #E2E8F0;
    background-color: #F8FAFC;
    color: #0F172A;
    padding: 8px 16px;
    gap: 16px;

    &:active {
        
    }
`;

function TitledTextInput({title, def}) {
    const Title = title === undefined ? 
        (<div></div>) : 
        (<div className="caption">{title}</div>);
    return (
        <div className='d-flex flex-column gap-2'>
            {Title}
            <Input  defaultValue={def} ></Input>
        </div>
    );
}

export default TitledTextInput;