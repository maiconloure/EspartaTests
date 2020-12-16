> Buscar os nomes de todos os alunos que frequentam alguma turma do professor 'JOAO PEDRO'.

```sh
SELECT Nome
FROM ALUNO
WHERE id 
IN 
( SELECT ALUNO_id
FROM TURMA
WHERE PROFESSOR_id = 
( SELECT id
FROM PROFESSOR
WHERE nome =  'JOAO PEDRO'
))
```

----------------------------------------------------------------
> Buscar os dias da semana que tenham aulas da disciplina 'MATEMATICA'.

```sh
SELECT dia_da_semana
FROM TURMA
WHERE DISCIPLINA_id =
( SELECT id
FROM DISCIPLINA
WHERE nome = 'MATEMATICA'
)
```

----------------------------------------------------------------
> Buscar todos os alunos que frequentem aulas de 'MATEMATICA' e também 'FISICA'.

```sh
SELECT Nome
FROM ALUNO
WHERE id 
IN
( SELECT ALUNO_id
FROM TURMA
WHERE DISCIPLINA_id IN
( SELECT id
FROM DISCIPLINA
WHERE nome = 'MATEMATICA' OR nome = 'FISICA'
)
GROUP BY ALUNO_id
HAVING count(ALUNO_id) = 2
)
```

----------------------------------------------------------------
> Buscar as disciplinas que não tenham nenhuma turma.
```sh
SELECT nome
FROM DISCIPLINA
WHERE id 
NOT IN
(SELECT DISCIPLINA_id
FROM TURMA
)
```

----------------------------------------------------------------
> Buscar os alunos que frequentem aulas de 'MATEMATICA' exceto os que frequentem 'QUIMICA'.

```sh
SELECT Nome
FROM ALUNO
WHERE id 
IN
( SELECT ALUNO_id
FROM TURMA
WHERE DISCIPLINA_id IN
( SELECT id
FROM DISCIPLINA
WHERE nome = 'MATEMATICA' OR nome = 'QUIMICA'
)
GROUP BY ALUNO_id
HAVING count(ALUNO_id) < 2
)
```
