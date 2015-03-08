blueimp.Gallery(
	document.getElementById('links').getElementsByTagName('a'),
	{
		container: '#home-carousel',
		carousel: true,
		startSlideshow: true,
		slideshowInterval: 7000,
		onslide: function (index, slide) {

			var text = this.list[index].getAttribute('data-description'),
			node = this.container.find('.description');
			var link = this.list[index].getAttribute('data-href'),
			node = this.container.find('.description');
			node.empty();
			if (text) {
				node[0].appendChild(document.createTextNode(text));
			}
			node[0].href = link;
		}
	}
);
