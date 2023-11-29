import { render, screen, fireEvent } from '@testing-library/react';
import Todo from './index'; // Dosya adını 'index' olarak güncelledik

// Başlık kısmının başarılı bir şekilde render edildiğini kontrol et
test('renders Todo title', () => {
  render(<Todo />);
  const titleElement = screen.getByText(/Emoji Search/i);
  expect(titleElement).toBeInTheDocument();
});

// Uygulama ilk açıldığında emoji listesinin başarılı bir şekilde render edildiğini kontrol et
test('renders initial emoji list', () => {
  render(<Todo />);
  const emojiListElement = screen.getByText(/Smiley/i); // İlk emojinin adına göre kontrol et
  expect(emojiListElement).toBeInTheDocument();
});

// Bir filtreleme işlemi yapıldığında emoji listesinin bu filtreye uygun şekilde yeniden render edildiğini kontrol et
test('filters and renders emoji list', () => {
  render(<Todo />);
  const inputElement = screen.getByPlaceholderText(/Filter.../i);
  
  // Filtreleme için inputa değer gir
  fireEvent.change(inputElement, { target: { value: 'Rocket' } });

  // Filtrelenmiş emoji listesinin başarılı bir şekilde render edildiğini kontrol et
  const filteredEmojiElement = screen.getByText(/Rocket/i);
  expect(filteredEmojiElement).toBeInTheDocument();
});
