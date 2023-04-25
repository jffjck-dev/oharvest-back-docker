const app = {
    init(){
        const toggles = document.querySelectorAll('input[type=checkbox]');
        for(const toggle of toggles){
            toggle.addEventListener('click', app.handleStatus);
        }
    },
    handleStatus(event){
        const updatedValue = {id: event.target.dataset.productId, isAvailable: event.target.checked};
        fetch('/admin/products/available', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedValue)
        })
            .then((response) => {
                if(response.status === 200) {
                    return response.json();
                }
            })
            .then((data) => {
                const status = event.target.parentElement.querySelector('label');
                status.textContent = data['is_available'] ? 'Disponible' : 'Non disponible';
            });
    }
};

document.addEventListener('DOMContentLoaded', app.init);