export const healthCheck = (req, res) => {
    console.log('It Works!');
    res.send('It works!');
}

export const postTweet = (req, res) => {
    // const tweet = req.body;

    res.send('It works the POST!');


}
