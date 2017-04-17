export function selectBook(book) {
    // console.log('Um livro foi selecionado: ', book.title)
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}