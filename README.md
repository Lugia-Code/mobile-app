# Tracking Code

## Proposta

Tracking Code é uma solução de RTLS (Real Time Location System) baseada em tecnologia UWB (Ultra Wideband) para localização em tempo real das motos no pátio da Mottu.  
O sistema utiliza ancoras UWB fixas e tags UWB acopladas nas motos para rastrear e monitorar a posição dos veículos, proporcionando controle preciso, automação da gestão e segurança operacional.

A aplicação mobile foi desenvolvida em React Native com Expo, integrando autenticação, consulta, cadastro de motos e consumo de dados do backend via API.

---

## Funcionalidades

- **Autenticação e Cadastro de Usuário:**  
  Integração com Firebase e Firebase/Auth para login/cadastro de usuários.

- **Localização em Tempo Real:**  
  Exibe a posição das motos com base nos dados das ancoras UWB.

- **Consulta de Motos:**  
  Busca por número de chassi, placa ou setor do pátio.

- **Cadastro de Motos:**  
  Adição de motos com informações completas, associando tags UWB e registrando no sistema.

- **Visualização do Pátio:**  
  Exibe os setores do pátio e lista todas as motos presentes em cada setor.

- **Consumo de API Backend com Axios:**
  - Listar motos por setor ou global
  - Buscar moto por chassi ou placa
  - Registrar nova moto
  - Atualizar dados da moto
  - Autenticação/cadastro via Firebase

---

## Estrutura de Pastas

```
mobile-app/
├── assets/                 # Imagens, ícones, arquivos estáticos
├── src/                    # Código fonte principal do app
│   ├── components/         # Componentes reutilizáveis
│   ├── screens/            # Telas do app (Login, Cadastro, Pátio, etc.)
│   ├── navigation/         # Configuração das rotas e navegação
│   ├── services/           # Serviços de API, integração com Firebase, etc.
│   └── utils/              # Funções utilitárias
├── App.js                  # Arquivo principal do aplicativo
├── index.js                # Ponto de entrada do app
├── app.json                # Configurações do Expo
├── package.json            # Dependências e scripts
└── README.md               # Documentação
```

---

## Dependências

```json
{
  "@react-native-async-storage/async-storage": "Armazenamento local assíncrono",
  "@react-navigation/bottom-tabs": "Navegação em abas inferiores",
  "@react-navigation/native": "Navegação principal",
  "@react-navigation/stack": "Navegação em pilha",
  "axios": "Requisições HTTP para APIs",
  "expo": "Framework para desenvolvimento React Native",
  "expo-image": "Manipulação de imagens",
  "expo-location": "Serviços de localização",
  "expo-status-bar": "Controle da barra de status",
  "firebase": "Integração com Firebase (auth, db, etc)",
  "react": "Biblioteca principal React",
  "react-native": "Framework mobile",
  "react-native-dotenv": "Gerenciamento de variáveis de ambiente",
  "react-native-gesture-handler": "Gestão de gestos",
  "react-native-maps": "Mapas e geolocalização",
  "react-native-maps-directions": "Rotas e direções em mapas",
  "react-native-reanimated": "Animações",
  "react-native-safe-area-context": "Ajuste para áreas seguras",
  "react-native-screens": "Gestão de telas",
  "react-native-vector-icons": "Ícones vetoriais"
}
```

Para instalar:

```bash
npm install
# ou
yarn install
```

---

## Como Utilizar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (LTS)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Emulador Android/iOS ou app Expo Go

### Passos

1. **Clone o repositório**

   ```bash
   git clone https://github.com/Lugia-Code/mobile-app.git
   cd mobile-app
   ```

2. **Instale as dependências**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure o Firebase**

   - Crie um projeto no [Firebase](https://console.firebase.google.com/)
   - Adicione o arquivo de configuração no projeto conforme a documentação.

4. **Inicie o servidor Expo**

   ```bash
   npx expo start
   ```

5. **Execute o app**
   - No celular: Abra o app Expo Go e escaneie o QR Code.
   - No emulador: Pressione `a` (Android) ou `i` (iOS).

---

## Integrantes

| Nome                         | RM       | GitHub                                             |
| ---------------------------- | -------- | -------------------------------------------------- |
| Nathália Gomes               | RM554945 | [Nathália Gomes](https://github.com/nathaliagmsss) |
| Júlio César Nunes Oliveira   | RM557774 | [Júlio Nunes](https://github.com/JubsHereMan)      |
| Nathan Magno Gustavo Consolo | RM558987 | [NathanMagno](https://github.com/NathanMagno)      |

---

## Vídeo de Demonstração

Em breve: gravação demonstrando o app funcionando em emulador/dispositivo, apresentando todas as funcionalidades.

**[vídeo de demonstração do projeto](#)**

---

Para dúvidas ou sugestões, abra uma issue ou entre em contato!
