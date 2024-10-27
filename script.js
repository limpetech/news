const feeds = {
    "Политика": [
        "https://wtf.roflcopter.fr/rss-bridge/?action=display&username=vestiru24&bridge=TelegramBridge&format=Json",
"https://wtf.roflcopter.fr/rss-bridge/?action=display&username=prav_dnr&bridge=TelegramBridge&format=Json",
		"https://wtf.roflcopter.fr/rss-bridge/?action=display&username=panchenkodi&bridge=TelegramBridge&format=Json",
        "https://wtf.roflcopter.fr/rss-bridge/?action=display&bridge=TelegramBridge&username=%40rian_ru&format=Json",
		"https://wtf.roflcopter.fr/rss-bridge/?action=display&bridge=TelegramBridge&username=%40kaluganews&format=Json",
		"https://wtf.roflcopter.fr/rss-bridge/?action=display&bridge=TelegramBridge&username=%40Short_DPR&format=Json"
    ],
    "Технологии": [
        "https://wtf.roflcopter.fr/rss-bridge/?action=display&bridge=TelegramBridge&username=%40rozetked&format=Json",
				"https://wtf.roflcopter.fr/rss-bridge/?action=display&bridge=TelegramBridge&username=%40daneo03&format=Json",
		"https://wtf.roflcopter.fr/rss-bridge/?action=display&bridge=TelegramBridge&username=%40prohitec&format=Json",
		"https://wtf.roflcopter.fr/rss-bridge/?action=display&bridge=TelegramBridge&username=%40KOD_RU&format=Json",
       "https://wtf.roflcopter.fr/rss-bridge/?action=display&bridge=TelegramBridge&username=%40Romancev768&format=Json",
		   "https://wtf.roflcopter.fr/rss-bridge/?action=display&bridge=TelegramBridge&username=%40biggeekru&format=Json", 
	 "https://wtf.roflcopter.fr/rss-bridge/?action=display&bridge=TelegramBridge&username=%40Wylsared&format=Json",
		"https://wtf.roflcopter.fr/rss-bridge/?action=display&bridge=TelegramBridge&username=%40d_code&format=Json"
    ],
    "Спорт": [
        "https://wtf.roflcopter.fr/rss-bridge/?action=display&username=%40Match_TV&bridge=TelegramBridge&format=Json",
		"https://wtf.roflcopter.fr/rss-bridge/?action=display&username=%40rhymesport&bridge=TelegramBridge&format=Json",
		"https://wtf.roflcopter.fr/rss-bridge/?action=display&username=%40matchpremier&bridge=TelegramBridge&format=Json"
    ],
    "Автомобили": [
        "https://wtf.roflcopter.fr/rss-bridge/?action=display&username=%40dromru&bridge=TelegramBridge&format=Json",
		"https://wtf.roflcopter.fr/rss-bridge/?action=display&username=%40simply_formula&bridge=TelegramBridge&format=Json"
    ],
    "Анимация": [
        "https://wtf.roflcopter.fr/rss-bridge/?action=display&bridge=TelegramBridge&username=%40multfest&format=Json"
    ],
	"Общество": [
        "https://wtf.roflcopter.fr/rss-bridge/?action=display&username=Tapor_news&bridge=TelegramBridge&format=Json",
		"https://wtf.roflcopter.fr/rss-bridge/?action=display&username=topor&bridge=TelegramBridge&format=Json",
		"https://wtf.roflcopter.fr/rss-bridge/?action=display&username=petrovtel&bridge=TelegramBridge&format=Json",,
		"https://wtf.roflcopter.fr/rss-bridge/?action=display&username=rhymestg&bridge=TelegramBridge&format=Json",
		"https://wtf.roflcopter.fr/rss-bridge/?action=display&username=rhymesmuz&bridge=TelegramBridge&format=Json"
    ],
	"Игры": [
        "https://wtf.roflcopter.fr/rss-bridge/?action=display&bridge=TelegramBridge&username=%40thesimsclub&format=Json"
		
    ]
};



function applyStyles() {
    const styles = `
        body {
            font-family: Arial, sans-serif;
            background-color: #2664A8;
            margin: 0;
            padding: 0;
        }
        .top-menu {
            background-color: #2664A8;
            height: 40px;
            display: flex;
            align-items: center;
            padding: 0 24px;
        }
        .top-menu img {
            height: 44px;
            margin-right: 50px;
            top: -5;
        }
        .top-menu a {
            color: white;
            text-decoration: none;
            margin-right: 20px;
        }
        .services-menu {
            background-color: #333;
            color: white;
            height: 19px;
            display: flex;
            align-items: center;
            padding: 0 24px;
        }
        .services-menu a {
            color: white;
            text-decoration: none;
            margin-right: 20px;
        }
        .container {
            width: 80%;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .news-item {
            display: flex;
            align-items: center;
            border-bottom: 1px solid #ddd;
            padding: 10px 0;
            height: 168px;
        }
        .news-item:last-child {
            border-bottom: none;
        }
        .news-image {
            width: 150px;
            height: 150px;
            margin-right: 20px;
            object-fit: cover;
        }
        .news-content {
            flex: 1;
        }
        .news-title {
            font-size: 1.2em;
            color: #333;
        }
        .news-link {
            text-decoration: none;
            color: #007BFF;
        }
        .news-link:hover {
            text-decoration: underline;
        }
        .news-description {
            color: #666;
        }
        .news-author {
            font-size: 0.9em;
            color: #999;
        }
        .news-date {
            font-size: 0.9em;
            color: #999;
        }
        .categories {
            margin: 20px 0;
        }
        .categories a {
            margin-right: 15px;
            text-decoration: none;
            color: white;
        }
        .categories a:hover {
            text-decoration: underline;
        }
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        .modal-content {
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            max-width: 80%;
            max-height: 80%;
            overflow-y: auto;
        }
        .modal img {
            width: 50%; 
            height: auto; 
            max-width: 100%;
            object-fit: cover; 
        }
        .image-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        .image-grid img {
            max-width: 200px;
            height: auto;
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}

const stopWords = ['Разыгрываем', 'рашка', 'Рашка', 'Рашисты', 'рашисты'];

function containsStopWords(text) {
    if (!text) return false; // Проверка на наличие текста
    return stopWords.some(word => text.includes(word));
}

function fetchNews(category = 'all') {
    const newsContainer = document.getElementById('news-container');
    const categoryTitle = document.getElementById('category-title');
    newsContainer.innerHTML = '';
    categoryTitle.textContent = category === 'all' ? 'Агрегатор новостей' : category;
    const categories = category === 'all' ? Object.keys(feeds) : [category];
    let allItems = [];
    const fetchPromises = categories.flatMap(cat => feeds[cat].map(feedUrl => fetch(feedUrl)
        .then(response => response.json())
        .then(data => data.items)
        .catch(error => {
            console.error('Error fetching news:', error);
            return [];
        })
    ));
    Promise.all(fetchPromises).then(results => {
        allItems = results.flat();
        allItems = allItems.filter(item => !containsStopWords(item.title) && !containsStopWords(item.summary));
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
    const scrollPosition = window.scrollY; // Сохраняем текущее положение прокрутки

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

    modal.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        document.body.removeChild(modal);
        window.scrollTo(0, scrollPosition); // Восстанавливаем положение прокрутки
    });

    document.body.appendChild(modal);
    window.scrollTo(0, scrollPosition); // Восстанавливаем положение прокрутки
}

document.addEventListener('DOMContentLoaded', () => fetchNews('all'));



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
