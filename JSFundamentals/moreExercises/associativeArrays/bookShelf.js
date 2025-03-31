function manageLibrary (input) {
    let libraryObj = {};

    for (command of input) {
        if (command.includes('->')) {
            let [shelfId, shelfGenre] = command.split(' -> ');
            libraryObj = addShelf(shelfId, shelfGenre, libraryObj);
        } else {
            let [bookTitle, bookInfo] = command.split(': ')
            let [bookAuthor, bookGenre] = bookInfo.split(', ');

            libraryObj = addBook(bookAuthor, bookTitle, bookGenre, libraryObj);
        }
    }

    printLibrary(libraryObj);

    function addShelf (id, genre, library) {
        if (!library[id]) {
            library[id] = {
                genre: genre,
                books: [],
            };
        }

        return library;
    }

    function addBook (author, title, genre, library) {
        for (let shelfId of Object.keys(library)){
            if (library[shelfId]['genre'] === genre) {
                let bookObj = {
                    title,
                    author
                };
                
                library[shelfId]['books'].push(bookObj);
                break;
            }
        }
        
        return library;
    }

    function sortLibrary (library) {
        let sortedLibrary = Object.entries(library).sort(
            (a, b) => b[1]['books'].length - a[1]['books'].length
        );

        return sortedLibrary;
    }

    function sortBooks (shelf) {
        let sortedBooks = shelf.sort((a, b) => a.title.localeCompare(b.title));
        return sortedBooks;
    }

    function printLibrary(library) {
        let sortedShelves = sortLibrary(library);
        for (let shelf of sortedShelves) {
            let shelfId = shelf.shift();
            let shelfObj = shelf.shift();

            console.log(`${shelfId} ${shelfObj.genre}: ${shelfObj.books.length}`);
            
            let sortedBooks = sortBooks(shelfObj.books);

            for (let book of sortedBooks) {
                console.log(`--> ${book.title}: ${book.author}`);
            }

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