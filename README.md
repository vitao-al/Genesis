
![img.png](img.png)


Um projeto feito em python para a diciplina de programação que visa mostrar os exoplanetas com mais provabilidade de vida, com base em um dataset obtido pela waggle.
# Objetivo
  O projeto genesis é uma aplicação que ultiliza o dataset PS_2025.02.03_05.09.36.csv, disponibilizado pelo site [kaggle](https://www.kaggle.com/) 
  Que contem uma lista de mais de 5000 Exoplanetas, descobertos por meio do uso de telescopios. E com base no dataset, o projeto genesis analiza e compara 
  todos os Exoplanetas obtidos no dataset, e calcula com base nas funções gaussianas absoluta e proporcional, usando a terra como parametro, a provabilidade de vida 
  e demonstrando quais Exoplanetas são os mais provaveis. Ademais, é possivel no App Genesis obter informações especificas sobre os exoplanetas, como raio, temperatura
  massa, quantidade de estrelas, etc...
  alem da integração com ia, que permite que o usuario possa fazer perguntas mais especificas sobre cada Exoplaneta!
  

https://github.com/user-attachments/assets/7d072bab-b1fb-45a4-9f8d-bad2f45dca6b


# Funcionalidades
  * Visualização de todos os Exoplanetas dentro do dataset
  * Visualização dos dados dos Exoplanetas mais provaveis de ter vida
  * Comparação dos Exoplanetas mais provaveis, e seus graficos de atributos
  * Integração com ia para geração de paginas especificas sobre cada Exoplaneta
  * Interação do usuario com a ia por meio de um chat especifico na pagina dos planetas
    
# Instalação
  1 - Baixe ou clone o repositorio do github
  
  2 - Verifique se seu computador tem python e o pip instalado
  
  3 - Extraia o projeto(caso tenha baixado em .zip) e abra na raiz do projeto
  
  4 - na pasta principal procure o arquivo requirements.txt 
  
  5 - abra o cmd, powershell, ou terminal na pasta onde se encontra o requirements.txt
  
  6 - rode o comando ```pip install -r requirements.txt```
  
  7 - crie um arquvio na mesma pasta onde o requirements.txt se localiza e o nomeie como ".env"
  
  8 - crie uma conta no site [groq](https://console.groq.com/home) e gere uma chave api na aba API KEYS
  
  9 - copie sua chave api e cole a seguinte linha dentro do arquivo ".env":GENESIS_AI_API_KEY=sua_chave_api(cole a chave sem aspas)
  
  10 - Tudo pronto! rode o arquivo app.py com o comando ```python app.py``` ou ```python3 app.py```
  
  
# tecnologias usadas:
* flask
* numpy
* jinja
* chartjs
* requests
* dotenv
* pandas
* waggle
  
# integrantes:
  * andre lucas
  * leonardo Fernandes
  * victor manuel
  * Handrey luciano
# OBS:
para mais informações sobre a estrutura do projeto consulte o arquivo ```/docs/DOCS.md```
