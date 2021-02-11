function LikeButton() {
  // React 변수는 react.development.js 파일이 실행될 때 전역변수로 노출됨
  // useState 함수는 컴포넌트 상태값을 추가할 때 사용
  // LikeButton에 liked 값을 추가했다
  const [liked, setLiked] = React.useState(false);
  const text = liked ? '좋아요 취소' : '좋아요';
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => setLiked(!liked)
  }, text); // // createElement : 리액트를 반환
  // return React.createElement(
  //     'button',                           // html에 해당 태그 생성
  //     { onClick: () => setLiked(!liked) },
  //         text,                           // button의 Childeren으로 text 생성
  // )
}

function Container() {
  const [count, setCount] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LikeButton, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "\uD604\uC7AC \uCE74\uC6B4\uD2B8 : "), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 10
    }
  }, count), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count + 1)
  }, "\uC99D\uAC00"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count - 1)
  }, "\uAC10\uC18C")));
}

const domContainer = document.getElementById('root');
ReactDOM.render(React.createElement(Container), domContainer);
/*
const domContainer = document.getElementById('root');
ReactDOM.render(React.createElement(LikeButton), domContainer);


const domContainer1 = document.getElementById('root1');
ReactDOM.render(React.createElement(LikeButton), domContainer1);
const domContainer2 = document.getElementById('root2');
ReactDOM.render(React.createElement(LikeButton), domContainer2);
const domContainer3 = document.getElementById('root3');
ReactDOM.render(React.createElement(LikeButton), domContainer3);

const domContainer4 = document.getElementById('root4');
ReactDOM.render(
    React.createElement(
        'div',
        null,
        React.createElement(LikeButton),
        React.createElement(LikeButton),
        React.createElement(LikeButton),
    ),
    domContainer4,
);

/* html -> js(React.createElement)
<div>
    <p>hello</p>
    <p>world</p>
</div>

React.createElement('div', null,
React.createElement('p', null, 'hello'),
React.createElement('div', null, 'world'),
)
*/