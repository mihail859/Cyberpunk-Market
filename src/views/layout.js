import { html } from '../../node_modules/lit-html/lit-html.js';

// TODO replace with actual layout
export const layoutTemplate = (userData, content) => html`
    <header>
    <!-- Navigation -->
    <a id="logo" href="/"
          ><img id="logo" src="./images/logo.png" alt="img"
        /></a>
    <nav>
        <div>
        <div>
            <a href="/catalog">Market</a>
          </div>
        </div>

        ${userData
            ? html`
                <div class="user">
                    <a href="/create">Sell</a>
                    <a href="/logout">Logout</a>
                </div>
            `
            : html`
                <div class="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
            `
        }

    </nav>
    </header>

<main id="main-element">
    ${content}
</main>
`;