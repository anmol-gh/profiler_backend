import puppeteer from "puppeteer";

async function sancharCheck(username) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate the page to a URL
    await page.goto(`https://www.sanchar.xyz/${username}`, {
        waitUntil: "load",
    });
    console.log("On: " + page.url());
    const h6 = await page.$(".h3");
    // const h6_1 = await page.waitForSelector("max-w-screen-xl mx-auto px-4 flex items-center justify-start md:px-8 mt-40", 500)
    // console.log(h6_1, "h6_1")
    // const element = h6[0];
    console.log(h6, "hi");
    // browser.close(); 
    const f = await page.$(".text-gray-600")
    // let elements = page.getElementsByClassName('max-w-screen-xl mx-auto px-4 flex items-center justify-start md:px-8 mt-40');
    console.log(f, "elements")
    let texts = await page.evaluate(() => {
        let data = [];
        let elements = document.getElementsByClassName('max-w-screen-xl mx-auto px-4 flex items-center justify-start md:px-8 mt-40');
        console.log(elements, "elements")
    });

    //     if (typeof (element) == 'undefined') {
    //         return "Unavailable";
    //     } else {
    //         const infoText = await page.evaluate(element => element.textContent, element)
    //         console.log(infoText)
    //         if (infoText == "Page not found") {
    //             return "Available";
    //         }
    //     }
}

export default sancharCheck;