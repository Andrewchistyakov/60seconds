# Андрей Чистяков - "60seconds"

### Группа: 10 - И - 5
### Электронная почта:   [amchistyakov@edu.hse.ru](mailto:amchistyakov@edu.hse.ru)
### Tg: cnedwannabe

## Сокращения:
В сообществе интеллектуальных игр широко используются сокращения названий дисциплин, так как полные названия очень длинные, поэтому привожу их пояснение здесь.

ОД -- основная дисциплина (Что? Где? Когда?)

КИНСбФ -- командная игра на скорость без фальстартов (брейн-ринг)

ИИ -- интеллектуальные игры

СИ (ИСИ) -- Своя Игра (Индивидуальная Своя Игра)

DL -- шкала измерения сложности вопросов 

"бинго" -- общепринятое название определенного набора фактов, часто встречающихся в вопросах и/или потенциально имеющих высокий шанс встретиться в вопросе.


**[ НАЗВАНИЕ ПРОЕКТА ]**

“60seconds”

**[ ПРОБЛЕМНОЕ ПОЛЕ ]**

Обьем информации, сваливающийся на новичков в интеллектуальных играх (далее - ИИ) в наше время стремительно увеличивается, и даже в лицее заметно как после первой игры люди не остаются в сообществе. С другой стороны, опытным игрокам часто не хватает практики, так как на постоянной основе турниры проводятся только в самых крупных городах страны. Например, лицейский тренер Михаил Коблик говорит, что для успеха на соревнованиях нужно играть примерно 100 вопросов ОД в неделю. Такой обьем способны обеспечить только единичные клубы в нескольких городах. Заявляемый проект позволит решить эти проблемы, предоставив удобную платформу для тренировок различных сфер игры в ИИ.

**[ ЗАКАЗЧИК / ПОТЕНЦИАЛЬНАЯ АУДИТОРИЯ ]**

Заказчик -- ЛИК, Миронов Александр Германович

Программный продукт может заинтересовать игроков в интеллектуальные игры среднего и высокого уровня, которые уже имеют некоторый опыт и нуждаются в большом количестве практики; а также новичкам, которые только пришли в ИИ и ищут способ получить опыт и влиться в сообщество. К выделяемым группам относятся:

* Игроки в интеллектуальные игры, начиная с 9 класса
* Тренеры по интеллектуальным играм

**[ АППАРАТНЫЕ / ПРОГРАММНЫЕ ТРЕБОВАНИЯ ]** 

Продукт предполагается как веб-приложение (сайт), следовательно для его использования подойдет любое устройство, способное запустить любой совеременный браузер. 
Минимальные версии популярных браузеров:
* Chrome 71
* Edge 79
* Safari 12.1
* IOS Safari 12.2

**[ ФУНКЦИОНАЛЬНЫЕ ТРЕБОВАНИЯ ]**

Программный продукт будет предоставлять следующие возможности:
* Cоздание профиля игрока и поиск игроков.
* Загрузка пакетов вопросов Основной дисциплины, Cвоей Игры, КИНСбФ, "бинго" и др. 
* Тренировка ОД: таймер времени вопроса, текст вопроса со скрытым ответом, комментарии к вопросу.
* Тренировка СИ: вопросы на время, статистика времени нажатия кнопки, личный рейтинг.
* Тренировка КИНСбФ: вопросы на время, статистика времени нажатия кнопки, личный рейтинг.
* Тренировка скорости на кнопке: очень простые вопросы для тренировки скорости нажатия на кнопку, статистика задержки нажатия.
* Тренировка специфических знаний для ИИ ("бинго"): встроенный аналог AnkiApp/Quizlet для расширения обьема знаний, часто встречающихся в ИИ. 
* Просмотр личной статистики пользователя.
* Поиск пакета вопросов для тренировки (по названию, автору, сложности, категории)

**[ ПОХОЖИЕ / АНАЛОГИЧНЫЕ ПРОДУКТЫ ]**

Анализ 3 программных продуктов, которые максимально приближены к заданному функционалу, показал, что:

* gotquestions.online -- база вопросов для ЧГК, имеет режим тренировки, но не отображает их статистику, также полностью отсутствует "Своя игра"
* телеграм-бот "Своя игра" -- популярный в сообществе бот для тренировки "Своей игры", не имеет статистики, также недостаточно пакетов вопросов, подходящих для школьников.
* AnkiApp -- сервис для расширения обьема разносторонних знаний, широко используемый в ЧГК-сообществе. Отлично выполняет свою задачу, но сделан не для ИИ, следовательно может быть дополнен для применения в более узкой сфере.

**[ ИНСТРУМЕНТЫ РАЗРАБОТКИ, ИНФОРМАЦИЯ О БД]**

*	Java, Spring -- бэкенд
*	Vue.js или React.js -- фронтенд
*	PostgreSQL или mongoDB-- СУБД

**[ ЭТАПЫ РАЗРАБОТКИ ]**

1. Разработка пользовательских сценариев
2. Разработка фронтенда
3. Изучение необходимых инструментов бэкенд-разработки
4. Разработка бэкенда
5. Тестирование, отладка
6. Сбор и подготовка игровых материалов для запуска проекта (пакеты вопросов)
7. Подготовка проекта к защите

**[ ВОЗМОЖНЫЕ РИСКИ ]**

1. Неправильная оценка стека технологий, которые мне необходимо изучить, как следствие – нехватка времени на изучение необходимых языков программирования, фреймворков и т. п.
2. Трудности с получением достаточного
	количества игровых материалов (пакетов вопросов) для полноценного использования приложения
