# DirigeFácil — Landing Page

Site de apresentação do DirigeFácil, app de gestão financeira para motoristas de app e entregadores.

**Stack:** React 19 · TypeScript · Vite · Tailwind CSS v4 · Vitest · ESLint

## Como rodar

Pré-requisito: [Node.js LTS](https://nodejs.org) (v20 ou superior).

```bash
npm install       # instala as dependências
npm run dev       # servidor de desenvolvimento em http://localhost:5173
npm test          # testes unitários
npm run lint      # análise estática (inclui a regra de dependência entre camadas)
npm run build     # gera o site final em /dist
npm run preview   # serve o /dist localmente para conferir o build
```

## Arquitetura

O projeto segue Clean Architecture: as dependências apontam sempre **para dentro**.
O ESLint bloqueia imports proibidos (ex.: `domain` importando React).

```
src/
├── domain/            Regras de negócio puras, sem React e sem framework
│   ├── earnings/      Cálculo do lucro real (bruto − custos, margem, R$/hora)
│   └── pricing/       Entidade Plan
├── application/       Casos de uso e contratos
│   ├── content/       Tipos do conteúdo da página
│   ├── ports/         Interface LandingContentRepository
│   └── use-cases/     getLandingPage: carrega o conteúdo e calcula os números
├── infrastructure/    Implementações concretas (hoje, conteúdo estático)
│   ├── config/        Links externos (APK, WhatsApp, login)
│   ├── content/       Textos, preços, FAQ, screenshots
│   └── repositories/  StaticLandingContentRepository
├── presentation/      React
│   ├── components/    ui/ (Icon, ButtonLink, …) e layout/ (Header, Footer)
│   ├── sections/      Uma pasta ou arquivo por seção da página
│   └── styles/        Tokens do design system (DESIGN.md) no Tailwind
├── shared/lib/        Utilitários (formatação pt-BR, cn)
└── main.tsx           Composition root: liga o repositório ao caso de uso e à UI
```

**Onde editar o quê**

| Quero mudar…                         | Arquivo                                              |
| ------------------------------------ | ---------------------------------------------------- |
| Textos, preços, FAQ, passos          | `src/infrastructure/content/landingContent.ts`       |
| Link do APK / WhatsApp               | `src/infrastructure/config/siteLinks.ts`             |
| Cores, fontes, tamanhos              | `src/presentation/styles/index.css`                  |
| Como o lucro é calculado             | `src/domain/earnings/summarizeEarnings.ts`           |

Os valores do comparativo ("O que sobra no bolso", margem líquida, R$/hora) **não são
digitados à mão**: são calculados pelo domínio a partir das despesas cadastradas.
Mude uma despesa e todos os números se atualizam.

Para trocar a fonte do conteúdo (um CMS ou uma API, por exemplo), basta criar outra
classe que implemente `LandingContentRepository` e trocá-la no `main.tsx`.

## Deploy

O build usa `base: './'`, então a mesma pasta `dist/` funciona em qualquer hospedagem.

### Hostinger (ou qualquer hospedagem compartilhada)

1. `npm run build`
2. No Gerenciador de Arquivos (ou via FTP), envie **o conteúdo** de `dist/` para `public_html/`.

### GitHub Pages

1. Crie o repositório e envie o código.
2. Em **Settings → Pages**, escolha **GitHub Actions** como fonte.
3. Adicione um workflow que rode `npm ci && npm run build` e publique a pasta `dist/`
   (actions `actions/upload-pages-artifact` + `actions/deploy-pages`).

### Netlify / Vercel / Cloudflare Pages

Conecte o repositório. Comando de build: `npm run build`. Pasta de saída: `dist`.

## Pendências antes de publicar

- [ ] Link real do APK em `siteLinks.ts` (hoje aponta para `#baixar`)
- [ ] Número do WhatsApp em `siteLinks.ts` (hoje é `https://wa.me/` sem número)
- [ ] Páginas de Termos de Uso, Privacidade e Central de Ajuda (links do rodapé)
- [ ] Baixar os screenshots do app para `public/screens/` (hoje vêm de uma URL temporária do Google)
