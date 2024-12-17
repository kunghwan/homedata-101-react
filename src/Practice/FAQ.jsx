import React from "react";
import "./FAQ.css";
const nqs = [
  {
    q: "넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?",
    a: "lorem",
  },
  {
    q: "넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?",
  },
  {
    q: "넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?",
  },
  {
    q: "넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?",
  },
  {
    q: "넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?",
  },
  {
    q: "넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?",
  },
];

const FAQ = () => {
  return (
    <div className="fa">
      <h3>자주 묻는 질문</h3>
      {/* <ul>
        <li>
          <button>
            넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?<span>+</span>
          </button>
        </li>
        <div>
          <p className="faq">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est dolore
            nulla aspernatur id impedit explicabo ab molestias dolores, soluta
            non, ratione unde, laudantium sed at rem iure aperiam dolorem
            ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Architecto vitae possimus, quisquam vero atque quas aspernatur
            maiores, excepturi eos voluptates deleniti quae necessitatibus quod
            reiciendis, asperiores distinctio mollitia molestias repellendus.
            <a href="">fsdfsdfsdfsdfd</a>
          </p>
        </div>
        <li>
          <button>
            넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?<span>+</span>
          </button>
        </li>
        <li>
          <button>
            넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?<span>+</span>
          </button>
        </li>
        <li>
          <button>
            넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?<span>+</span>
          </button>
        </li>
        <li>
          <button>
            넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?<span>+</span>
          </button>
        </li>
        <li>
          <button>
            넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?<span>+</span>
          </button>
        </li>
      </ul> */}
      <ul>
        {nqs.map((q, i) => {
          return (
            <li>
              <button key={i}>
                {q.q}
                <span>+</span>
              </button>

              {q.a && (
                <div>
                  <p>{q.a}</p>
                  <a href="">ㄱㄱㅅ</a>
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
