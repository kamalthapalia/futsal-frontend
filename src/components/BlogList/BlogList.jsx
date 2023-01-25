import React from "react";
import style from "./BlogList.module.css";
import { BiLinkExternal } from "react-icons/bi";

function BlogList() {
  return (
    <section className={style.BloglistWrap}>
      <div className={`container `}>
        <div className={style.wrap}>
          <div className="d-flex justify-content-md-between">
            <h3>Read latest news</h3>{" "}
            <h5 className={style.seeall}>
              <BiLinkExternal size={`1.3em`} /> see all
            </h5>
          </div>
          <div className={`${style.cardGroup}`}>
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
                        Read More
                      </div>
                      <div className={style.date}>2022/07/07</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${style["card"]}`}>
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
                        Read More
                      </div>
                      <div className={style.date}>2022/07/07</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogList;
