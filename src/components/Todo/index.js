import React, { useState } from 'react';

const defaultItems = [
  {
    name: '😊 Smiley',
  },
  {
    name: '😂 Laughing',
  },
  {
    name: '😎 Sunglasses',
  },
  {
    name: '🚀 Rocket',
  },
  {
    name: '🍕 Pizza',
  },
  {
    name: '🎉 Party',
  },
  {
    name: '🌈 Rainbow',
  },
  {
    name: '🐱 Cat Face',
  },
  {
    name: '🌺 Flower',
  },
  {
    name: '📚 Book',
  },
  {
    name: '🎸 Guitar',
  },
  {
    name: '🍦 Ice Cream',
  },
  {
    name: '🎨 Paint Palette',
  },
  {
    name: '🎧 Headphones',
  },
  {
    name: '🚗 Car',
  },
  {
    name: '🏖️ Beach',
  },
  {
    name: '⏰ Alarm Clock',
  },
  {
    name: '✈️ Airplane',
  },
  {
    name: '🌍 Earth Globe',
  },
  {
    name: '💡 Light Bulb',
  },
];

function Todo() {
  const [text, setText] = useState('');
  const [filteredItems, setFilteredItems] = useState([...defaultItems]);

  const handleFilter = (filterText) => {
    const filtered = defaultItems.filter(item => item.name.toLowerCase().includes(filterText.toLowerCase()));
    setFilteredItems(filtered);
  };

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    handleFilter(newText);
  };

  const handleCopy = (item) => {
    navigator.clipboard.writeText(item.name);
    alert(`"${item.name}" copied to clipboard!`);
  };

  return (
    <div style={{ marginLeft: '100px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', marginRight: '100px' }}>
      <h2>😺 Emoji Search 🐱</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ fontSize: '24px', marginRight: '8px' }}></div>
        <input
          value={text}
          onChange={handleChange}
          placeholder="Filter..."
          style={{ fontSize: '16px', padding: '8px', width: '100%' }}
        />
        <div style={{ fontSize: '20px', marginLeft: '8px' }}></div>
      </div>
    
      <br />
      <br />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginLeft: '0' }}>
        {filteredItems.map((item, key) => (
          <React.Fragment key={key}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '0' }}>
              <div>{item.name}</div>
              <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#666' }} onClick={() => handleCopy(item)}>Click to copy emoji</button>
            </div>
            {key !== filteredItems.length - 1 && <hr style={{ marginLeft: '0', width: '100%', border: 'none', borderBottom: '1px solid #ccc' }} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Todo;
