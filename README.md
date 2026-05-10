# 🦟 DengueAlert

**Plataforma comunitária de monitoramento, conscientização e combate à dengue.**

> Projeto de Extensão Universitária — 2026/1 · Engenharia da Computação  
> Alinhado com **ODS 3 · ODS 8 · ODS 13** da Agenda 2030

---

## 🔗 Acesse o sistema

**[https://web-dengue-a0b99.web.app](https://web-dengue-a0b99.web.app)**

---

## 📌 Sobre o projeto

O DengueAlert é uma plataforma web interativa que permite à população registrar focos do mosquito *Aedes aegypti*, visualizar ocorrências em mapa em tempo real e acessar informações educativas sobre prevenção e sintomas da dengue.

Em 2024, o Brasil registrou mais de **6 milhões de casos** e **6.000 mortes** por dengue — o pior surto da história. Este projeto nasce da necessidade de uma ferramenta acessível que conecte cidadãos, agentes de saúde e gestores públicos no combate à doença.

---

## ✨ Funcionalidades

| Módulo | Descrição |
|---|---|
| 🗺️ **Mapa Interativo** | Focos geolocalizados em tempo real com marcadores por nível de risco e filtro por data |
| 📝 **Formulário de Denúncia** | Registro de focos com tipo, localização GPS, descrição e nível de risco |
| 📊 **Dashboard** | KPIs dinâmicos, gráfico de linha mensal, rosca por tipo de foco e barras por região |
| 📚 **Módulo Educativo** | 6 cards sobre prevenção, sintomas, erros comuns, relação com o clima e canais de ajuda |
| ⚡ **Relato Rápido** | Modal de denúncia acessível direto pela navegação |
| 🌍 **Seção ODS** | Alinhamento visual com ODS 3, 8 e 13 da Agenda 2030 |

---

## 🚀 Tecnologias

- **HTML5 · CSS3 · JavaScript** (ES Modules — sem build tools)
- **[Leaflet.js](https://leafletjs.com)** — mapas interativos com OpenStreetMap
- **[Chart.js](https://www.chartjs.org)** — gráficos do dashboard
- **[Firebase Firestore](https://firebase.google.com)** SDK v10 — banco de dados em nuvem com `onSnapshot` em tempo real
- **Geolocation API** — captura automática de localização ao registrar foco
- **Google Fonts** (Syne + DM Sans)

---

## 🔥 Firebase — Dados em tempo real

Os relatos enviados pelo formulário são salvos direto no **Firebase Firestore** e aparecem automaticamente no mapa para todos os usuários, sem precisar recarregar a página.

O dashboard lê os dados reais do banco e atualiza os gráficos de acordo com os relatos registrados. Quando o banco está vazio, a plataforma exibe dados de demonstração automaticamente.

---

## 📁 Estrutura

```
dengue-project/
└── index.html    # Aplicação completa — HTML, CSS e JS em um único arquivo
```

> Projeto entregue como arquivo standalone. Sem dependências, sem `npm install`, sem servidor. Abre direto no navegador.

---

## 🎯 ODS contemplados

| ODS | Nome | Relação com o projeto |
|---|---|---|
| **3** | Saúde e Bem-estar | Combate à dengue, conscientização sobre prevenção e sintomas |
| **8** | Inovação e Empreendedorismo | Solução tecnológica desenvolvida para resolver problema social real |
| **13** | Ação Climática | Educação sobre a relação entre mudanças climáticas, chuvas e proliferação do mosquito |

---

## 📸 Preview

> **Hero com painel de alertas**
> Mapa interativo · Dashboard · Módulo educativo · Formulário de denúncia

Acesse em: [https://web-dengue-a0b99.web.app](https://web-dengue-a0b99.web.app)

---

## 👨‍💻 Autor

**Caio Wilker Lima de Araújo**  
Engenharia da Computação · POLO MONTES CLAROS_VILA BRASÍLIA  
RGM: 34487344

---

## 📄 Licença

Este projeto foi desenvolvido como atividade de extensão universitária com fins acadêmicos e sociais.  
Dados exibidos na plataforma são gerados pela comunidade via formulário público.
