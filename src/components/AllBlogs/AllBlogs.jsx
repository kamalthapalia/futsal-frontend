import React, { useState } from "react";
import style from "./AllBlogs.module.css";
import { BiLinkExternal } from "react-icons/bi";
function AllBlogs() {
  const [blogs, setBlogs] = useState([
    {
      title: "welcome to my page",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      date: "2022/06/07",
    },
  ]);

  const no = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <section className={style.section}>
        <div style={{padding:"25px" ,backgroundColor:"#141824"}}></div>
      <div className="container">
        <div className={style.main}>
          {no.map(() => (
            <div className={` ${style["card"]}`}>
              <div className={`row `}>
                <div className="col-md-6">
                  <img
                    className={style.img}
                    src="https://cdn.pixabay.com/photo/2018/02/17/17/50/cute-3160464_960_720.jpg"
                    alt=""
                  />
                </div>
                <div className="col-md-6">
                  <div className={style.content}>
                    <div className={style.title}>This is title</div>
                    <div className={style.desc}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Accusamus quod aliquid, voluptatem cum asperiores maxime
                      nihil fugit dolore fuga ipsam at et, error labore omnis
                      rerum consequatur corrupti, delectus laudantium?
                    </div>
                    <div className={style.more}>
                      <div className={style.readmore}>
                        <BiLinkExternal />
                        <div className={style.readmoree}>Read More</div>
                      </div>
                      <div className={style.date}>2022/07/07</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllBlogs;
