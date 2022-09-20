module.exports = async (browser) => {
    const page = await browser.newPage();

    page.setCookie(
        { domain: 'www.tara.example.com', name: 'staging', value: 'true' },
    );
};
