<?php
$name = $_POST['name'];
$service = $_POST['service'];
$name = htmlspecialchars($name);
$service = htmlspecialchars($service);
$name = urldecode($name);
$service = urldecode($service);
$name = trim($name);
$service = trim($service);
//echo $fio;
//echo "<br>";
//echo $email;
if (mail("bbbiii.444@yandex.ru", "Заявка с сайта", "ФИО:".$name.". E-mail: ".$service ,"From: bbbiii.444@yandex.ru \r\n"))
 {     echo "заявка успешно отправлена";
} else {
    echo "при отправке заявки возникла ошибка";
}?>