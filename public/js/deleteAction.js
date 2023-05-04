const deleteAction = {
    modal: document.querySelector('div.modal#delete-modal'),
    /** Retrieve all elements which need addEvent. */
    init(){
        const buttons = document.querySelectorAll('button.button.is-danger');
        const closeBtn = deleteAction.modal.querySelector('button.is-info');

        for(const button of buttons){
            button.addEventListener('click', deleteAction.handleConfirmDelete );
        }

        closeBtn.addEventListener('click', deleteAction.handleCloseModal);
    },
    /** Set the correct link for the delete button and show the modal */
    handleConfirmDelete(event){
        event.preventDefault();

        const link = deleteAction.modal.querySelector('a');

        link.setAttribute('href', event.target.dataset.link);

        deleteAction.modal.classList.add('is-active');    
    },
    /** Close the modal */
    handleCloseModal(){
        deleteAction.modal.classList.remove('is-active');
    },
};

document.addEventListener('DOMContentLoaded', deleteAction.init);