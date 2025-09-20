# 🚀 Cheatsheet HTTP & Status Codes

## 🌐 Métodos HTTP + Exemplo

| Método | Descrição | Rota Exemplo | Resposta Exemplo |
|--------|-----------|-------------|----------------|
| GET    | Buscar dados | `/usuario` | `[{"nome":"Emanuel"}]` |
| POST   | Criar recurso | `/usuario` | `{"mensagem":"Usuário criado","usuario":{"nome":"Emanuel"}}` |
| PUT    | Substituir recurso | `/usuario/1` | `{"mensagem":"Usuário atualizado"}` |
| PATCH  | Atualizar parte do recurso | `/usuario/1` | `{"mensagem":"Usuário parcialmente atualizado"}` |
| DELETE | Remover recurso | `/usuario/1` | (204 No Content) |

---

## 📌 Status Codes mais comuns

| Código | Tipo | Quando usar | Exemplo JSON |
|--------|------|------------|--------------|
| 200    | ✅ Sucesso | GET ou PUT OK | `{"mensagem":"Sucesso"}` |
| 201    | ✅ Criado | POST criando recurso | `{"mensagem":"Criado","usuario":{...}}` |
| 204    | ✅ No Content | DELETE OK | *(sem corpo)* |
| 400    | ⚠️ Bad Request | Falta de campos ou dados inválidos | `{"erro":"Campos obrigatórios faltando"}` |
| 401    | ⚠️ Unauthorized | Sem login/token | `{"erro":"Não autorizado"}` |
| 403    | ⚠️ Forbidden | Sem permissão | `{"erro":"Acesso negado"}` |
| 404    | ⚠️ Not Found | Recurso não encontrado | `{"erro":"Usuário não encontrado"}` |
| 409    | ⚠️ Conflict | Conflito, ex.: email duplicado | `{"erro":"Email já cadastrado"}` |
| 500    | 💀 Internal Server Error | Erro do servidor | `{"erro":"Erro interno"}` |
| 503    | 💀 Service Unavailable | Servidor indisponível | `{"erro":"Serviço temporariamente indisponível"}` |

---

## 💡 Boas práticas

1. Sempre use **status code correto**.  
2. Responda **JSON com objetos ou arrays**, nunca strings simples.  
3. Valide dados do cliente: use **400** se faltar algum campo.  
4. Para erros de autenticação ou permissão, use **401 / 403**.  
5. Para erros internos do servidor, use **500** e registre o erro no console.  

---
## 📌 Exemplo de uso no Express

```js
// Sucesso
res.status(200).json({ mensagem: "Usuário encontrado" });

// Criado
res.status(201).json({ mensagem: "Usuário criado" });

// Erro de validação
res.status(400).json({ erro: "Campos obrigatórios faltando" });

// Não encontrado
res.status(404).json({ erro: "Usuário não encontrado" });
