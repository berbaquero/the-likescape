var URL = {
	base: 'https://api.instagram.com/v1',
	auth: 'https://api.instagram.com/oauth/authorize?client_id=',
	redirectParam: '&redirect_uri=',
	responseType: '&response_type=token',
	redirect: 'http://berbaquero.com/the-likescape/',
	userLikes: '/users/self/media/liked',
	userInfo: '/users/self/',
	accessToken: '?access_token=',
	count: '&count='
};

export default URL;
