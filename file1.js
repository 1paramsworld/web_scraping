const request=require("request-promise");
const cheerio=require("cheerio");

async function scrapping(){
    const url="https://www.imdb.com/title/tt0102926/";
    const response=await request(url);
    const $=cheerio.load(response);
    const title=$("span[class='hero__primary-text']").text();
    console.log(title)

    const navs=$("div[class='sc-66ec1b32-0 kbbKze']").text();
    console.log(navs)

    const aValues = [];
        $("a").each((index, element) => {
            const href = $(element).attr("href");
            if (href) {
                aValues.push(href);
            }
});
console.log(aValues)

    }

scrapping()
