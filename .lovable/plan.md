

## Diagnóstico: Conflito de Merge no Git

O conflito de merge acontece porque o Lovable e o GitHub estão com versões diferentes dos mesmos arquivos. Isso é comum quando edições são feitas simultaneamente no Lovable e no repositório local/GitHub.

### Solução Recomendada

**Opção 1 — Resolver pelo GitHub (mais simples):**
1. Acesse o repositório no GitHub
2. Se houver um Pull Request com conflitos, clique em "Resolve conflicts"
3. Escolha qual versão manter para cada arquivo conflitante
4. Faça o merge

**Opção 2 — Resolver localmente via terminal:**
```text
git fetch origin
git merge origin/main          # vai mostrar os conflitos
# Abra os arquivos com <<<<<<< HEAD e resolva manualmente
git add .
git commit -m "resolve merge conflicts"
git push origin main           # o Lovable sincroniza automaticamente
```

**Opção 3 — Forçar a versão do Lovable (descarta mudanças locais):**
```text
git fetch origin
git reset --hard origin/main
```

### Prevenção futura
- Evite editar arquivos no IDE local e no Lovable ao mesmo tempo
- Sempre faça `git pull` antes de começar a editar localmente
- Use o histórico do Lovable (View History) para restaurar versões se necessário

### Nota importante
O Lovable tem sincronização bidirecional com GitHub. Após resolver o conflito e fazer push para a branch principal, o Lovable vai atualizar automaticamente.

