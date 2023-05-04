const app = {
    modal: document.querySelector('.modal#product-modal'),
    select: document.querySelector('#productId'),
    rows: document.querySelectorAll('[data-row-plot]'),

    init(){
        const addTags = document.querySelectorAll('.add-tag');
        const tags = document.querySelectorAll('.tags>a');
        const formModal = document.querySelector('#form-modal');
        const cancelButton = app.modal.querySelector('[type=reset]');

        for ( const tag of tags ) {
            tag.addEventListener('click', app.handleDeleteAction);
        }

        for( const addTag of addTags) {
            addTag.addEventListener('click', app.handleOpenModal);
        }

        formModal.addEventListener('submit', app.handleCreateAction );
        cancelButton.addEventListener('click', app.handleCloseModal);

        fetch('/api/products/available', {
            headers: {
                'Authorization': ']Fw[ZS9+PEIzT|uX:;&x5b:q@P!2h'
            }
        })
            .then(response => response.json())
            .then((data) => {
                app.productAvailable = [...data];
            });
    },

    /**
     * Action that open the modal and
     * @param event
     */
    handleOpenModal(event){
        app.modal.classList.add('is-active');

        const row = document.querySelector(`[data-entity-id="${event.target.dataset.plotId}"]`).querySelectorAll('a');

        const map = [];

        row.forEach(product => {
            map.push(parseInt(product.dataset.productId));
        });

        const validatedProduct = app.productAvailable.filter(product => !map.includes(product.id));

        const hiddenField = document.querySelector('#plotId');
        
        validatedProduct.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            app.select.appendChild(option);
        });

        hiddenField.value = event.target.dataset.plotId;
    },

    /**
     * Action that close the modal
     */
    handleCloseModal(){
        app.modal.classList.remove('is-active');

        while(app.select.firstChild) {
            app.select.removeChild(app.select.firstChild);
        }
    },

    /**
     * Event call when the modal is submitted. The default event is prevented
     * @param event
     */
    handleCreateAction(event){
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('/admin/plots/products/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Object.fromEntries(data))
        })
            .then((response) => response.json())
            .then((data) => {
                const productFound = app.productAvailable.find(product => product.id === data.product_id);

                const row = document.querySelector(`[data-entity-id="${data.plot_id}"]`).querySelector('.field');

                const product = app.createTag(productFound, data.plot_id);
                row.prepend(product);
            });
        app.handleCloseModal();
    },

    /**
     * Query the server with featch in order to delete a relation between a plot and a product
     * Then remove the tag from the page dynamically
     * Each event has two dataset : plotId and productId
     * @param event
     */
    handleDeleteAction(event){
        fetch('/admin/plots/products/delete', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                plotId: event.target.dataset.plotId,
                productId: event.target.dataset.productId
            })
        })
            .then((response) => response.json())
            .then(() => {
                const control = event.target.parentNode;
                control.remove();
            });
    },

    /**
     * Construct and return a tag element
     * @param {Object} data
     * @param {Number} plotId
     * @returns {HTMLDivElement}
     */
    createTag(data, plotId){
        const block = document.createElement('div');
        block.classList.add('tags');

        const content = document.createElement('span');
        content.classList.add('tag-left', 'is-info');
        content.textContent = data.name;

        const link = document.createElement('a');
        link.classList.add('tag-right', 'mdi', 'mdi-close', 'is-danger');
        link.dataset.productId = data.id;
        link.dataset.plotId = plotId;
        link.addEventListener('click', app.handleDeleteAction);

        block.append(content);
        block.append(link);

        return block;
    }
};

document.addEventListener('DOMContentLoaded', app.init);