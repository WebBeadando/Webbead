<?php

header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

$time = date('H:i:s');
echo "data: A jelenlegi idő: {$time}\n\n";

ob_flush();
flush(); 
?>