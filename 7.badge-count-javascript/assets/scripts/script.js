
$('#btnAdicionar').click(function(){
    let valor = parseInt($('#spanCounter').text());
    valor++;
    $('#spanCounter').text(valor);
    
});

function renderCard(index){
    const cardDiv = document.createElement('div');
    cardDiv.className = 'col-sm-6 col-md-3 d-flex justify-content-center p-2';

    cardDiv.innerHTML = `
    <div class="card mb-2" style="width: 275px;">
        <img src="https://picsum.photos/id/${index*9}/200" class="card-img-top object-fit-cover" alt="..." height="150px">
        <div class="card-body">
            <h5 class="card-title">Card ${index}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p>R$${index*6.3}</p>
            <button type="button" class="card-button btn btn-dark" id="btnAdicionar" data-action="add">Add ao carrinho</button>
        </div>
    </div>
    `;

    const cardButton = cardDiv.querySelector('.card-button');
    cardButton.addEventListener("click", function(){
        toggleCardButton(cardButton, cardDiv);

    });


    return cardDiv;
}

var spanCounter = document.querySelector('.counter');
function maisUm(){
    var spanCounter = document.querySelector('.counter');
    let valor = parseInt(spanCounter.textContent);
    valor++;
    spanCounter.textContent = valor; 
}

function menosUm(){
    let valor = parseInt(spanCounter.textContent);
    valor = valor - 1;
    console.log(valor);
    spanCounter.textContent = valor; 
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

        maisUm();

    } else {
        cardButton.textContent = "Adicionar ao carrinho";
        cardDiv.classList.remove("added");
        cardButton.classList.remove("btn-secondary");
        cardButton.classList.add("btn-dark");
        cardButton.setAttribute("data-action", "add");

        // chamar função de menos um
        
            menosUm();
        
        
    }
}


function renderCardSection(numCards = 12){
    console.log('renderCardSection function called');
    const cardContainer = document.getElementById('card-container');

    for(let i=1; i<=numCards; i++){
        const card = renderCard(i);
        cardContainer.appendChild(card);
    }
}

renderCardSection();