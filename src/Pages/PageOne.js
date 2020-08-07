import React, { Component } from "react";
import styled from "styled-components";
import Webcam from "react-webcam";

const Content = styled.div`
  position: relative;
`;

const CamContainerOne = styled.div`
  overflow: hidden;
  width: 320px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const CamComponentOne = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  margin: 20px;
`;

const CamComponentTwo = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 20px;
`;

const Btn = styled.button`
  background: darkgreen;
  border: none;
  margin: 20px 0;
  height: 40px;
  width: 50%;

  cursor: pointer;
`;

const CamContainerTwo = styled.div`
  overflow: hidden;
  width: 320px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const EmptySlot = styled.div`
  width: 320px;
  height: 200px;
  background: #191919;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default class PageOne extends Component {
  constructor(props) {
    super();

    this.onJoinOne = this.onJoinOne.bind(this);
    this.onJoinTwo = this.onJoinTwo.bind(this);

    this.state = {
      slotOne: false,
      slotTwo: false,
    };
  }

  onJoinOne(e) {
    this.setState({
      slotOne: !this.state.slotOne,
    });
  }

  onJoinTwo(e) {
    this.setState({
      slotTwo: !this.state.slotTwo,
    });
  }

  render() {
    return (
      <div>
        <div>Your DnD adventure</div>
        <Content>
          <CamComponentOne>
            <CamContainerOne>
              {this.state.slotOne === true ? (
                <Webcam audio={true} width={320} />
              ) : (
                <EmptySlot>Join In !!!</EmptySlot>
              )}
            </CamContainerOne>
            <Btn onClick={this.onJoinOne}>
              {this.state.slotOne === true ? (
                <p>Leave slot</p>
              ) : (
                <p>Join Here</p>
              )}
            </Btn>
          </CamComponentOne>
          <CamComponentTwo>
            <CamContainerTwo>
              {this.state.slotTwo === true ? (
                <Webcam audio={true} width={320} />
              ) : (
                <EmptySlot>Join In !!!</EmptySlot>
              )}
            </CamContainerTwo>
            <Btn onClick={this.onJoinTwo}>
              {this.state.slotTwo === true ? (
                <p>Leave slot</p>
              ) : (
                <p>Join Here</p>
              )}
            </Btn>
          </CamComponentTwo>
        </Content>
      </div>
    );
  }
}
