<a href="task92.php?category=sport">Sport news</a> | <a href="task92.php?category=politics">Politic news</a><br/><br/>
<a href="task92.php?category=sport&format=json">Sport news (JSON)</a> | <a href="task92.php?category=politics&format=json">Politic news (JSON)</a><br/><br/>

<?php

$news = ["sport"=>["C. Ronaldo has scored three goals in last five matches","Golovkin has won match for title"],"politics"=>["Trump has cancelled his visit to North Corea, because of sanction","N. Nazarbayev has approved new version of alphabet"]];
$category = ["sport"];

$politics = json_encode($news['politics']);
$sport = json_encode($news['sport']);

$forme1 = $news['politics'];

$forme2 = $news['sport'];

$polit = json_decode($politics);



if(isset($_GET['category'])){
	if ($_GET['category'] == 'politics'){
	if (isset($_GET['format'])){
		if($_GET['format'] == 'json'){
			echo $politics;
		}
	}
	else{
		for ($i=0; $i <count($forme1) ; $i++) { 
			echo '<h3>'.$forme1[$i].'</h3>';
			echo '<hr>';
		}
	}	
}
	elseif($_GET['category'] == 'sport'){
		if(isset($_GET['format'])){
			if($_GET['format'] == 'json'){
				echo $sport;
			}
		}
		else{
			for ($i=0; $i <count($forme2) ; $i++) { 
				echo '<h3>'.$forme2[$i].'</h3>';
				echo '<hr>';
			}
		}
	}	
}
?>