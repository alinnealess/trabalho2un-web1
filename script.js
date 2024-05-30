const contatos = [];

function adicionarContato() {
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const endereco = document.getElementById('endereco').value;

    var contatoExistente = contatos.find(function(contato) {
        return contato.cpf === cpf;
    });
    if (contatoExistente) {
        alert('CPF já cadastrado.');
        return;
    }

    const novoContato = {nome: nome, 
                        cpf: cpf, 
                        dataNascimento: dataNascimento, 
                        endereco: endereco};
    contatos.push(novoContato);
    alert('Contato salvo com sucesso.');

    // Limpar campos de entrada
    document.getElementById('nome').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('dataNascimento').value = '';
    document.getElementById('endereco').value = '';
}

function exibirContatos() {
    const contatosCard = document.getElementById('contatosCard');
    const contatosLista = document.getElementById('contatosLista');
    contatosLista.innerHTML = '';

    if (contatos.length === 0) {
        contatosLista.innerHTML = '<p class="alert alert-warning text-center" >Não há contatos cadastrados.</p>';
    } else {
        contatos.forEach(function(contato) {
            contatosLista.innerHTML += `
                <div class="contact-card">
                    <p class="nome"><strong>${contato.nome}</strong></p>
                    <p><strong>CPF:</strong> ${contato.cpf}</p>
                    <p><strong>Data de Nascimento:</strong> ${contato.dataNascimento}</p>
                    <p><strong>Endereço:</strong> ${contato.endereco}</p>
                </div>
            `;
        });
    }
    contatosCard.classList.remove('d-none');
}

function buscarContato() {
    const cpf = prompt('Digite o CPF do contato que deseja buscar:');
    const contato = contatos.find(function(contato) {
        return contato.cpf === cpf;
    });
    if (contato) {
        alert(`Nome: ${contato.nome}, 
        CPF: ${contato.cpf}, 
        Data de Nascimento: ${contato.dataNascimento}, 
        Endereço: ${contato.endereco}`);
    } else {
        alert('Contato não encontrado.');
    }
}

function removerContato() {
    const cpf = prompt('Digite o CPF do contato que deseja remover:');
    const index = contatos.findIndex(function(contato) {
        return contato.cpf === cpf;
    });
    if (index !== -1) {
        contatos.splice(index, 1);
        alert('Contato excluído com sucesso.');
        exibirContatos();
    } else {
        alert('Contato não encontrado.');
    }
}
