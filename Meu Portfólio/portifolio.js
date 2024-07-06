class Informacao {
   

    constructor(nome, foto, estado, pais, habitantes, fundacao) {
        this.nome = nome
        this.foto = foto
        this.estado = estado
        this.pais = pais
        this.habitantes = habitantes
        
        this.fundacao = fundacao

    }


}
const infomacoes = []
infomacoes.push(new Informacao('Aluminio', 'al.png', 'São Paulo', 'Brasil', '17.301 habitantes', '30 de dezembro de 1991'))
infomacoes.push(new Informacao('Las Vegas', 'lasvegas.png', 'Nevada', 'Estados Unidos', '640 mil habitantes', '15 de maio de 1905'))
infomacoes.push(new Informacao('Paris', 'paris.png', 'França', 'Europa', '2 148 271 habitantes', ' 4 000 e 3 800 a.C.',))
infomacoes.push(new Informacao('Blumenau,', 'blumenau.png', ' Santa Catarina', 'Brasil', '363.340 habitantes', '2 de setembro de 1850'))
const cartoesInformacoes = document.querySelector('.infomacoes')
infomacoes.forEach(cidade => {
    const cartao = document.createElement('div')
    cartao.classList.add('cartao')
    const foto = document.createElement('img')
    foto.classList.add('foto')
    foto.setAttribute('src', cidade.foto)


    const nome = document.createElement('h2')
nome.classList. add('nome')
nome.textContent = informacao.nome//a

const estado= document.createElement('p')
estado.classList.add('estado')
estado.textContent =  informacao.estado

const pais = document.createElement('p')//
pais.classList.add('pais')
pais.textContent =  informacao.pais

const habitantes = document.createElement('p')
habitantes.classList.add('habitantes')
habitantes.textContent=  informacao.habitantes

const fundacao = document.createElement('p')
fundacao. classList.add('fundacao')
fundacao.textContent =  informacao.fundacao
cartao.appendChild(foto)
cartao.appendChild(nome)
cartao.appendChild(estado)
cartao.appendChild(pais)
cartao.appendChild(habitantes)
cartao.appendChild(fundacao)
cartoesInformacoes.appendChild(cartao)

})