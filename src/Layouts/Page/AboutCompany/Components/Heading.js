import PrimaryButton from "../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../Components/SecondaryButton";
function Heading() {
    return (
        <div className='d-flex flex-row justify-content-around mt-5 '>
            <h1 className='large-title col-6'>Данные о компании</h1>
            <SecondaryButton>Закрыть запись</SecondaryButton>
        </div>
    );
}

export default Heading;