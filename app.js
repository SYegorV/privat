// определяем поле для вывода результата:
const output = document.querySelector('output')
const asdfg = document.querySelector('asdfg')
const createput = document.querySelector('createput')
let signMinus = false // true - number отрицательное
const textarea = document.querySelector('textarea')
const buttonout = document.querySelector('buttonout')
const outText = document.querySelector('outText')
let saveValue = 0


// поиск кнопки и добавление к кнопке обработчика события "клик":
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        //по клику вызывается функция со значением кнопки в качестве параметра
        calc(this.value)      
    })
})

// функция принимает значение кнопки
function calc(value) {
    if (value === '?') {        
        signMinus = !signMinus //смена знака
        signMinus ? asdf(): asdfg.textContent=''             
    }
    if (value === 'Create') {        
        signMinus = !signMinus //смена знака        
        const qwer = document.getElementById('id_pl_mi').value
        document.getElementById('id_pl_mi').value = 'сообщение: '        
        document.getElementById('Create_New_messeg').textContent = signMinus ? parametrsone='Написать новое сообщение': parametrstwo='Создать сообщение'
        saveText(qwer)
        createcoob()
    }
    
    if (value === 'parametrs') {
        signMinus = !signMinus //смена знака        
        document.getElementById('switchOn_switchOff_parametrs').textContent = signMinus ? parametrsone='Отключить параметры': parametrstwo='Показать параметры'        
        finish()        
    }
}

function finish() {
    if (document.getElementById('switchOn_switchOff_parametrs').textContent === 'Отключить параметры' ) {
    output.innerHTML = `<div class="box4"> <br>
        Записка самоуничтожится 
        <select>
            <option value="male" selected> после прочтения </option>
            <option value="female" > через 1 час </option>
        </select>        
        <div class="box4">
            <br>
            Секретный пароль
        </div>
        
        <div class="box5">
        Введите пароль для дешифрования записки
        </div>        
        <input type="text">        
        <div class="box5">
            <br>
            Повторите пароль
        </div>        
        <input type="text">

        <br><br>
        <div class="box4">
        Уведомление об уничтожении
        </div>
        <div class="box5">
            E-mail для получения уведомления об уничтожении записки
        </div>
        <input type="text">        
    </div>`
    }
    if (document.getElementById('switchOn_switchOff_parametrs').textContent === 'Показать параметры' ) {
        output.innerHTML = ''
    }
}

function createcoob() {
    if (document.getElementById('Create_New_messeg').textContent === 'Написать новое сообщение' ) {
        createput.innerHTML = `<div class="box7">
        Ссылка на сообщение готова:
        <p> https://github.com/privatText/github.io/${'o2crvBky'} 
        <div class="box5">
        Сообщение самоуничтожится после прочтения
        </div>
        </p>        
        </div>`
    }
    if (document.getElementById('Create_New_messeg').textContent === 'Создать сообщение' ) {
        createput.innerHTML = ''
    }
    
}

function saveText(qwer) {
    if (document.getElementById('Create_New_messeg').textContent === 'Написать новое сообщение' ) {
        saveValue++
        outText.innerHTML = `${saveValue} ${qwer} `
    }

}

function asdf() {
    asdfg.innerHTML = `<p> С помощью SharedSecret вы можете создавать сообщения, которые самоуничтожаются после, как их прочитают
    <br><br>
    1 Напишите сообщение ниже, зашифруйте его и получите ссылку
    <br>
    2 Отправьте ссылку тому, кто должен прочесть сообщение
    <br>
    3 Сообщение самоуничтожится после, как его прочитают
    <br><br>
    Нажав кнопку "параметры", вы можете указать пароль для дешифрования сообщения, установить срок действия и настроить уведомление о прочтении, когда сообщение будет уничтожено
</p>`
}