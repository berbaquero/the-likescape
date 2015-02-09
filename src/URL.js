var URL = {
	base: 'https://api.instagram.com/v1',
	auth: 'https://api.instagram.com/oauth/authorize?client_id=',
	redirectParam: '&redirect_uri=',
	responseType: '&response_type=token',
	redirect: 'http://oogwenklikes.dev/',
	userLikes: '/users/self/media/liked',
	accessToken: '?access_token=',
	count: '&count='
};

module.exports = URL;
