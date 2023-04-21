const app = {
    modal: document.querySelector('.modal'),
    select: document.querySelector('#productId'),
    rows: document.querySelectorAll('[data-row-plot]'),

    init(){
        const addTags = document.querySelectorAll('.add-tag');
        const tags = document.querySelectorAll('.tags>a');
        const formModal = document.querySelector('#form-modal');
        const closeModalButton = app.modal.querySelector('.delete');

        for ( const tag of tags ) {
            tag.addEventListener('click', app.handleDeleteAction);
        }

        for( const addTag of addTags) {
            addTag.addEventListener('click', app.handleOpenModal);
        }

        formModal.addEventListener('submit', app.handleCreateAction );
        closeModalButton.addEventListener('click', app.handleCloseModal);

        fetch('/api/products/available')
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

        const row = document.querySelector(`[data-row-plot="${event.target.dataset.plotId}"]`).querySelectorAll('a');

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

        console.dir(app.select.querySelectorAll('option'));

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

                const row = document.querySelector(`[data-row-plot="${data.plot_id}"]`).querySelector('.field');

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
                const control = event.target.parentNode.parentNode;
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
        const parent = document.createElement('div');
        parent.classList.add('control');

        const block = document.createElement('div');
        block.classList.add('tags', 'has-addons');

        const content = document.createElement('span');
        content.classList.add('tag', 'is-info', 'is-medium');
        content.textContent = data.name;

        const link = document.createElement('a');
        link.classList.add('tag', 'is-delete', 'is-danger', 'is-light', 'is-medium');
        link.dataset.productId = data.id;
        link.dataset.plotId = plotId;
        link.addEventListener('click', app.handleDeleteAction);

        block.appendChild(content);
        block.appendChild(link);

        parent.appendChild(block);

        return parent;
    }
};

document.addEventListener('DOMContentLoaded', app.init);