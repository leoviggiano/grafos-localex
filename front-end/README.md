# Localex - Sistema de seleção de carros

O tema inicialmente partiu do setor de aluguel de carros, assim como faz a Unidas, Localiza, Kayak, Movida, Lokamig, entre outros. Com isso, foi-se observado que em todas essas plataformas existia um sistema de filtro que levava em consideração os interesses do usuário ao escolher um carro para alugar ou, até mesmo, comprar. Esses interesses se basevam em, por exemplo, marca, valor, ano, estado (novo ou usado) e cor do carro.

Portanto, foi desenvolvida uma plataforma inspirada na Webmotors em que é possível encontrar o carro mais adequado de acordo com os gostos do usuário. Para isso, foi necessário contruir um sistema de filtro baseado em grafos na qual um subconjunto de carros era interseccionado a partir do conjunto da base de todos os carros cadastrados.

Siga as imagens a seguir para ficar um pouco mais claro a solução:

Grafo em estado inicial da aplicação:

![Grafo 1](https://cdn.discordapp.com/attachments/490484774700318740/850465630447468644/Grafo1.PNG)

Grafo após o usuário selecionar seus filtros:

![Grafo 2](https://cdn.discordapp.com/attachments/490484774700318740/850465632201343046/Grafo2.PNG)

Os vértices os quais o vértice "Usuário" estão conectados representam potenciais carros que o usuário poderia se interessar.

## Instruções para executar a aplicação

Clone o repositório através do comando:
```
git clone https://github.com/theviggo/grafos-localex
```

Navegue até a pasta front-end:
```
cd front-end
```

Instale as dependências através do comando:
```
npm i
```

Execute a aplicação através do comando:
```
npm start
```
