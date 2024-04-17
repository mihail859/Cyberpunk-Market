import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserData } from '../utils.js';
import { deleteCar, getById } from '../data/cars.js';

const detailsTemplate = (item, onDelete) => html`
    <section id="details">
          <div id="details-wrapper">
            <div>
              <img id="details-img" src="${item.imageUrl}" alt="example1" />
              <p id="details-title">${item.item}</p>
            </div>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="details-price">Price: €${item.price}</p>
                <p class="details-availability">
                  ${item.availability}
                </p>
                <p class="type">Type: ${item.type}</p>
                <p id="item-description">${item.description}</p>
              </div>
              <!--Edit and Delete are only for creator-->
              ${item.canEdit
                ? html`
                    <div id="action-buttons">
                        <a href="/catalog/${item._id}/edit" id="edit-btn">Edit</a>
                        <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
                    </div>
                `
                : null
                }
            </div>
          </div>
        </section>
`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const item = await getById(id);
    const userData = getUserData();

    if (item && userData && userData._id == item._ownerId) {
        item.canEdit = true;
    }

    ctx.render(detailsTemplate(item, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if (choice) {
            await deleteCar(id);
            ctx.page.redirect('/catalog');
        }
    }
}
