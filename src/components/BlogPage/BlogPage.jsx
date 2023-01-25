import React from "react";
import style from "./BlogPage.module.css";

function BlogPage() {
  return (
    <section className={style.section}>
      <div className="container">
        <div className={style.main}>
          <div className="row">
            <div className="col-md-6">
              <div className={style.title}>Man I love Football</div>
            </div>
            <div className="col-md-6">
              <div className={style.image}>
                <img
                className={style.thumbnail}
                  src="https://www.pixelstalk.net/wp-content/uploads/images5/Kylian-Mbappe%CC%81-HD-Wallpaper.jpg"
                  alt="mbappe bick"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogPage;
