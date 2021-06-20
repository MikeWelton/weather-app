import { ButtonWrapper } from './ButtonWrapper';

export const Button = ({ name, onClick }) => {
    return (
        <ButtonWrapper onClick={onClick}>
            {name}
        </ButtonWrapper>
    );
}