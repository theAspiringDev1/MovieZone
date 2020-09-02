import styled from "styled-components";
import button from "components/shared/Button";
import container from "components/shared/Container";

export const ChoiceHolder = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
export const Container = styled(container)`
    padding: 2rem 0;
`;

const Button = styled(button)`
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: bold;
    border: 1px solid var(--main-color);
    border-radius: 0;
    outline:none;

    &:hover {
        transform: unset;
        background: var(--main-color);
        color: white;
    }
`;

const pink = "var(--main-color)";
const dark = "var(--main-dark)";

export const MovieBtn = styled(Button)`
    background: ${({ current }) => (current === "movie" ? pink : dark)};
    color: ${({ current }) => (current === "movie" ? "white" : pink)};
`;

export const TVBtn = styled(Button)`
    background: ${({ current }) => (current === "tv" ? pink : dark)};
    color: ${({ current }) => (current === "tv" ? "white" : pink)};
`;
