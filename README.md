# Projeto Next.js + Builder.io + Professor Lucas

Este projeto foi gerado para você rodar seu site criado no Builder.io na Vercel
e ainda usar a rota `/api/chat` para o Professor Lucas (IA de Português).

## Como usar

1. Baixe este projeto (ou clone do GitHub depois de subir).

2. Instale as dependências:

```bash
npm install
# ou
yarn
```

3. Crie um arquivo `.env.local` na raiz com:

```bash
OPENAI_API_KEY=coloque_sua_chave_da_api_aqui
```

4. Rode em desenvolvimento:

```bash
npm run dev
```

5. Acesse http://localhost:3000

O conteúdo das páginas vem do Builder.io, usando sua Public API Key
já configurada no código.

## Deploy na Vercel

1. Suba esta pasta para um repositório no GitHub.
2. No painel da Vercel, clique em "Add New Project" e selecione esse repositório.
3. Nas variáveis de ambiente da Vercel, adicione:

- `OPENAI_API_KEY` com sua chave da OpenAI.

4. Faça o deploy.

Sempre que você alterar o conteúdo no Builder (modelo "page"),
o site da Vercel será atualizado automaticamente (ISR com `revalidate: 5`).
