<?php
//если была нажата кнопка Send
if($_REQUEST['ButtonSend']) {
 //если был использован метод POST
 if($_SERVER['REQUEST_METHOD']=='POST') {
  if((isset($_POST['text']) && $_POST['text']!="")) {
   //почта получателя
   $to = '15dana15@mail.ru'; 
   //загаловок сообщения
   $subject = 'сообщение'; 
   //сообщение в виде текста
   $message = $_POST['text'];
   //кодировка сообщения для текста
   $headers = "Content-type: text/plain; charset=utf-8 \r\n";
   //отправка письма
   mail($to, $subject, $message, $headers);
  }
 }
}
?>