# Kainã & Karine — Casamento 💍

Site de planejamento do casamento, com 3 abas:

- **Casamento** — convite personalizado (com contagem regressiva e botão de impressão), checklist e orçamento de fornecedores, padrinhos/madrinhas, lista de convidados com RSVP e cronograma do grande dia.
- **Nossa Casa** — orçamento de móveis e itens para a casa nova, organizado por cômodo (sala, quarto, cozinha, banheiro, área de serviço, mudança/itens gerais).
- **Lua de Mel** — 10 destinos românticos dentro do Brasil (com custo estimado e melhor época), tabela comparativa e planilha de orçamento da viagem escolhida.

Todos os campos de valores são editáveis direto na página e ficam salvos automaticamente no navegador (localStorage). Use o botão **Backup** no topo para baixar um arquivo `.json` com todos os dados preenchidos — isso é importante para não perder nada e para sincronizar entre o celular do Kainã e da Karine (importe o mesmo arquivo nos dois aparelhos com o botão **Importar**).

## Como publicar no GitHub Pages

```bash
git init
git add .
git commit -m "Site do casamento Kainã & Karine"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPO.git
git push -u origin main
```

Depois, no GitHub: **Settings → Pages → Source → Deploy from a branch → main / (root)**. Em alguns minutos o site fica disponível em:

```
https://SEU_USUARIO.github.io/NOME_DO_REPO/
```

## Estrutura

```
index.html          página principal (as 3 abas)
assets/style.css     visual romântico/floral e responsivo
assets/script.js     lógica das abas, tabelas editáveis, totais e persistência
```

Os valores de custo da aba de Lua de Mel são estimativas de pesquisas de 2026 — sirvam como ponto de partida, não como cotação final.
