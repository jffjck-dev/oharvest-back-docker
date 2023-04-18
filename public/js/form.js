const formCategory = {
    init: function(){
        document.querySelector('#formCategory').addEventListener('submit', formCategory.handleFormSubmit);
    },
    handleFormSubmit: function(event){
        event.preventDefault();

        const formData= new FormData(event.target);

        console.log(formData);

        const data = {};

        formData.forEach((value, key) => data[key] = value);

        const json = JSON.stringify(data);

        console.log(json);
    }
};

document.addEventListener('DOMContentLoaded', formCategory.init);