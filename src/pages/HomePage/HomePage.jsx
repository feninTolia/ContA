import css from 'pages/HomePage/HomePage.module.css';
import hero_img from 'assets/images/conta-hero.jpg';

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <section className={css.hero}>
        <div className={css.hero__wrapper}>
          <div className={css.hero__content}>
            <h2 className={css.hero__headline}>ContA app</h2>
            {/* <div className={css.flow}> */}
            <p>Access and edit your contacts with the ContA app</p>
            {/* <a href="#" class="c-link">
                Read article
              </a> */}
            {/* </div> */}
          </div>
          <img src={hero_img} alt="hero" className={css.hero_img} />
        </div>
      </section>
      <section>
        ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨ ✨✨✨✨✨✨ ✨✨✨ ✨✨✨ ✨✨👻✨
        ✨👻✨✨🍭✨✨✨ ✨✨✨👻 ✨✨✨✨🎃✨✨✨✨✨ 🕯️✨✨✨ ✨✨✨ ✨✨✨
        ✨✨✨✨✨✨ ✨✨🎃✨ ✨✨✨ ✨✨✨✨✨✨ ✨✨✨✨✨✨✨✨✨✨✨
        ✨✨✨✨✨✨✨✨✨ ✨✨✨ ✨🎃✨✨✨✨✨✨🎃✨✨✨ ✨✨✨🍭 ✨✨🎃✨
        ✨✨✨✨🕯️✨✨ ✨✨✨ ✨👻✨✨ ✨✨✨ ✨✨✨ ✨✨✨ ✨✨✨ ✨✨✨
        ✨✨✨✨✨✨🍭✨✨✨✨✨✨ Welcome page ✨ ✨✨✨🍭✨✨✨ ✨✨✨✨✨✨
        ✨✨✨✨✨🎃✨ ✨✨✨✨✨✨ ✨✨✨ ✨👻✨✨ ✨✨✨ ✨✨�️✨ ✨✨✨
        👻✨✨✨ ✨✨✨✨✨✨ ✨✨✨ ✨✨✨ ✨✨✨ ✨✨✨ ✨✨✨🎃 ✨✨✨
        ✨✨✨✨✨✨ ✨✨✨🕯️✨✨✨ ✨✨✨✨👻✨✨✨✨✨✨🎃✨ ✨✨✨ ✨✨✨
        ✨✨✨ ✨✨✨ ✨✨✨ ✨✨✨✨✨✨ ✨🎃✨✨ ✨✨✨ ✨✨✨ ✨✨✨ ✨✨✨
        ✨✨✨✨✨🕯️✨ ✨✨✨✨✨✨✨✨✨ ✨ ✨✨✨✨✨✨ ✨✨✨ ✨✨✨ ✨✨✨
        ✨✨✨ ✨✨✨ ✨✨✨ ✨✨👻✨ ✨✨✨ ✨✨✨✨✨✨🍭 ✨✨✨�
        ✨✨✨✨✨✨✨✨ ✨✨✨ ✨✨✨ ✨✨✨ ✨✨🎃✨ ✨✨✨ ✨✨✨✨✨✨
        ✨✨✨✨✨🎃✨ ✨✨✨ ✨🕯️✨✨ ✨✨✨✨✨✨ ✨✨✨ ✨✨✨ ✨✨✨✨✨✨
        ✨✨✨ ✨✨✨✨✨✨✨✨ ✨✨✨ ✨✨✨ ✨✨✨ ✨✨✨ ✨✨✨✨✨
        ✨🎃✨✨✨👻✨✨✨✨ ✨✨✨ ✨✨✨ ✨🕯️✨✨ ✨✨✨✨✨✨ ✨✨✨🕯️✨✨✨
        ✨✨✨ ✨✨✨ ✨✨✨ ✨✨🍭✨ ✨✨✨ ✨✨✨ ✨✨✨ 🎃✨✨✨ ✨✨✨✨✨✨
        ✨🕯️✨✨ ✨✨✨✨✨✨✨✨ ✨✨✨ ✨👻✨✨ ✨✨✨✨✨✨ ✨✨✨🎃
        ✨🎃✨✨✨✨✨ ✨✨✨ ✨✨✨ ✨✨✨ ✨✨✨ ✨✨✨ ✨✨✨ ✨🍭✨✨ ✨✨✨
        ✨✨✨✨✨✨ ✨🕯️✨✨ ✨✨👻✨✨✨✨✨✨ ✨✨✨ ✨✨✨ ✨✨✨ 🎃✨✨✨
        ✨✨✨ ✨✨✨✨✨✨ ✨✨✨ ✨✨✨✨✨🍭✨✨🎃✨ ✨✨✨ ✨✨✨✨✨✨
        ✨✨✨ ✨✨✨ ✨✨✨✨✨✨✨✨✨✨✨✨ ✨✨🕯️✨ ✨✨✨ ✨✨✨✨✨🕯️
        ✨✨✨ ✨✨✨👻 ✨✨✨
      </section>
    </div>
  );
};

export default HomePage;
