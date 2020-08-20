import styled from "styled-components";
import Container from "../shared/Container";

const TrailerStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba($main-dark, 0.7);
    display: grid;
    place-items: center;

    opacity: 0;
    pointer-events: none;
    z-index: 999;
    &__container {
        width: 80%;
        height: 80vh;
        border-radius: 1rem;
        display: grid;
        place-items: center;

        .noTrailer {
            display: grid;
            place-items: center;
            width: 100%;
            height: 100%;
            text-align: center;
            margin: 0;
            background-color: $main-mid;
        }
    }

    &__video {
        width: 100%;
        height: 100%;
        border-radius: 1rem;
    }

    &__btn {
        .icon {
            width: 2.5rem;
            height: 2.5rem;
        }

        position: absolute;
        top: 2rem;
        right: 2rem;
    }
`;

const TrailerContainer = styled(Container)`
    width: 80%;
    height: 80vh;
    border-radius: 1rem;
    display: grid;
    place-items: center;
`;
