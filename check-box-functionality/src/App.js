import './App.css';
import React, { useState } from 'react'

const data = [
  {
    id: 1,
    name: 'abhishek 1',
    class: 'mca',
    subject: 'maths'
  },
  {
    id: 2,
    name: 'abhishek 2',
    class: 'mca',
    subject: 'maths'
  },
  {
    id: 3,
    name: 'abhishek 3',
    class: 'mca',
    subject: 'maths'
  },
  {
    id: 4,
    name: 'abhishek 4',
    class: 'mca',
    subject: 'maths'
  },
  {
    id: 5,
    name: 'abhishek 5',
    class: 'mca',
    subject: 'maths'
  },
  {
    id: 6,
    name: 'abhishek 6',
    class: 'mca',
    subject: 'maths'
  },
  {
    id: 7,
    name: 'abhishek 7',
    class: 'mca',
    subject: 'maths'
  },
]

function App() {

  const [allCheckedValue, setAllCheckedValue] = useState([]);
  const [checkedAll, setCheckedAll] = useState(false);

  console.log('checked data', allCheckedValue)

  const checkedAllCheckbox = (id) => {
    if (id) {
      let allCheck = data.map((data, i) => { return data.id });
      setAllCheckedValue(allCheck);
    } else {
      setAllCheckedValue([]);
    }
    setCheckedAll(id);
  };

  const onCheckedValue = (id) => {
    let newArr;
    if (allCheckedValue.includes(id)) {
      newArr = allCheckedValue.filter( (data) => data !== id);
    } else {
      newArr = [...allCheckedValue, id];
    }
    if (newArr.length === data.length) {
      setCheckedAll(true);
      setAllCheckedValue(newArr);
    } else {
      setCheckedAll(false);
      setAllCheckedValue(newArr);
    }
  };


  return (
    <div>
      <div>
        <span style={{color:'red'}}>All check</span>
        <input
          type="checkbox"
          name="check_all"
          onChange={(e) => checkedAllCheckbox(e.target.checked)}
          checked={checkedAll}
          className="custom-control-input"
          id={"checkAll"}
        />
      </div>
      {
        data !== '' ? <div>
          {data.map((item, index) => (
            <div key={index}>
              <span>{item.name}</span>
              <input
                type="checkbox"
                name={item.id}
                onChange={(e) => onCheckedValue(item.id, e.target.checked)}
                checked={allCheckedValue.includes(item.id)}
                className="custom-control-input"
                id={"check" + item.id}
              />
            </div>
          ))}
        </div> : <div style={{ color: 'red' }}>'no any data'</div>
      }
    </div>
  );
}

export default App;