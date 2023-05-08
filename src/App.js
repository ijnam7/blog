/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(["재미있는 농놀", "잠이 온다", "그러게"]);
  let [좋아요, 좋아요변경] = useState(0);
  let posts = "맛있는 육회 비빔밥"

  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0] = "재미있는 수놀"
    글제목변경( newArray );
  }

  function 제목정렬(){
    var newArray = [...글제목];
    newArray.sort();
    글제목변경( newArray );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발자 Blog</div>
      </div>
      <button onClick={ 제목정렬 }>정렬</button>
      <button onClick={ 제목바꾸기 }>제목</button>
      <div className="list">
        <h3> { 글제목[0] } <span onClick={ ()=>{좋아요변경(좋아요+1)} }>💛</span> {좋아요} </h3>
        <p>2월 17일 발행</p>
        <hr/>
        <h3> { 글제목[1] } </h3>
        <p>2월 15일 발행</p>
        <hr/>
        <h3> { 글제목[2] } </h3>
        <p>1월 18일 발행</p>
        <hr/>
      </div>

      <Modal />

    </div>
  );
}

// compnent 문법: html를 한 단어로 쓸 수 있음
// 관리가 편해짐
// 이름 첫글자는 대문자로
// return()안에 있는 건 태그 하나로
function Modal(){
  return (
    <>
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    </>
  )
}

export default App;
