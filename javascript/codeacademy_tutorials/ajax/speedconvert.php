<?php

function fetch($name){
	return (isset($_GET[$name]) ? $_GET[$name] : '');
}
$out = array(
	'mph'=> null,
	'kph'=>null,
	'fps'=>null,
	'mps'=>null
);


$speed = fetch('speed');
if(is_numeric($speed)){
	$speed=(float)$speed;
}
else{
	$speed = 0;
}

$unit=strtolower(fetch('unit'));
if(!array_key_exists($unit, $out)){
	$unit='mph';
}
$factor = array(
	"mph"=> 1,
	"kph"=>1.609,
	"fps"=>1.467,
	"mps"=>0.447,
);
$out[$unit]=$speed;
$out["mph"]=$speed * 1/$factor[$unit];

foreach ($out as $u => $v){
	$out[$u]=round($out["mph"]*$factor[$u], 2);
}

switch(strtolower(fetch('format'))){
	case 'text':
		header('Content-type: text/plain; charset=ITF-8');
		foreach ($out as $n=>$v){
			echo $n, ':', $v, "\n";
		}
		break;

	case 'html':
		header('Content-type: text/html; charset=ITF-8');
		echo "<table> \n";
		foreach ($out as $n=>$v){
			echo '<tr><th>', $n, '</th><td>', number_format($v, 2), "</td></tr> \n";
		}
		echo '</table>';
		break;

	case 'xml':
		header('Content-type: text/xml; charset=ITF-8');
		$xml=new SimpleXMLElement('<speed/>');
		array_walk($out, create_function('$i, $k', 'global $xml; $xml->addChild($k, $i);'));
		echo $xml->asXML();
		break;

	case 'jsonp':
		header('Content-type: application/javascript; charset=ITF-8');
		echo fetch('callback'), '(', json_encode($out), ');';
		break;

	default:
		header('Content-type: application/json; charset=ITF-8');
		echo json_encode($out);
		break;
}
?>