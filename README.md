# Typescript boilerplate and tests

Let's try to take advantage of mongoose + typescript, without external libraries.

### v0

Copy definition of every properties, methods, static methods inside interfaces.

Advantage:
- for big migrations, code won't be re-indented, only prototypes will be with diff

To improve:
- every methods has to say themselve as document `(this: UserDocument)`
- mongoose document / models methods like `find()` are not linked
- tedious to maintain on any project with more than a few methods
- a prototype not maintained can lead to silly issues

### v1
Define methods in a class

Advantage:
- no duplicated definition in interfaces and classes

To improve:
- mongoose document / models methods like `find()` are not linked
- every methods has to say themselve as document `(this: UserDocument)`
- Big migrations will modified with too indent on each line, making it uncertain to review.

