function manageComments (input) {
    let users = [];
    let articles = [];
    let comments = {};

    for (let data of input) {
        if (data.includes('user')) {
            let [_, user] = data.split(' ');
            users.push(user);

        } else if (data.includes('article')) {
            let [_, article] = data.split(' ');
            articles.push(article);
        } else {
            let [postInfo, commentInfo] = data.split(': ');
            let [user, article] = postInfo.split(' posts on ');
            let [title, content] = commentInfo.split(', ');

            if (articles.includes(article) && users.includes(user)){
                if (!comments[article]) {
                    comments[article] = [];
                    comments[article]['commentsCount'] = 0;
                }

                let newComment = {user, title, content};
                comments[article].push(newComment);
                comments[article]['commentsCount'] += 1;
            }
        }
    }

    sortedComments = Object.entries(comments).sort((a, b) => b[1]['commentsCount'] - a[1]['commentsCount']);
    
    for (let info of sortedComments) {
        let article = info[0];

        console.log(`Comments on ${article}`);
        sortedArticleComments = info[1].sort((a, b) => a.user.localeCompare(b.user));

        for (let comment of sortedArticleComments) {
            console.log(`--- From user ${comment.user}: ${comment.title} - ${comment.content}`);   
        }
    }
}

manageComments(['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 'article Bobby', 'article Steven', 'user Liam', 'user Henry', 'Mark posts on Bobby: Is, I do really like them', 'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like'])