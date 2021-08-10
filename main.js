// события

//события клавиатуры, инпутов, мыши
//"Событие"(Event) ->  ищет обработчик -> функция(обработчик, слушатель, коллбэк, подписчик)
//Браузер генерирует объект со сведениями о произошедшем собитии -> event? ev, e
//Вызывает обработчик с нашим объектом в качестве параметра

const sml = document.getElementById('small')
const med = document.getElementById('medium')
const big = document.getElementById('big')

/*const OnClickHandler = (e) => {
    if(e.target.tagName === 'BUTTON'){
        console.log(e.target.name)
    }*/

const OnClickHandler = (e) => {
        e.stopPropagation() //способ отмены действия обработчика
}
/*console.log(sml.onclick)
sml.onclick = OnClickHandler
sml.onclick = null*/ // способ очистки события

sml.addEventListener('click', OnClickHandler)
/*med.addEventListener('click', OnClickHandler)
big.addEventListener('click', OnClickHandler)*/

med.addEventListener('click', ()=>alert('mdm'))
big.addEventListener('click', ()=>alert('big'))


/*sml.removeEventListener('click', OnClickHandler) // метод удаления обработчика события
sml.addEventListener('click', OnClickHandler2)*/ // можно повесить несколько обработчиков события на addEventListener

//e.target -> элемент, который сгенерировал событие
//e.currentTarget -> элемент, который вызвал обработчик в процессе всплытия

//e.preventDefault  - метод отмены действия элемента по умолчанию. создаем ссылку, например.
// Превендефолтом убираем ее поведение и алертом, например, заставляем ее вызывать алерт при нажатии