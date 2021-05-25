/*eslint-disable*/
import './App.css';
import React, { useState } from 'react';


function App() {
  let [입력값, 입력값변경] = useState("");
  let [누른제목, 누른제목변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [ 따봉, 따봉변경 ] = useState(0);
  let [ 글제목, 글제목변경 ] = useState( ["한 시간 동안 사이클 타기", "삼선교에서 왜가리와 사진 찍기", "귀순이 근황 확인하기"] );
  let [ 다른제목, 다른제목변경 ] = useState( ["디카페인 아이스아메리카노 마시기", "타르코프스키 영화 보기", "까망이 근황 확인하기"] );
  function 제목바꾸기() {
    let newArray = [...글제목];
    newArray[0] = "고트와 한강 산책하기";
    newArray[1] = "부산아지매 국밥 먹기";
    글제목변경( newArray );
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>용헌 blog</div>
      </div>
      <button onClick= { ()=>{ 누른제목변경(0) } } >버튼 1</button>
      <button onClick= { ()=>{ 누른제목변경(1) } } >버튼 2</button>
      <button onClick= { ()=>{ 누른제목변경(2) } } >버튼 3</button>
      <div className="list">
        <h3>{ 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉 + 1) } }>👍🏼</span>{ 따봉 }</h3>
        <p>5월 24일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[1] }</h3>
        <p>5월 25일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[2] }</h3>
        <p>5월 26일 발행</p>
        <hr/>
      </div>

      { 다른제목.map(function(a, i){
        return (
        <div className="list">
          <h3 onClick={ ()=>{ } }>{ a }</h3>
          <p>5월 30일 발행</p>
          <hr/>
        </div>
      )}) }
      <button onClick={ 제목바꾸기 }> 버튼 </button>
      <button onClick={ ()=>{ modal변경(!modal) } }> 모달창 열기 </button>
      <div className="publish">
        <input onChange={ (e) => { 입력값변경(e.target.value) } }></input>
        <button onClick={ ()=>{

          let arrayCopy = [...다른제목];
          arrayCopy.unshift(입력값);
          다른제목변경( arrayCopy );

        } }>저장</button>
      </div>

      {/* <input onChange={ (e) => { 입력값변경(e.target.value) } }></input> */}
      {/* {
        modal === true
        ? <Modal />
        : null
      } */}
      <Modal 전송할글제목={글제목} 전송할누른제목={누른제목}></Modal>
      { 글제목.map(function () {
        return (<div>용헌아 뭐 하니?</div>)
      }) }
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
        <h2>{ props.전송할글제목[props.전송할누른제목] }</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  );
}

export default App;
