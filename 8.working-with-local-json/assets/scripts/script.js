
function renderCard(product){
    const cardDiv = document.createElement('div');
    cardDiv.className = 'col-sm-6 col-md-3 d-flex justify-content-center p-2';

    cardDiv.innerHTML = `
    <div class="card mb-2" style="width: 275px;">
        <img src="${product.mainImageUrl}" class="card-img-top object-fit-cover" alt="..." height="150px">
        <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p>R$${product.price}</p>
            <button type="button" class="card-button btn btn-dark" id="btnAdicionar" data-action="add">Add ao carrinho</button>
           <a href="./details.html?id=${product.id}" class="btn btn-outline-secondary mt-2">Ver detalhes</a>
        </div>
    </div>
    `;

    const cardButton = cardDiv.querySelector('.card-button');
    cardButton.addEventListener("click", function(){
        toggleCardButton(cardButton, cardDiv);

    });


    return cardDiv;
}

var spanCounter = 0;

function updateCounter(){
    let counter = document.querySelector('.counter');
    counter.textContent = spanCounter;
}

function toggleCardButton(cardButton, cardDiv){
    const action = cardButton.getAttribute('data-action');
    
    if (action == 'add') {
        cardButton.textContent = "Remover do carrinho";
        cardDiv.classList.add('added');
        cardButton.classList.remove("btn-dark");
        cardButton.classList.add("btn-secondary");
        cardButton.setAttribute("data-action", "remove");

        //* chamar função de mais um

        spanCounter++;
        updateCounter();

    } else {
        cardButton.textContent = "Adicionar ao carrinho";
        cardDiv.classList.remove("added");
        cardButton.classList.remove("btn-secondary");
        cardButton.classList.add("btn-dark");
        cardButton.setAttribute("data-action", "add");

        // chamar função de menos um
        
        spanCounter--;
        updateCounter();
        
        
    }
}


async function renderCardSection(){
    const cardContainer = document.getElementById('card-container');

    let data = await fetchProductData();
    console.log(data);

    for(let i=1; i<= data.length; i++){
        const card = renderCard(data[i]);
        cardContainer.appendChild(card);
    }
}

async function fetchProductData() {
    const response = await fetch("assets/data/data.json");
    let data = await response.json();
    return data;
}
renderCardSection();