# Documentação oficial do app Genesis

## Estrutura atual do projeto:
```
.
├── app.py - classe principal que roda o flask
├── dataset
│   └── PS_2025.02.03_05.09.36.csv - Dataset do site kaggle
├── docs
│   └── DOCS.md - Documentação do projeto
├── Genesis
├── LICENSE - Arquivo de licensa
├── README.md - README.md
├── requirements.txt - bibliotecas usadas
├── setup.py - arquivo para setup
└── src
    ├── backend
    │   ├── AiIntegration.py - arquivo que contem a classe Ai responsavel por integrar as funcionalidades da ia no projeto 
    │   ├── __init__.py
    │   └── __pycache__
    ├── const
    │   ├── genesis_consts.py - arquivo que contem as classes das constantes ultilzadas no projeto como os valores de referencia da terra usados no calculo da provabilidade de via
    │   ├── __init__.py
    │   └── __pycache__
    ├── dataset
    │   ├── data_handler.py - arquivo que contem a classe data_handler que é responsavel por lidar com o dataset e instanciar os objetos da classe Exoplaneta
    │   ├── __init__.py
    │   └── __pycache__
    ├── frontend
    │   ├── __init__.py
    │   ├── static
    │   │   ├── css - estilização das paginas html
    │   │   │   ├── about-planet.css
    │   │   │   ├── comparar.css
    │   │   │   ├── globals.css
    │   │   │   ├── homepage.css
    │   │   │   ├── lista-exoplanetas.css
    │   │   │   ├── planetas.css
    │   │   │   └── style.css
    │   │   ├── img - os arquivos de imagem
    │   │   │   ├── background.png
    │   │   │   ├── Compare.png
    │   │   │   ├── download.png
    │   │   │   ├── GitHub.png
    │   │   │   ├── Info.png
    │   │   │   ├── left.png
    │   │   │   ├── Moon.png
    │   │   │   ├── planetaTerra.gif
    │   │   │   ├── planetaTerra.png
    │   │   │   ├── planets - as imagems dos planetas
    │   │   │   │   ├── Kepler-1410 b.png
    │   │   │   │   ├── Kepler-395 c.png
    │   │   │   │   ├── Kepler-452 b.png
    │   │   │   │   ├── LP 791-18 d.png
    │   │   │   │   ├── LP 890-9 c.png
    │   │   │   │   ├── Teegarden's Star b.png
    │   │   │   │   ├── TOI-700 d.png
    │   │   │   │   ├── TRAPPIST-1 d.png
    │   │   │   │   ├── TRAPPIST-1 e.png
    │   │   │   │   ├── TRAPPIST-1 f.png
    │   │   │   │   └── TRAPPIST-1 g.png
    │   │   │   ├── planets_no_shadow
    │   │   │   │   └── img.png
    │   │   │   ├── rigth.png
    │   │   │   ├── Sun.png
    │   │   │   └── world.svg
    │   │   └── js - os scripts em javascript usados na criação das paginas html 
    │   │       ├── btn_theme.js
    │   │       ├── carrossel.js
    │   │       ├── comparar.js
    │   │       ├── downloadButtom.js
    │   │       └── painelComparar.js
    │   └── templates - templates html com a ultilização do jinja para integrar html + css + javascript + python
    │       ├── about-planet.html
    │       ├── comparar.html
    │       ├── homepage.html
    │       ├── index.html
    │       ├── lista-exoplanetas.html
    │       └── planetas.html
    └── models - pasta que contem o modelo Exoplaneta
        ├── Exoplaneta.py - classe responsavel construir por meio dos dados do dataset objetos Exoplaneta,que contem os metodos dos calculos da provabilidade de vida e outros atributos  
        ├── __init__.py
        └── __pycache__

21 directories, 59 files
```

## Classes principais:
* Exoplaneta: classe de dados que possibilita calcular a provabilidade de vida baseado em distribuição normal e função gaussiana
* Data_handler: classe responsavel por lidar com o dataset
* AiIntegration: classe responsavel por conversar com a api do groq e gerar as respostas com ia
