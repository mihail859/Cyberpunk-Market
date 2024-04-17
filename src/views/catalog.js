import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllCars } from '../data/cars.js';

const catalogTemplate = (cars) => html`
        <h3 class="heading">Market</h3>
    <section id="dashboard">

        ${cars.length > 0
            ? html`
                ${cars.map(carCard)}
            `
            : html`
                <h3 class="empty">No Items Yet</h3>
            `
        }

    </section>
`;

const carCard = (item) => html`
    <div class="item">
            <img src="${item.imageUrl}" alt="example1" />
            <h3 class="model">${item.item}</h3>
            <div class="item-info">
              <p class="price">Price: €${item.price}</p>
              <p class="availability">
               ${item.availability}
              </p>
              <p class="type">Type: ${item.type}</p>
            </div>
            <a class="details-btn" href="/catalog/${item._id}">Uncover More</a>
          </div>
`;

export async function catalogPage(ctx) {
    const cars = await getAllCars();

    ctx.render(catalogTemplate(cars));
}