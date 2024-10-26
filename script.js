const feeds = {
    "Политика": [
        "https://wtf.roflcopter.fr/rss-bridge/?action=display&username=vestiru24&bridge=TelegramBridge&format=Json",
		"https://wtf.roflcopter.fr/rss-bridge/?action=display&username=panchenkodi&bridge=TelegramBridge&format=Json",
        "https://wtf.roflcopter.fr/rss-bridge/?action=display&bridge=TelegramBridge&username=%40rian_ru&format=Json",
		"https://wtf.roflcopter.fr/rss-bridge/?action=display&bridge=TelegramBridge&username=%40kaluganews&format=Json",
		"https://wtf.roflcopter.fr/rss-bridge/?action=display&bridge=TelegramBridge&username=%40@Short_DPR&format=Json"
    ],
    "Технологии": [
        "https://wtf.roflcopter.fr/rss-bridge/?action=display&bridge=TelegramBridge&username=%40rozetked&format=Json",
       "https://wtf.roflcopter.fr/rss-bridge/?action=display&bridge=TelegramBridge&username=%40Romancev768&format=Json",
	   "https://wtf.roflcopter.fr/rss-bridge/?action=display&bridge=TelegramBridge&username=%40Wylsared&format=Json",
		"https://wtf.roflcopter.fr/rss-bridge/?action=display&bridge=TelegramBridge&username=d_code&format=Json"
    ],
    "Спорт": [
        "https://wtf.roflcopter.fr/rss-bridge/?action=display&username=Match_TV&bridge=TelegramBridge&format=Json",
		"https://wtf.roflcopter.fr/rss-bridge/?action=display&username=matchpremier&bridge=TelegramBridge&format=Json"
    ],
    "Автомобили": [
        "https://wtf.roflcopter.fr/rss-bridge/?action=display&username=dromru&bridge=TelegramBridge&format=Json"
    ],
    "Анимация": [
        "https://wtf.roflcopter.fr/rss-bridge/?action=display&bridge=TelegramBridge&username=%40multfest&format=Json"
    ]
	"Игры": [
        "https://wtf.roflcopter.fr/rss-bridge/?action=display&bridge=TelegramBridge&username=%40thesimsclub&format=Json"
		
    ]
};

function fetchNews(category = 'all') {
    const newsContainer = document.getElementById('news-container');
    const categoryTitle = document.getElementById('category-title');
    newsContainer.innerHTML = '';
    categoryTitle.textContent = category === 'all' ? 'Агрегатор новостей' : category;
    const categories = category === 'all' ? Object.keys(feeds) : [category];
    let allItems = [];

    const fetchPromises = categories.flatMap(cat => 
        feeds[cat].map(feedUrl => 
            fetch(feedUrl)
                .then(response => response.json())
                .then(data => data.items)
                .catch(error => {
                    console.error('Error fetching news:', error);
                    return [];
                })
        )
    );

    Promise.all(fetchPromises).then(results => {
        allItems = results.flat();
        allItems.sort((a, b) => new Date(b.date_modified) - new Date(a.date_modified));
        displayNews(allItems);
    });
}

function displayNews(items) {
    const newsContainer = document.getElementById('news-container');
    items.forEach(item => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';

        getImageUrlFromContentHtml(item.content_html).then(imageUrl => {
            const newsImage = document.createElement('img');
            newsImage.className = 'news-image';
            newsImage.src = imageUrl || 'notfound.png';
            newsImage.alt = item.title;

            const newsContent = document.createElement('div');
            newsContent.className = 'news-content';

            const newsTitle = document.createElement('div');
            newsTitle.className = 'news-title';
            newsTitle.textContent = item.title;

            const newsLink = document.createElement('a');
            newsLink.className = 'news-link';
            newsLink.href = '#';
            newsLink.appendChild(newsTitle);
            newsLink.addEventListener('click', () => {
                showModal(item.content_html, item.attachments);
            });

            const newsDescription = document.createElement('div');
            newsDescription.className = 'news-description';
            newsDescription.textContent = item.summary || '';

            const newsAuthor = document.createElement('div');
            newsAuthor.className = 'news-author';
            newsAuthor.textContent = `Автор: ${item.author.name}`;

            const newsDate = document.createElement('div');
            newsDate.className = 'news-date';
            const date = new Date(item.date_modified);
            newsDate.textContent = `${date.getHours()}:${date.getMinutes()} ${date.getDate()} ${date.toLocaleString('ru', { month: 'short' })} ${date.getFullYear()}`;

            newsContent.appendChild(newsLink);
            newsContent.appendChild(newsDescription);
            newsContent.appendChild(newsAuthor);
            newsContent.appendChild(newsDate);

            newsItem.appendChild(newsImage);
            newsItem.appendChild(newsContent);

            newsContainer.appendChild(newsItem);
        });
    });
}

function getImageUrlFromContentHtml(contentHtml) {
    return new Promise((resolve) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(contentHtml, 'text/html');
        const videos = doc.querySelectorAll('video');

        if (videos.length > 0) {
            const video = videos[0];
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            video.addEventListener('loadeddata', () => {
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                const imageUrl = canvas.toDataURL('image/png');
                resolve(imageUrl);
            });
            video.load();
        } else {
            const images = doc.querySelectorAll('img');
            for (let img of images) {
                if (img.src.includes('cdn4.cdn-telegram.org')) {
                    resolve(img.src);
                    return;
                }
            }
            resolve(null);
        }
    });
}

function showModal(content, attachments) {
    const modal = document.createElement('div');
    modal.className = 'modal';

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    if (attachments && attachments.length > 0) {
        const grid = document.createElement('div');
        grid.className = 'image-grid';
        attachments.forEach(attachment => {
            const img = document.createElement('img');
            img.src = attachment.url;
            img.style.maxWidth = '200px';
            img.style.height = 'auto';
            grid.appendChild(img);
        });
        modalContent.appendChild(grid);
    }

    const contentDiv = document.createElement('div');
    contentDiv.innerHTML = content;
    modalContent.appendChild(contentDiv);

    modal.appendChild(modalContent);
    modal.addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    document.body.appendChild(modal);

    // Открытие ссылок с доменами telegram.org и t.me в новой вкладке
    const links = modalContent.querySelectorAll('a');
    links.forEach(link => {
        if (link.href.includes('telegram.org') || link.href.includes('t.me')) {
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        }
    });
}

function showCategory(category) {
    fetchNews(category);
}

document.addEventListener('DOMContentLoaded', () => fetchNews('all'));

document.addEventListener('DOMContentLoaded', function() {
    const url = 'https://www.cbr-xml-daily.ru/daily.xml';
    const currencyRatesDiv = document.getElementById('currency-rates');

    fetch(url)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, 'text/xml');
            const usd = xmlDoc.querySelector('Valute[ID="R01235"] Value').textContent;
            const eur = xmlDoc.querySelector('Valute[ID="R01239"] Value').textContent;

            currencyRatesDiv.innerHTML = `Курс доллара: ${usd} руб. | Курс евро: ${eur} руб.`;
        })
        .catch(error => {
            console.error('Ошибка при получении курсов валют:', error);
            currencyRatesDiv.innerHTML = 'Не удалось загрузить курсы валют';
        });
});
