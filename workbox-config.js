module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{yml,md,html,png,css,gif,GIF,jpeg,mp4,jpg,rtf,webp,js,pdf,mkv,ico,xml,json,txt,ai,svg,zip,lock}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};