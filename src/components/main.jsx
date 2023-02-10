import '../styles/main.css'
import styled from 'styled-components'
import moduleStyle from '../styles/style.module.css'

const Main = (props) => {

    let headers = {
        padding: "12 px",
        color: "red",
        font: "consolas"
    }

    const mainColor = "#00FAAA"

    const setTranstitionTime = time => `all ${time} ease-in-out`;

    const MainH3 = styled.h3`
        padding: 20 px;
        text-align: center;
        color: ${mainColor};
        transition: ${props => props?.time ? setTranstitionTime(props.time) : setTranstitionTime("0.2s")};

        &:hover {
            color: #0000FF;
        }
    `;


    return(
        <>
            <h1 style={headers}>{props.title}</h1>
            <section className='header'>
                <h2>This is a H2</h2>
                <MainH3>Just a H3</MainH3>
                <h4 className={moduleStyle.red}>This is not a H2</h4>
            </section>
            <MainH3 time="1s">Another a H3</MainH3>
        </>
    )
}

export default Main