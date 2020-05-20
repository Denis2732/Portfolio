<?
if((isset($_POST['org'])&&$_POST['org']!="")&&(isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")&&(isset($_POST['email'])&&$_POST['email']!="")&&(isset($_POST['site'])&&$_POST['site']!="")&&(isset($_POST['sms'])&&$_POST['sms']!="")&&(isset($_POST['chek'])&&$_POST['chek']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'plotnikovdo@yandex.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Обратная связь'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Компания: '.$_POST['org'].'</p>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                        <p>Email: '.$_POST['email'].'</p>
                        <p>Сайт: '.$_POST['site'].'</p> 
                        <p>Сообщение: '.$_POST['sms'].'</p> 
                        <p>Согласие: '.$_POST['chek'].'</p>                      
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>