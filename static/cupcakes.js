function generateCupcake(cupcake) {
    return `
        <div class = "col-4" >
            <img src="${cupcake.image}" class = "img-thumbnail" alt="image of cupcake">
            <p class = "text-center">
                ${cupcake.flavor}, Size: ${cupcake.size}<br>
                Rating: ${cupcake.rating}<br>
                <button data-id = "${cupcake.id}" class="delete-button badge badge-dark">Delete!!</button> 
            </p>
        </div>`
}


async function showCupcakes() {
    const res = await axios.get(`http://127.0.0.1:5000/api/cupcakes`);
    
    for (let cupcakeData of res.data.cupcakes) {
        let newCupcake = $(generateCupcake(cupcakeData));
        $('#cupcake-list').append(newCupcake);
    }
}

$('.add-cupcake').click(addCupcake);

async function addCupcake(evt) {
    evt.preventDefault();
    let flavor = $("#flavor").val();
    let size = $("#size").val();
    let rating = $("#rating").val();
    let image = $("#image").val();

    const newCupcakeRes = await axios.post(`http://127.0.0.1:5000/api/cupcakes`, {
        flavor, 
        size, 
        rating, 
        image
    });

    let newCupcake = $(generateCupcake(newCupcakeRes.data.cupcake));
    $('#cupcake-list').append(newCupcake);
    $('#cupcake-form').trigger("reset");  
}

$("#cupcake-list").on("click", ".delete-button", async function(evt) {
    evt.preventDefault();
    let id = $(evt.target).attr('data-id');
    await axios.delete(`http://127.0.0.1:5000/api/cupcakes/${id}`);
    $(evt.target).closest("div").remove()
})
    
$(showCupcakes);

