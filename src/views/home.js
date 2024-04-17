import { html } from '../../node_modules/lit-html/lit-html.js';


const homeTemplate = () => html`
    <section id="hero">
          <img src="./images/home.png" alt="home" />
          <p>We know who you are, we will contact you</p>
        </section>
`;

export function homePage(ctx) {
    ctx.render(homeTemplate());
}