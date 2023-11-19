## Descrição

Aplicação de um sistema de matrículas para a disciplina de Programação Back-end.

## Instalação de dependências

```bash
$ npm install
```

## Rodando aplicação

```bash
$ npm run start
```

## Rotas
## Alunos
Para criar um Aluno

``
POST http://localhost:3000/alunos Adicionando um Body contendo um objeto de Aluno
``


Para retornar uma lista de alunos

``
GET http://localhost:3000/alunos
``

Para retornar um aluno por seu ID

``
GET http://localhost:3000/alunos/{id}
``

Para atualizar um aluno

``
PATCH http://localhost:3000/alunos/{id} Adicionando um Body contendo um objeto de Aluno
``

Para remover um aluno

``
DELETE http://localhost:3000/alunos/{id}
``

Para Adicionar um aluno em uma turma

``
POST http://localhost:3000/alunos/join-turma Adicionando um objeto da entidade Aluno-Turma
``



## Professores
Para criar um Professor

``
POST http://localhost:3000/professores Adicionando um Body contendo um objeto de Professor
``


Para retornar uma lista de professores

``
GET http://localhost:3000/professores
``

Para retornar um professor por seu ID

``
GET http://localhost:3000/professores/{id}
``

Para atualizar um professor

``
PATCH http://localhost:3000/professores/{id} Adicionando um Body contendo um objeto de Professor
``

Para remover um Professor

``
DELETE http://localhost:3000/professores/{id}
``


## Disciplina
Para criar uma Disciplina

``
POST http://localhost:3000/disciplinas Adicionando um Body contendo um objeto de disciplina
``


Para retornar uma lista de disciplina

``
GET http://localhost:3000/disciplinas
``

Para retornar uma disciplina por seu ID

``
GET http://localhost:3000/disciplinas/{id}
``

Para atualizar uma disciplina

``
PATCH http://localhost:3000/disciplinas/{id} Adicionando um Body contendo um objeto de Disciplina
``

Para remover uma disciplina

``
DELETE http://localhost:3000/disciplinas/{id}
``

## Turma
Para criar uma Turma

``
POST http://localhost:3000/turmas Adicionando um Body contendo um objeto de Turma
``


Para retornar uma lista de turmas

``
GET http://localhost:3000/turmas
``

Para retornar uma turma por seu ID

``
GET http://localhost:3000/turmas/{id}
``

Para atualizar uma turma

``
PATCH http://localhost:3000/turmas/{id} Adicionando um Body contendo um objeto de Turma
``

Para remover uma turma

``
DELETE http://localhost:3000/turmas/{id}
``