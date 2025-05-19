# Lugia Track

## Integrantes
* Erik Paschoalatto dos Santos - RM554854
* Júlio César Nunes Oliveira - RM557774
* Nathan Magno Gustavo Consolo - RM558987

## Descrição do projeto
A Lugia Track tem como objetivo automatizar o processo de organização e mapeamento das motos nos pátios da Mottu. Para isso, será adotada uma abordagem baseada em visão computacional,
utilizando QR Codes gerados durante o cadastro de cada nova moto no pátio. Esses códigos conterão todas as informações relevantes da moto, como modelo, chassi, placa e status (indicando para qual setor ela deverá ser encaminhada).
O QR Code será fixado no assento da moto, facilitando sua leitura pelas câmeras distribuídas nos setores do pátio. Após a alocação da moto em seu respectivo setor, os QR Codes serão capturados pelas câmeras,
permitindo a identificação de cada moto. Com base na posição da câmera e no setor em que ela se encontra, será possível determinar a localização exata da moto.
Essa abordagem também permite que o sistema seja aplicado em diferentes pátios com arquiteturas variadas, eliminando a necessidade de padronização da planta física dos pátios.

## Como utilizar o sistema

* **Cadastro**: Foram utilizados dados mockados para email e senha do funcionário Mottu.

~~~
Email: funcionario@mottu.com
Senha: organiza
~~~

* **Funcionalidades do sistema**: O usuário pode navagar entre todas as funcionalidades do sistemas através
do sistema de navegação BottomTab. O sistema possui três principais funcionalidades, sendo elas: Procurar motos, Pátio e Adicionar motos.

* Procurar motos: O usuário pode procurar por uma moto específica de duas formas diferentes, informado o Chassi do veículo ou informando a plca (Para a primeira Sprint, está feature não está funcional).

* Pátio: Tela onde o usuário tem acesso a todos os setores do pátio. Quando um setor for selecionado, ele será direcionado para uma tela onde terão todas as motos daquele setor.

* Adicionar motos: Funcionalidade responsável pelo cadastro de motos que entram no pátio. Ao registrar uma nova moto no sistema,
*  um QR Code é gerado automaticamente contendo todas as informações da moto. Esse QR Code é impresso imediatamente por meio da integração com a impressora (Para a primeira Sprint,
   as motos e suas informações são armazenada apenas no AsyncStorage).

## Como rodar o projeto

Para rodar este projeto localmente, siga os passos abaixo:

### Pré-requisitos

Certifique-se de que você possui os seguintes itens instalados:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)  
  Instale com:  
  ```bash
  npm install -g expo-cli

- Um emulador Android/iOS ou o aplicativo Expo Go no seu celular.

### Passos para executar o projeto
#### 1. Clone o repositório e entre na pasta do projeto
   ```bash
   git clone https://github.com/Lugia-Code/mobile-app.git
   cd mobile-app
   ```

#### 2. Instale as dependências:
  ```bash
   npm install
   # ou
   yarn install
   ```

#### 3. Inicie o servidor Expo: 
   ```bash
   npx expo
   ```

#### 4. Execute o app:

No celular: Abra o aplicativo Expo Go e escaneie o QR Code.

No emulador:

Pressione a para abrir no Android.

Pressione i para abrir no iOS (requer macOS).
