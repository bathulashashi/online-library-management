import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Fiction', coverImage: 'https://covers.openlibrary.org/b/id/7222246-L.jpg' },
  { id: 2, title: 'A Brief History of Time', author: 'Stephen Hawking', category: 'Non-Fiction', coverImage: 'https://covers.openlibrary.org/b/id/8371161-L.jpg' },
  { id: 3, title: '1984', author: 'George Orwell', category: 'Fiction', coverImage: 'https://covers.openlibrary.org/b/id/7222248-L.jpg' },
  { id: 4, title: 'The Martian', author: 'Andy Weir', category: 'Sci-Fi', coverImage: 'https://covers.openlibrary.org/b/id/10444672-L.jpg' },
  { id: 5, title: 'Sapiens', author: 'Yuval Noah Harari', category: 'Non-Fiction', coverImage: 'https://covers.openlibrary.org/b/id/8231856-L.jpg' },
  { id: 6, title: 'Dune', author: 'Frank Herbert', category: 'Sci-Fi', coverImage: 'https://covers.openlibrary.org/b/id/8465410-L.jpg' },
  { id: 7, title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'Fiction', coverImage: 'https://covers.openlibrary.org/b/id/8225261-L.jpg' },
  { id: 8, title: 'The Catcher in the Rye', author: 'J.D. Salinger', category: 'Fiction', coverImage: 'https://covers.openlibrary.org/b/id/8231852-L.jpg' },
  { id: 9, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', category: 'Fantasy', coverImage: 'https://covers.openlibrary.org/b/id/8231991-L.jpg' },
  { id: 10, title: 'The Hobbit', author: 'J.R.R. Tolkien', category: 'Fantasy', coverImage: 'https://covers.openlibrary.org/b/id/6979861-L.jpg' },
  { id: 11, title: 'Fahrenheit 451', author: 'Ray Bradbury', category: 'Sci-Fi', coverImage: 'https://covers.openlibrary.org/b/id/11153227-L.jpg' },
  { id: 12, title: 'Brave New World', author: 'Aldous Huxley', category: 'Sci-Fi', coverImage: 'https://covers.openlibrary.org/b/id/8776040-L.jpg' },
  { id: 13, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', category: 'Classic', coverImage: 'https://covers.openlibrary.org/b/id/7222276-L.jpg' },
  { id: 14, title: 'War and Peace', author: 'Leo Tolstoy', category: 'Classic', coverImage: 'https://covers.openlibrary.org/b/id/7222245-L.jpg' },
  { id: 15, title: 'Pride and Prejudice', author: 'Jane Austen', category: 'Classic', coverImage: 'https://covers.openlibrary.org/b/id/8091016-L.jpg' },
  { id: 16, title: 'Jane Eyre', author: 'Charlotte Brontë', category: 'Classic', coverImage: 'https://covers.openlibrary.org/b/id/8101283-L.jpg' },
  { id: 17, title: 'Moby-Dick', author: 'Herman Melville', category: 'Classic', coverImage: 'https://covers.openlibrary.org/b/id/7222250-L.jpg' },
  { id: 18, title: 'The Odyssey', author: 'Homer', category: 'Classic', coverImage: 'https://covers.openlibrary.org/b/id/7222235-L.jpg' },
  { id: 19, title: 'The Iliad', author: 'Homer', category: 'Classic', coverImage: 'https://covers.openlibrary.org/b/id/7222236-L.jpg' },
  { id: 20, title: 'Meditations', author: 'Marcus Aurelius', category: 'Philosophy', coverImage: 'https://covers.openlibrary.org/b/id/10557339-L.jpg' },
  { id: 21, title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', category: 'Non-Fiction', coverImage: 'https://covers.openlibrary.org/b/id/7549256-L.jpg' },
  { id: 22, title: 'The Power of Habit', author: 'Charles Duhigg', category: 'Non-Fiction', coverImage: 'https://covers.openlibrary.org/b/id/7279251-L.jpg' },
  { id: 23, title: 'Atomic Habits', author: 'James Clear', category: 'Non-Fiction', coverImage: 'https://covers.openlibrary.org/b/id/10525274-L.jpg' },
  { id: 24, title: 'Educated', author: 'Tara Westover', category: 'Biography', coverImage: 'https://covers.openlibrary.org/b/id/11119809-L.jpg' },
  { id: 25, title: 'Becoming', author: 'Michelle Obama', category: 'Biography', coverImage: 'https://covers.openlibrary.org/b/id/10159583-L.jpg' },
  { id: 26, title: 'Steve Jobs', author: 'Walter Isaacson', category: 'Biography', coverImage: 'https://covers.openlibrary.org/b/id/7222273-L.jpg' },
  { id: 27, title: 'Elon Musk', author: 'Ashlee Vance', category: 'Biography', coverImage: 'https://covers.openlibrary.org/b/id/8275861-L.jpg' },
  { id: 28, title: 'The Lean Startup', author: 'Eric Ries', category: 'Business', coverImage: 'https://covers.openlibrary.org/b/id/7814149-L.jpg' },
  { id: 29, title: 'Zero to One', author: 'Peter Thiel', category: 'Business', coverImage: 'https://covers.openlibrary.org/b/id/8227266-L.jpg' },
  { id: 30, title: 'The Intelligent Investor', author: 'Benjamin Graham', category: 'Business', coverImage: 'https://covers.openlibrary.org/b/id/8226191-L.jpg' },
  { id: 31, title: 'Rich Dad Poor Dad', author: 'Robert T. Kiyosaki', category: 'Business', coverImage: 'https://covers.openlibrary.org/b/id/11153311-L.jpg' },
  { id: 32, title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', category: 'Fantasy', coverImage: 'https://covers.openlibrary.org/b/id/7884866-L.jpg' },
  { id: 33, title: 'Harry Potter and the Chamber of Secrets', author: 'J.K. Rowling', category: 'Fantasy', coverImage: 'https://covers.openlibrary.org/b/id/7884875-L.jpg' },
  { id: 34, title: 'Harry Potter and the Prisoner of Azkaban', author: 'J.K. Rowling', category: 'Fantasy', coverImage: 'https://covers.openlibrary.org/b/id/7884884-L.jpg' },
  { id: 35, title: 'Harry Potter and the Goblet of Fire', author: 'J.K. Rowling', category: 'Fantasy', coverImage: 'https://covers.openlibrary.org/b/id/7884890-L.jpg' },
  { id: 36, title: 'Harry Potter and the Order of the Phoenix', author: 'J.K. Rowling', category: 'Fantasy', coverImage: 'https://covers.openlibrary.org/b/id/7884895-L.jpg' },
  { id: 37, title: 'Harry Potter and the Half-Blood Prince', author: 'J.K. Rowling', category: 'Fantasy', coverImage: 'https://covers.openlibrary.org/b/id/7884902-L.jpg' },
  { id: 38, title: 'Harry Potter and the Deathly Hallows', author: 'J.K. Rowling', category: 'Fantasy', coverImage: 'https://covers.openlibrary.org/b/id/7884909-L.jpg' },
  { id: 39, title: 'The Alchemist', author: 'Paulo Coelho', category: 'Fiction', coverImage: 'https://covers.openlibrary.org/b/id/8226195-L.jpg' },
  { id: 40, title: 'The Kite Runner', author: 'Khaled Hosseini', category: 'Fiction', coverImage: 'https://covers.openlibrary.org/b/id/8231993-L.jpg' },
  { id: 41, title: 'A Thousand Splendid Suns', author: 'Khaled Hosseini', category: 'Fiction', coverImage: 'https://covers.openlibrary.org/b/id/8373131-L.jpg' },
  { id: 42, title: 'The Road', author: 'Cormac McCarthy', category: 'Fiction', coverImage: 'https://covers.openlibrary.org/b/id/7222278-L.jpg' },
  { id: 43, title: 'Life of Pi', author: 'Yann Martel', category: 'Fiction', coverImage: 'https://covers.openlibrary.org/b/id/7222260-L.jpg' },
  { id: 44, title: 'The Shining', author: 'Stephen King', category: 'Horror', coverImage: 'https://covers.openlibrary.org/b/id/11153239-L.jpg' },
  { id: 45, title: 'It', author: 'Stephen King', category: 'Horror', coverImage: 'https://covers.openlibrary.org/b/id/11153235-L.jpg' },
  { id: 46, title: 'Dracula', author: 'Bram Stoker', category: 'Horror', coverImage: 'https://covers.openlibrary.org/b/id/7222277-L.jpg' },
  { id: 47, title: 'Frankenstein', author: 'Mary Shelley', category: 'Horror', coverImage: 'https://covers.openlibrary.org/b/id/7222258-L.jpg' },
  { id: 48, title: 'The Da Vinci Code', author: 'Dan Brown', category: 'Thriller', coverImage: 'https://covers.openlibrary.org/b/id/7222290-L.jpg' },
  { id: 49, title: 'Angels & Demons', author: 'Dan Brown', category: 'Thriller', coverImage: 'https://covers.openlibrary.org/b/id/7222291-L.jpg' },
  { id: 50, title: 'Inferno', author: 'Dan Brown', category: 'Thriller', coverImage: 'https://covers.openlibrary.org/b/id/7222292-L.jpg' },
]
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => { state.books.push(action.payload); },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;