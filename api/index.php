<?php
/*
	query the api to get info
*/

//import constant
include('ApiSettings.php');

/*
	get parameters
*/

$action = $_GET['actionParam']; 
$query = isset($_GET['queryParam']) ? $_GET['queryParam'] : '';
$id = isset($_GET['idParam']) ? $_GET['idParam'] : ''; 
$numPage = isset($_GET['pageParam']) ? $_GET['pageParam'] : '';

switch($action) {
	//construct the url for search all actors
    case 'listActor':
		$url=API_URL."/search/person?api_key=".API_KEY."&query=".urlencode($query)."&page=$numPage";
		getData($url);
        break;
	//construct the url for actor id
    case 'detailActor':
        $url=API_URL."/person/$id?api_key=".API_KEY;
		getData($url);
        break;
	//construct the url for actor credits
	case 'movieCredits':
        $url=API_URL."/person/$id/movie_credits?api_key=".API_KEY;
		getData($url);
        break;	
	//construct the url for search all movies
	case 'listMovies':
        $url=API_URL."/search/movie?api_key=".API_KEY."&query=".urlencode($query)."&page=$numPage";
		getData($url);
        break;
	//construct the url for a movie id
    case 'detailMovies':
        $url=API_URL."/movie/$id?api_key=".API_KEY;
		getData($url);		
        break;
	//construct the url for movie credits
	case 'credits':
        $url=API_URL."/movie/$id/credits?api_key=".API_KEY;
		getData($url);		
        break;
	//construct the url for the most popular movies
	case 'popularMovies':
        $url=API_URL."/discover/movie?api_key=".API_KEY."&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
		getData($url);		
        break;
	//construct the url for	movies in theatres
	case 'inTheatresMovies':
        $url=API_URL."/discover/movie?api_key=".API_KEY."&language=en-US&primary_release_date.gte=2016-09-15&primary_release_date.lte=2016-10-22&page=1";
		getData($url);		
        break;
}

/*
	
	Function that call api the themoviedb.org to get info
	
	@$urlParam  url of the api with the different params
*/

function getData($urlParam)
{
	header('Content-Type: application/json');
	$response = file_get_contents($urlParam);
	$response = json_decode($response); 
	print_r(json_encode($response));
}
?>
