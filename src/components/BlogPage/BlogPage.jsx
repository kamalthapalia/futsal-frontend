import React from "react";
import BlogList from "../BlogList/BlogList";
import style from "./BlogPage.module.css";

function BlogPage() {
  return (
    <React.Fragment>
    <section className={style.section}>
      <div className="container">
        <div className={style.main}>
          <div className={style.title}>this is the title</div>
          <div className={style.image}>
            <img
              src="https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          <div className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptas voluptatum facere, exercitationem quasi officiis assumenda ratione corrupti harum recusandae quo omnis! Voluptas cumque blanditiis itaque rem ipsa delectus fuga?Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maiores consequatur debitis quod nostrum modi architecto soluta dolorum impedit totam vero sed nam, quia laborum, ratione fugiat expedita at quos?
          </div>
          <div className={style.footer}>
          </div>
        </div>
      </div>
    </section>
            <BlogList />
    </React.Fragment>
  );
}

export default BlogPage;
