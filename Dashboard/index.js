const API_KEY = "pwru2cb88ddc9z4yqy0c3seppd5oainjsefr3aub";
const ARTICLE_AREA = d3.select("#article-area");
var allArticles;

function getNews(ticker){
    if (!ticker){
        ticker = "tsla,ffie,fsr,psny,rivn,li,xpev,lcid,nio,nkla";
    }

    d3.json(`https://stocknewsapi.com/api/v1?tickers=${ticker}&items=10&page=1&token=${API_KEY}`).then((data)=>{
        allArticles = data.data;
        buildArticles();
    })
}

function buildArticles(){
    ARTICLE_AREA.html("");

    allArticles.forEach(article => {
        ARTICLE_AREA.append("div")
            .html(`<div class="row mb-3">
            <div class="col-12">
                <a target="__blank" href="${article.news_url}" class="link-primary"><h6>${article.title}</h6></a>
            </div>
            <div><div class="row">
                <div class="col-12" style="font-size:.75rem">
                    ${article.text.substring(0,101)}...
                </div>
            </div><div class="row">
                <div class="col-12" style="font-size:.75rem">
                    <b>${article.tickers}</b>
                </div>
            </div>
            `);
    })
}

getNews();