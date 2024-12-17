import React from "react";
import "./FAQ.css";
const nqs = [
  {
    n: " 넷플릭스에서 어떤 콘텐츠를 시청할수 있나요?",
    q: "lorem",
  },
  {
    n: " 넷플릭스에서 어떤 콘텐츠를 시청할수 있나요?",
  },
  {
    n: " 넷플릭스에서 어떤 콘텐츠를 시청할수 있나요?",
  },
  {
    n: " 넷플릭스에서 어떤 콘텐츠를 시청할수 있나요?",
  },
  {
    n: " 넷플릭스에서 어떤 콘텐츠를 시청할수 있나요?",
  },
  {
    n: " 넷플릭스에서 어떤 콘텐츠를 시청할수 있나요?",
  },
];
const FAQ = () => {
  return (
    <div id="fa">
      <h3>자주 묻는 질문</h3>
      {/* <ul>
        <li>
          <button>
            넷플릭스에서 어떤 콘텐츠를 시청할수 있나요?<span>+</span>
          </button>
        </li>
        <li>
          <button>
            넷플릭스에서 어떤 콘텐츠를 시청할수 있나요?<span>+</span>
          </button>
        </li>
        <li>
          <button>
            넷플릭스에서 어떤 콘텐츠를 시청할수 있나요?<span>+</span>
          </button>
        </li>
        <li>
          <button>
            넷플릭스에서 어떤 콘텐츠를 시청할수 있나요?<span>+</span>
          </button>
        </li>
        <li>
          <button>
            넷플릭스에서 어떤 콘텐츠를 시청할수 있나요?<span>+</span>
          </button>
        </li>
        <li>
          <button>
            넷플릭스에서 어떤 콘텐츠를 시청할수 있나요?<span>+</span>
          </button>
        </li>
      </ul> */}
      <ul>
        {nqs.map((n, i) => {
          return (
            <li key={i}>
              <button>{n.n}</button>
              {n.q && (
                <div>
                  <p>{n.q}</p>
                  <a href="">ttt</a>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FAQ;
