---
title: epsc-store
description: Uma loja com catálogo simples de produtos, carrinho e checkout integrado a pagamentos com Pix e boleto (por enquanto).
technologies:
  - Vue 3
  - TypeScript
  - Tailwind CSS
  - Pinia
  - FastAPI
  - Python
  - Postgres
links:
  - label: Acessar site
    url: https://epsc-store-frontend.epscavalcante.dev
  - label: Acessar API
    url: https://epsc-store-backend.epscavalcante.dev/
  - label: GitHub frontend
    url: https://github.com/epscavalcante/epsc-store-frontend
  - label: GitHub backend
    url: https://github.com/epscavalcante/epsc-store
---

## Sobre o projeto

A epsc-store é uma loja que estou desenvolvendo para explorar o fluxo de uma compra: escolher produtos, montar um carrinho, finalizar o pedido e acompanhar o pagamento.

O foco principal do projeto é o backend, que está sendo desenvolvido para integrar diferentes plataformas de pagamento. A ideia é configurar a preferência por plataforma para cada método, considerando fatores como taxas e disponibilidade.

Em um exemplo hipotético, duas plataformas oferecem Pix, boleto e cartão de crédito, com taxas diferentes:

| Método | Plataforma X | Plataforma Y | Preferência |
|---|---:|---:|---|
| Pix e boleto | 5% | 3% | Y, com X como alternativa |
| Cartão de crédito | 3% | 5,5% | X, com Y como alternativa |

Essa configuração permite escolher a plataforma mais adequada para cada método. O uso de uma alternativa em caso de falha precisa considerar se a primeira plataforma chegou a criar a cobrança, evitando cobranças duplicadas.

O checkout atualmente oferece Pix e boleto. **O pagamento com cartão de crédito ainda será adicionado.**

## O que já funciona

- Catálogo de produtos carregado pela API.
- Carrinho com quantidades, remoção de itens, cálculo do total e persistência no navegador.
- Checkout com escolha entre Pix e boleto.
- Página do pedido com os itens comprados e as instruções de pagamento.
- QR Code e código copia e cola para Pix, além do código de barras e link do boleto.
- Consulta automática do status enquanto o pedido aguarda pagamento.

## Decisões atuais e próximos passos

Atualmente, o frontend consulta periodicamente o status do pagamento por **polling**. A ideia é substituir essa consulta por **SSE (Server-Sent Events)**, permitindo que o backend envie as atualizações ao navegador.

Os próximos passos incluem adicionar o pagamento com cartão de crédito e evoluir a configuração de preferências e alternativas entre as plataformas de pagamento.
