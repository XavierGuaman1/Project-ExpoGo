![image](https://github.com/XavierGuaman1/Project-ExpoGo/assets/116098951/ff0ed42c-7e02-41b2-9ca2-a6ccfe21065a)
en la seccion de CircleButton.js se realizo un pequeño cambio para cambiar los estilos del boton. 
![image](https://github.com/XavierGuaman1/Project-ExpoGo/assets/116098951/9de43c8d-01cd-4751-95a8-60335d09916c)
en la seccion de Button.js se realizo de igual manera pequeños cambios para los colores
![image](https://github.com/XavierGuaman1/Project-ExpoGo/assets/116098951/159f9ad0-9d0d-49de-91df-d19a848edfc4)
en el apartado de App.js se realizo cambios para al momento de importar se pueda conectar para poder agregar imagenes y emojis y que los botones tengan funcionalidad 
![image](https://github.com/XavierGuaman1/Project-ExpoGo/assets/116098951/4d1631b0-34db-47cb-ac16-658c3b89e1f3)
en el EmojiList.js Renombré la variable emoji a emojiImages para hacer más evidente que es un arreglo de imágenes.
Extraje la lógica de manejo de prensa a una función separada handleEmojiPress.
Usé la función handleEmojiPress directamente en la prop onPress de Pressable para mejorar la legibilidad.
Eliminé la declaración de la variable index en el componente FlatList ya que no se utiliza y no es necesaria.
![image](https://github.com/XavierGuaman1/Project-ExpoGo/assets/116098951/cc6ba0ce-b36c-4558-9285-051194e01c08)
en EmojiPicker.js 
Consolidé las propiedades comunes de los estilos en un solo objeto, lo que hace que el código sea más limpio y fácil de mantener.
Eliminé el estilo pickerContainer ya que no se está utilizando en el código proporcionado.
Ajusté el formato del código para mejorar la legibilidad y la consistencia.
![image](https://github.com/XavierGuaman1/Project-ExpoGo/assets/116098951/559d8a05-4295-4b35-9c22-61f2d2c02991)
en EmojiSticker.js Importé específicamente los gestos PanGestureHandler y TapGestureHandler desde react-native-gesture-handler para mejorar la claridad.
Utilicé Animated.event para manejar el evento de gesto de panorámica, lo que hace que el código sea más conciso.
Cambié el nombre de doubleTap a onDoubleTapGestureEvent para que el propósito del gesto sea más claro.
Hice pequeñas mejoras en la estructura del código para mejorar la legibilidad.



¿Qué problemas específicos de rendimiento o mantenibilidad se identificaron en la aplicación original?
- al momento que tuvo que hacer cambios al momento de agregar nuevas funciones y al momento de importar ya que tuve que guiarme mucho en la documentacion
¿Cómo se aseguró que el refactoring no afectara negativamente la funcionalidad existente?
- la verdad al inicio me daba muchos errores al momento de querer vincular con el movil pero con un poco de ayuda con chatgpt lo solucione
¿Qué mejoras de rendimiento y mantenibilidad se lograron con el refactoring?
- se logro que el codigo sea mas legible y se pueda entender 
¿Cuáles fueron los desafíos más significativos durante el proceso de refactoring y cómo se superaron?
al momento que se creo nuevos archivos por lo que las importaciones no funcionaban y tuve que investigar mucho para encontrar los errores 
¿Qué impacto tuvo el refactoring en la experiencia del usuario final?
- que el codigo se puede entender y se puede manajer de una manera sencilla y divertida
¿Cómo se podrían aplicar las lecciones aprendidas en este proyecto a futuros proyectos de desarrollo y refactoring?
- al momento que se desee crear una aplicacion movil ya que es una manera facil de visualizar y entender el codigo



