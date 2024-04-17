import { html } from '../../node_modules/lit-html/lit-html.js';
import { createSubmitHandler } from '../utils.js';
import { getById, updateCar } from '../data/cars.js';
import { showError } from '../showError.js';

const editTemplate = (item, onEdit) => html`
    <section id="edit">
          <div class="form form-item">
            <h2>Edit Your Item</h2>
            <form class="edit-form" @submit=${onEdit}>
              <input type="text" name="item" id="item" placeholder="Item" .value=${item.item} />
              <input
                type="text"
                name="imageUrl"
                id="item-image"
                placeholder="Your item Image URL"
                .value=${item.imageUrl}
              />
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price in Euro"
                .value=${item.price}
              />
              <input
                type="text"
                name="availability"
                id="availability"
                placeholder="Availability Information"
                .value=${item.availability}
              />
              <input
                type="text"
                name="type"
                id="type"
                placeholder="Item Type"
                .value=${item.type}
              />
              <textarea
                id="description"
                name="description"
                placeholder="More About The Item"
                rows="10"
                cols="50"
                .value="${item.description}"
              ></textarea>
              <button type="submit">Edit</button>
            </form>
          </div>
        </section>
`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const item = await getById(id);

    ctx.render(editTemplate(item, createSubmitHandler(onEdit)));

    async function onEdit({
        item,
        imageUrl, 
        price, 
        availability,
        type,
        description

    }) {
        if([
            item,
            imageUrl, 
            price, 
            availability,
            type,
            description

        ].some((el) => el == '')
        ) {
            return showError('All fields are required');
        }

        const result = await updateCar(id, {
            item,
            imageUrl, 
            price, 
            availability,
            type,
            description
          
        });

        ctx.page.redirect('/catalog/' + id);
    }
}