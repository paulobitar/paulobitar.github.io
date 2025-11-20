# Nexus Contabilidade Digital

Este projeto é um site completo e moderno para um escritório de contabilidade digital. Embora o código fonte seja React (TypeScript), ele é compilado em uma aplicação Single Page (SPA) que pode ser hospedada estaticamente no GitHub Pages.

## Estrutura do Projeto

O projeto utiliza **React 18**, **TypeScript**, **Tailwind CSS** e **React Router (HashRouter)**.

- `/index.html`: Arquivo base.
- `/index.tsx`: Ponto de entrada da aplicação.
- `/constants.ts`: **Todo o texto e dados do site estão aqui.** Edite este arquivo para alterar telefones, descrições de serviços, preços ou textos institucionais.
- `/pages/`: Contém as telas (Home, Sobre, Serviços, Detalhe do Serviço, Contato).
- `/components/`: Componentes reutilizáveis (Layout, Navbar, Footer).

## Como Funciona a Navegação (SPA vs HTML Estático)

Diferente de um site com arquivos HTML separados (`/servicos/index.html`), este projeto carrega uma única vez e troca o conteúdo instantaneamente via Javascript.

Para compatibilidade total com GitHub Pages (que não possui roteamento de servidor real), utilizamos o modo `HashRouter`.

**Exemplos de URL:**
- Home: `https://seu-usuario.github.io/nexus/#/`
- Serviços: `https://seu-usuario.github.io/nexus/#/servicos`
- Abertura de Empresa: `https://seu-usuario.github.io/nexus/#/servicos/abertura-de-empresa`

## Como Editar o Conteúdo

Não é necessário saber React profundamente para alterar os textos.
1. Abra o arquivo `constants.ts`.
2. Localize a constante `COMPANY_INFO` para mudar telefone, e-mail e endereço.
3. Localize `SERVICES` para alterar descrições e benefícios de cada serviço.

## Publicação no GitHub Pages

Como este código é gerado em um único bloco para fins de demonstração, para publicar você deve usar uma ferramenta de build como Vite ou Create React App.

**Passo a passo rápido (usando Vite):**

1. Crie um projeto Vite: `npm create vite@latest nexus-site -- --template react-ts`
2. Instale dependências: `npm install lucide-react react-router-dom`
3. Copie os arquivos fornecidos para a pasta `src` do projeto.
4. Copie o `index.html` para a raiz.
5. Execute `npm run build`.
6. A pasta `dist` conterá o site pronto.
7. Faça o upload do conteúdo da pasta `dist` para seu repositório GitHub (branch `gh-pages` ou `main` configurado como Pages).

## Manutenção

- **Cores:** Estão definidas no `tailwind.config` dentro do `index.html`.
- **Imagens:** Atualmente usa Picsum. Substitua as URLs em `pages/Home.tsx` e `constants.ts` por imagens reais da empresa.
