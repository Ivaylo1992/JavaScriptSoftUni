function manageLibrary (input) {
    let libraryObj = {};

    for (command of input) {
        if (command.includes('->')) {
            let [shelfId, shelfGenre] = command.split(' -> ');
            libraryObj = addShelf(shelfId, shelfGenre, libraryObj);
        } else {
            let [bookTitle, bookInfo] = command.split(': ')
            let titleStr = bookTitle.shift();
            let [bookAuthor, bookGenre] = bookInfo.split(', ');
        }
    }
    console.log(libraryObj);
    

    function addShelf (id, genre, library) {
        if (!library[id]) {
            library[id] = {};
            library[id].genre = genre;
            library[id].books = [];
            library[id].booksCount = 0;
        }

        return library;
    }

    function addBook (author, genre, library) {
        for (let shelf of Object.keys.library()){
            
        }
    }
}

manageLibrary(['1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history']);