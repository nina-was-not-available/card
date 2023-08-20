import React from 'react';
import './App.css';
import styled from "styled-components";
import {Button, Menu, SecondButton} from "./components/Buttons";
import {Header, SomeText} from "./components/Text";
import {Bort, Box, Pic} from "./components/Container-and-pic";

function App() {
    return (
        <div className="App">
            <Box>
                <Bort>
                    <Pic src={'https://img.goodfon.ru/original/1920x1080/b/d5/muzyka-skripka-noty.jpg'}/>
                    <Header>If the violin...</Header>
                    <SomeText>always was your favourite musician instrument, I can teach you! </SomeText>
                    <Menu>
                        <ul>
                            <li><Button>See more</Button></li>
                            <li><SecondButton>Call!</SecondButton></li>
                        </ul>
                    </Menu>
                </Bort>
            </Box>
        </div>
    );
}

export default App;



